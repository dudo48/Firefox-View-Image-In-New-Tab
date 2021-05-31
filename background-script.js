browser.menus.create({
    id: "view-image-new-tab",
    title: "View Image In New Tab",
    contexts: ["image"]
});

browser.menus.onClicked.addListener((info, tab) => {
    browser.tabs.create({
        url: info.srcUrl,
        index: tab.index + 1
    });
});