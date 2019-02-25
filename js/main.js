(() => {
//create variable stack and grab all DOM elements from page
	let aud = document.querySelector('audio'),
		play = document.querySelector('#play'),
		pause = document.querySelector('#pause'),
		rewind = document.querySelector('#rewind');

		//write function for audio element
		function playAudio() {
			aud.play();
		}

		function pauseAudio() {
			aud.pause(true);
		}

		function rewindAudio() {
			aud.currentTime = 0;
		}

		//add event handling
		
		play.addEventListener("click", playAudio);
		pause.addEventListener("click", pauseAudio);
		rewind.addEventListener("click", rewindAudio);
})();