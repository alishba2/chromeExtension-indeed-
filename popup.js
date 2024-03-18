document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var keywords = 'web developer';
    var location = 'islamabad';
    var test = 'testing';

    // Send message to content script to search and apply jobs
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'searchAndApplyJobs',
      keywords: keywords,
      location: location,
      test: test // Optionally send additional data
    });

    // Send message to content script to apply to jobs
    chrome.tabs.sendMessage(tabs[0].id, { action: 'applyToJobs' });
  });
});
