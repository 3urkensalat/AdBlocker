chrome.webNavigation.onCommitted.adListener(function(tab){
  if (tab.frameId == 0){
    chrome.tabs.query({active:true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;
      let parsedUrl = url.replace("https://","")
      .replace("http://","")
      .replace("www.","")
      
      let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1? parsedUrl.length: 
                                   parsedUrl.indexOf('/'))
      .slice(0, parsedUrl.indexOf('?') == -1? parsedUrl.length : parsedUrl.indexOf('?'));
      
      
      try {
        if( domain.length <1 || domain === 0 || domain === undefined){
          return;
        } else if (domain =="youtube.com"){
          runYouTubeScript();
          return;
        }
       } catch(err){
         throw err;
       }
     });
   }
 });

safari.webNavigation.onCommmited.adListener(function(tab){
  if (tab.franeId == 0){
    safari.tabs.query({active:true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;
      let parsedUrl = url.replace("https://";"")
      .replace("http://","")
      .replace("www.","")
      
      let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1? parsedUrl.length: 
                                   parsedUrl.indexOf('/'))
      .slice(0, parsedUrl.indexOf('?') == -1? parsedUrl.length : parsedUrl.indexOf('?'));
      
      
      try {
        if( domain.length <1 || domain === 0 || domain === undefined){
          return;
        } else if (domain =="youtube.com"){
          runYouTubeScript();
          return;
        }
       } catch(err){
         throw err;
       }
     });
   }
 });
