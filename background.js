const DEFAULT_SM_LENGTH = 10;

function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(settings) {
    browser.tabs.query({ currentWindow: true, active: true })
        .then((tabs) => {
            let url = tabs[0].url;
            sm_length = settings.summary_length === undefined ? DEFAULT_SM_LENGTH : settings.summary_length;
            browser.tabs.create({
                url: "https://smmry.com/" + url + "#&SM_LENGTH=" + sm_length
            });
        })
}

function openPage() {
    let getting = browser.storage.sync.get("summary_length");
    getting.then(onGot, onError);
}

browser.browserAction.onClicked.addListener(openPage);