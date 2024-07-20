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
  
    let counter = 0;
    document.getElementById('incrementButton').addEventListener('click', function() {
      counter++;
      document.getElementById('title').textContent = "Button Clicked!";
      document.getElementById('description').innerHTML = `You've clicked the button <br> ${counter} times.`;
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        counter = 0;
        document.getElementById('title').textContent = "Counter Reset!";
        document.getElementById('description').innerHTML = `Counter has been reset to <br> ${counter}.`;
      });
    
  });