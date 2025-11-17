function refreshUI(){
  console.log(currentPlayer.src)
  
  jsmediatags.read(currentPlayer.src, {    
    onSuccess: tag => {
      const picture = tag.tags.picture;
      if (picture) {
        const base64String = picture.data.map(b => String.fromCharCode(b)).join('');
        const imageUrl = `data:${picture.format};base64,${btoa(base64String)}`;
        document.getElementsByClassName('thumb')[0].src = imageUrl;
        document.getElementsByClassName('thumb')[1].src = imageUrl;
        document.querySelector('.thumbCurrent').src = imageUrl;
      } else {
        console.log("No album art found");
      }
    },
    onError: err => console.error(err)
  });


  let fileName = currentPlayer.src.split('/').pop().split('.').slice(0, -1).toString().replaceAll("_", " ").replaceAll("  ", "_ ");
  if (fileName.length > 30) fileName = fileName.slice(0, 30) + ' . . .';
  for (let index = 0; index < audTitle.length; index++) {
    audTitle[index].innerHTML = fileName;
  };
  // console.log('UI refreshed');
  renderNextThumb();
  // document.querySelector('.thumbCurrent').src = document.querySelector('.thumbNext').src;
}
function renderNextThumb(){
  webLocation = window.location.href;
  if(window.location.href.split('/').pop() == 'index.html') webLocation = window.location.href.split('/').slice(0, -1).join('/') + "/";
  console.log(webLocation + collection[currentPlayIndex].src)
  jsmediatags.read(webLocation + collection[currentPlayIndex].src, {    
    onSuccess: tag => {
      const picture = tag.tags.picture;
      if (picture) {
        const base64String = picture.data.map(b => String.fromCharCode(b)).join('');
        const imageUrlNext = `data:${picture.format};base64,${btoa(base64String)}`;
        document.querySelector('.thumbNext').src = imageUrlNext;
      } else {
        console.log("No album art found");
      }
    },
    onError: err => console.error(err)
  });
}

function recommendationCard(albumName, authorName, thumbnail){
    return  `<div class="audCard bg-neutral-800 rounded-2xl duration-400 rounded-t-2xl min-w-1/4 xl:min-w-2/12 h-fit my-10 mx-3 lg:mx-7 md:mx-5">
                    <div class="hoverCard relative bg-neutral-900 me-auto rounded-4xl rounded-t-2xl">
                        <img class="-z-1 hoverCardImg absolute top-0 -rotate-12 "
                            src="${thumbnail}" alt="">
                        <img class="-z-1 hoverCardImg absolute top-0 rotate-12 "
                            src="${thumbnail}" alt="">
                        <img class="rounded-t-2xl" src="${thumbnail}" alt="">
                    </div>
                    <div class="flex justify-around p-2 px-5">
                        <h3 class="audTitle text-xs sm:text-sm md:text-[16px] lg:text-lg  ">${albumName}</h3>
                        <h4 class="audArtist text-xs sm:text-sm md:text-[16px] lg:text-lg   text-neutral-400">${authorName}</h4>
                    </div>
                </div>`;
}


foryouSlider.innerHTML += recommendationCard('Blue Eyes', 'Honey Singh', './assets/audio/thumb/Blue Eyes_Yo Yo Honey Singh.jpg');
foryouSlider.innerHTML += recommendationCard('Blue Eyes', 'Honey Singh', './assets/audio/thumb/Blue Eyes_Yo Yo Honey Singh.jpg');
foryouSlider.innerHTML += recommendationCard('Glory', 'Honey Singh', './assets/audio/thumb/Millionaire Yo Yo Honey Singh.jpg');
foryouSlider.innerHTML += recommendationCard('Blue Eyes', 'Honey Singh', './assets/audio/thumb/Blue Eyes_Yo Yo Honey Singh.jpg');
foryouSlider.innerHTML += recommendationCard('Blue Eyes', 'Honey Singh', './assets/audio/thumb/Blue Eyes_Yo Yo Honey Singh.jpg');
foryouSlider.innerHTML += recommendationCard('Glory', 'Honey Singh', './assets/audio/thumb/Millionaire Yo Yo Honey Singh.jpg');

// togglenext();
currentPlayer.src = collection[currentPlayIndex++].src;
currentPlayer.pause();
refreshUI();
document.addEventListener("DOMContentLoaded", refreshUI());
// function switchThumbNext(){
//   thumbPrev.src = thumbCurrent.src;
//   thumbCurrent.src = thumbNext.src;
//   thumbNext.src = '#';
// }                     
function switchThumbNext(){
  // temp = thumbPrev.className
  // thumbPrev.className = thumbNext.className
  // thumbNext.className = thumbCurrent.className;
  // thumbCurrent.className = temp;
  temp = thumbNext.className;
  thumbNext.className = thumbCurrent.className
  thumbCurrent.className = thumbPrev.className;
  thumbPrev.className = temp;
}                     
