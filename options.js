function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        summary_length: document.querySelector("#summary_length").value
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#summary_length").value = result.summary_length || 10;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get("summary_length");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
