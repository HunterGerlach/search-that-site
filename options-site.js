let sitePage = document.getElementById('siteDiv');
  const google = {"url": "google.com", "color": {"primary": "#3aa757", "secondary": "#000"}};
  const redhat = {"url": "access.redhat.com", "color": {"primary": "#EE0000", "secondary": "#000"}};
  const k8s    = {"url": "kubernetes.io", "color": {"primary": "#326de6", "secondaty": "#fff"}};
  const so     = {"url": "stackoverflow.com", "color": {"primary": "#f9bb2d", "secondary": "#000"}};
  const ibm    = {"url": "cloud.ibm.com", "color": {"primary": "#0530ad", "secondary": "#fff"}};
  const kSites = [google, redhat, k8s, so, ibm];
  function constructSiteOptions(kSites) {
    for (let item of kSites) {
      let site = document.createElement('p');
      site.innerHTML = item.url;
      site.style.backgroundColor = item.color.primary;
      site.style.color = item.color.secondary;
      site.addEventListener('click', function() {
        chrome.storage.sync.set({site: item}, function() {
          alert('Data saved');
	  console.log('site is ' + item.url);
        })
      });
      sitePage.appendChild(site);
    }
  }
  constructSiteOptions(kSites);
