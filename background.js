const MainPageUrl = 'https://mr.boka.vc'

chrome.commands.onCommand.addListener(function (command) {
    if (command === 'toggle-tags') {
        chrome.tabs.create({"url": MainPageUrl, "selected": true});
    }
})
