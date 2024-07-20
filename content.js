// content.js

chrome.runtime.sendMessage({ action: "getDates" }, (response) => {
    chrome.runtime.sendMessage({
      action: "sendDates",
      data: response,
    });
  });
  