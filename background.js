function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(settings) {
    browser.tabs.query({ currentWindow: true, active: true })
        .then((tabs) => {
            let url = tabs[0].url;
            browser.tabs.create({
                url: "https://smmry.com/" + url + "#&SM_LENGTH=" + settings.summary_length
            });
        })
}

function openPage() {
    let getting = browser.storage.sync.get("summary_length");
    getting.then(onGot, onError);
}

browser.browserAction.onClicked.addListener(openPage);