chrome.runtime.onInstalled.addListener(function() {
    
    // Set defaults
   chrome.storage.sync.set({site: {"url": "access.redhat.com", "color": {"primary": "#EE0000", "secondary": "#000"}}}, function() {
	    console.log("The site is access.redhat.com");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
