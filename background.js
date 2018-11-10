let whitelistedUrls = [
    "*://*.google.co.uk/*",
    "*://*.bing.com/*"
]

function onTabUpdated(tabId, changeInfo, tab) {
    chrome.tabs.query(
        {
            highlighted: true,
            currentWindow: true,
            url: whitelistedUrls
        },
        (tabs) => {
            for(let i=0; i < tabs.length; i++) {
                chrome.browserAction.setIcon({
                    path: {"38": "images/greenicon38.png"},
                    tabId: tabs[0].id
                });
            }
        }
    );
}

chrome.tabs.onUpdated.addListener(onTabUpdated);
chrome.tabs.onHighlighted.addListener(onTabUpdated);
