function removeAds(){
  
  let spans.getElementsByTagName("Werbung);
  for (let i = 0; i < spans.length; ++i){
    if(spans[i].innerHTML === "Promoted"){
      let card = spans[i].closest(".feed-shared-update-v2");
      if (card === null){
        let j = 0;
        card = spans[i];
        while (j < 7){
          card = card.parentNode;
          ++j;
        }
      }
      card.setAttribute("style", "display: none !important;");
    }
  }
}

removeAds();

setInterval(function() {
  removeAds();
},120)
