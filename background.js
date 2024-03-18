chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && changeInfo.url) {
      // Check if the updated URL matches your target URL pattern
      if (changeInfo.url.startsWith('https://pk.indeed.com/')) {
          // Send a message to the content script to trigger the applyToJobs function
          chrome.tabs.sendMessage(tabId, { action: 'applyToJobs' });
      }
  }
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && changeInfo.url) {
      if (changeInfo.url.startsWith('https://smartapply.indeed.com/beta/indeedapply/form/resume')) {
          // Execute content script in the newly opened tab
          chrome.tabs.executeScript(tabId, { file: 'contentScript.js' });
      }
  }
});

// background.js



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // alert("clicking..")
  // Check if the updated URL matches the specified pattern
  if (changeInfo.status === 'complete' && changeInfo.url && changeInfo.url.startsWith('https://smartapply.indeed.com/beta/indeedapply/form/resume')) {
      // Send a message to the content script to click the Continue button
      chrome.tabs.sendMessage(tabId, { action: 'clickContinueButton' });
  }
});

