/* ---------------------*
 * Lazy Load on Click
 * ---------------------*/

function lazyLoadVideoClick () {
	const videoOverlay = document.querySelector('.video-overlay');
	
	videoOverlay.addEventListener('click', function() { 
		let videoElem = document.querySelector('.lazy-video-click');
		videoElem.src = videoElem.dataset.src;
	}, false);
}
lazyLoadVideoClick();


/* ---------------------*
 * Lazy Load on Scroll
 * ---------------------*/

function lazyLoadVideoScroll () {
    let videoElem = document.querySelector('.lazy-video-scroll');

    let observer = new IntersectionObserver(function(entries) {
        if (
			entries[0].isIntersecting === true && 
			! videoElem.classList.contains('video-started')
		) {
            videoElem.src = videoElem.dataset.src;
			videoElem.classList.add('video-started');
        }
    }, { threshold: [0.10] });
    
    observer.observe(videoElem);
}
lazyLoadVideoScroll();

/*
Sources: 
• https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
• https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/



