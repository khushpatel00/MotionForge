
fileName = currentPlayer.src.split('/').pop().split('.').slice(0, -1).toString().replaceAll("%20", " ");
if(fileName.length > 30) fileName = fileName.slice(0, 30) + ' . . .';
title.innerText = fileName;


jsmediatags.read(currentPlayer.currentSrc, {
  onSuccess: tag => {
    const picture = tag.tags.picture;
    if (picture) {
      const base64String = picture.data.map(b => String.fromCharCode(b)).join('');
      const imageUrl = `data:${picture.format};base64,${btoa(base64String)}`;
      document.getElementById('thumb').src = imageUrl;
    } else {
      console.log("No album art found");
    }
  },
  onError: err => console.error(err)
});