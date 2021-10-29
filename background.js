function openPage() {
    browser.tabs.query({ currentWindow: true, active: true })
        .then((tabs) => {
            let url = tabs[0].url;
            browser.tabs.create({
                url: "https://smmry.com/" + url + "#&SM_LENGTH=10"
            });
        })
}

browser.browserAction.onClicked.addListener(openPage);