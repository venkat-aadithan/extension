chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.irctc.co.in/";
    chrome.tabs.create({ url: newURL },function(){
    	//alert('tab created');
    	document.getElementById('usernameId').value = 'new@gmail.com';
    	console.log(uname);
    })
    	
    
});
