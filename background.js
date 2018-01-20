chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.irctc.co.in/";
    chrome.tabs.create({ url: newURL,"selected":true },function(tab){
    	chrome.tabs.executeScript(tab.id, {file: "myscript.js"});
    });
    	
});
