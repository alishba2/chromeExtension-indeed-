chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('Message received:', request);
    if (request.action === 'searchAndApplyJobs') {
        applyToJobs();
    } else if (request.action === 'applyToJobs') {
        alert("hello world");

    }
});

async function searchAndApplyJobs(keywords, location, fName, lName, phone_no) {
    // Replace these selectors with the actual ones from the Indeed website
    const searchKeywordInput = document.querySelector('#text-input-what');
    const locationInput = document.querySelector('#text-input-where');
    
    const submitButton = document.querySelector('.yosegi-InlineWhatWhere-primaryButton');

    try {
        if (searchKeywordInput && locationInput && submitButton) {
            // Set search values
            searchKeywordInput.value = keywords;
            locationInput.value = location;

            searchKeywordInput.focus();
            searchKeywordInput.blur();
            locationInput.focus();
            locationInput.blur();

            // Click submit button to search for jobs
            submitButton.click();

            // Wait for the search results to load
            alert("Searching for jobs...");
            // observeDOM();


        } else {
            console.error('One or more elements not found.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function observeDOM() {

    const targetNode = document.querySelector('#mosaic-provider-jobcards');

    const observer = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Search results have loaded, apply to jobs

                applyToJobs();
                break;
            }
        }
    });

    observer.observe(targetNode, { childList: true, subtree: true });

}

async function applyToJobs() {
    const applyButton = document.querySelector('#indeedApplyButton');
    if (applyButton) {
        applyButton.click();
        // Notify the background script that the Apply button has been clicked
        chrome.runtime.sendMessage({ action: 'applyButtonClicked' });
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'clickContinueButton') {
        // Find the "Continue" button by its class
        const continueButton = document.querySelector('.f1b851e8123c90a77b9dcedbb57d9341b9cdc4f24f202fe2329d943f9ad3aad9');
        // If the button is found, simulate a click event
        if (continueButton) {
            continueButton.click();
        }
    }
});
