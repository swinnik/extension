document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tab = tabs[0];
        const url = tab.url;
      chrome.runtime.sendMessage({ action: "scrapeDates", tabId: tabs[0].id }, function(response) {
        if (response) {
          console.log('Scraped Data:', url, response);
          document.getElementById('url').innerHTML = `URL: <br> <a href=${url} target="_blank">${url}</a>` || 'URL: Not found';
          document.getElementById('publishingDate').textContent = `Publishing Date: ${response.publishingDate || 'Not found'}`;
          document.getElementById('updateDate').textContent = `Last Updated: ${response.updateDate || 'Not found'}`;
        } else {
          console.log('No response received or no dates found.');
          document.getElementById('publishingDate').textContent = 'Publishing Date: Not found';
          document.getElementById('updateDate').textContent = 'Last Updated: Not found';
        }
      });
    });
      

      document.getElementById('copyButton').addEventListener('click', function() {
        const publishingDate = document.getElementById('publishingDate').textContent;
        const updateDate = document.getElementById('updateDate').textContent;
        const textToCopy = `${publishingDate}\n${updateDate}`;

        navigator.clipboard.writeText(textToCopy).then(() => {

        }, (err) => {
          console.error('Could not copy text: ', err);
        });
      });

    
  });

