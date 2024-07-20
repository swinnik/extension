chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrapeDates" && request.tabId) {
        console.log('Executing script on tab:', request.tabId);
      chrome.scripting.executeScript(
        {
          target: { tabId: request.tabId },
          function: scrapeDates,
        },
        (results) => {
          if (results && results[0] && results[0].result) {
            console.log('Script execution result:', results[0].result);
            sendResponse(results[0].result);
          } else {
            console.log('No result from script execution');
            sendResponse({ publishingDate: null, updateDate: null });
          }
        }
      );
      return true; // Will respond asynchronously.
    } else {
        console.log('Invalid request or missing tabId');
      }
  });
  
  
  function scrapeDates() {
    let publishingDate = document.querySelector(
      'meta[name="pubdate"], meta[property="article:published_time"], time[datetime], meta[name="date"], meta[itemprop="datePublished"], meta[name="DC.date.issued"], meta[name="DC.Date.created"], meta[name="DC.date"]'
    );
    let updateDate = document.querySelector(
      'meta[name="lastmod"], meta[property="article:modified_time"], meta[itemprop="dateModified"], meta[name="DC.date.modified"], meta[name="DC.Date.revised"]'
    );
  
    return {
      publishingDate: publishingDate ? publishingDate.getAttribute('content') || publishingDate.getAttribute('datetime') : null,
      updateDate: updateDate ? updateDate.getAttribute('content') || updateDate.getAttribute('datetime') : null,
    };
  }
  