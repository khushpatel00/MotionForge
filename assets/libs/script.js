let fileName = currentPlayer.src.split('/').pop().split('.').slice(0, -1).toString().replaceAll("%20", " ");
if (fileName.length > 30) fileName = fileName.slice(0, 30) + ' . . .';
for (let index = 0; index < audTitle.length; index++) {
  audTitle[index].innerHTML = fileName;
};

jsmediatags.read(currentPlayer.currentSrc, {
  onSuccess: tag => {
    const picture = tag.tags.picture;
    if (picture) {
      const base64String = picture.data.map(b => String.fromCharCode(b)).join('');
      const imageUrl = `data:${picture.format};base64,${btoa(base64String)}`;
      document.getElementsByClassName('thumb')[0].src = imageUrl;
      document.getElementsByClassName('thumb')[1].src = imageUrl;
    } else {
      console.log("No album art found");
    }
  },
  onError: err => console.error(err)
});


let albumCard = `<div
                  class="audCard mx-auto bg-neutral-800 w-1/5 hover:w-3/12 max-h-fit rounded-2xl duration-400  rounded-t-2xl">
                  <div class="hoverCard relative bg-neutral-900 me-auto rounded-4xl rounded-t-2xl">
                      <img class="-z-1 hoverCardImg absolute top-0 -rotate-12 "
                          src="assets/audio/thumb/Blue Eyes_Yo Yo Honey Singh.jpg" alt="">
                      <img class="-z-1 hoverCardImg absolute top-0 rotate-12 "
                          src="assets/audio/thumb/Blue Eyes_Yo Yo Honey Singh.jpg" alt="">
                      <img class="rounded-t-2xl" src="assets/audio/thumb/Blue Eyes_Yo Yo Honey Singh.jpg" alt="">
                  </div>
                  <div class="flex justify-around p-2 px-5">
                      <h3 class="audTitle">Aria Math</h3>
                      <h4 class="audArtist text-neutral-400">-C418</h4>
                  </div>
                </div>`;

