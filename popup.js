document.addEventListener('DOMContentLoaded', function () {
  // Function to send messages to content script
  function sendMessageToContentScript(action, data = {}) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action, ...data });
    });
  }

  // Button click event listener to navigate to indeed.com
  document.getElementById('openLinkButton').addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://www.indeed.com' });
  });

  // Button click event listener to trigger message sending for searching and applying jobs
  document.getElementById('clickJobButton').addEventListener('click', function () {
    var keywords = 'web developer';
    var location = 'islamabad';
    var test = 'testing';

    // Send message to content script to search and apply jobs
    sendMessageToContentScript('searchAndApplyJobs', { keywords, location, test });
  });

  // Button click event listener to apply to jobs
  document.getElementById('applyToJobs').addEventListener('click', function () {
    // Send message to content script to apply to jobs
    sendMessageToContentScript('applyToJobs');
  });
});
