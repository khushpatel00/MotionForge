isFullPlayerOpen = true;

function toggleFullPlayer() {
    if (isFullPlayerOpen) {
        gsap.to(fullPlayer, { // closing
            opacity: 0,
            y: '100%',
            display: "none",
            // filter: "blur(10px)", // causes error (jittered background blur in firefox/safari)
        })
        gsap.to(document.getElementById('fullScreenToggle'), {
            rotate: -90,
        })
        isFullPlayerOpen = false;
    }
    else {
        gsap.fromTo(fullPlayer, {
            y: '80%',
            display: "flex",
            scale: 1.5,
            // filter: "blur(10px)", // causes error (jittered background blur in firefox/safari)
            // opacity: 0,
        }, { // opening
            y: 0,
            display: "flex",
            scale: 1,
            // filter: "blur(0px)", // causes error (jittered background blur in firefox/safari)
            opacity: 1,
            duration: 1,
            ease: "circ.out"
        })
        gsap.to(document.getElementById('fullScreenToggle'), {
            rotate: 90,
        })
        isFullPlayerOpen = true;
    }
    setTimeout(() => {
        refreshUI();
    }, 1000);
}
// console.log(window.location.href.replace("/index.html", "")+collection[1].src);

