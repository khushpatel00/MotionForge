jsmediatags.read(currentPlayer.src, {
  onSuccess: tag => {
    const picture = tag.tags.picture;
    if (picture) {
      const base64String = picture.data.map(b => String.fromCharCode(b)).join('');
      const imageUrl = `data:${picture.format};base64,${btoa(base64String)}`;
      // document.getElementsByClassName('thumb')[0].src = imageUrl;
      // document.getElementsByClassName('thumb')[1].src = imageUrl;
      // document.querySelector('.thumbCurrent').src = imageUrl;
      // backdropFilter.style.background = `url(${imageUrl})`
      // backdropFilter.style.backgroundSize = `cover`
      // backdropFilter.style.backgroundRepeat = `no-repeat`

    } else {
      console.log("No album art found");
    }
  },
  onError: err => console.error(err)
});