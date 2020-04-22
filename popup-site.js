let siteSettings = document.getElementById('siteSettings');
console.log("hello world");
  chrome.storage.sync.get('site', function(data) {
    let site = document.createElement('h3');
	  site.innerHTML = data.site.url;
      site.style.backgroundColor = data.site.color.primary;
      site.style.color = data.site.color.secondary;
    
    var addr = document.getElementById('siteAddress');
    addr.value = "site:" + data.site.url;

  siteSettings.appendChild(site);
});

window.onload = function() {
    document.getElementById("focus").focus();
};
