(() => {
//create variable stack and grab all DOM elements from page
	let aud = document.querySelector('audio'),
		play = document.querySelector('#play'),
		pause = document.querySelector('#pause'),
		rewind = document.querySelector('#rewind'),
		tracks = document.querySelectorAll('.trackholder');

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

		function swapSource() {
			let currentTrack = this.dataset.currenttrack;

			aud.src = `audio/${currentT
				rack}`;
			aud.load();
			aud.play();
		}

		//add event handling
		
		play.addEventListener("click", playAudio);
		pause.addEventListener("click", pauseAudio);
		rewind.addEventListener("click", rewindAudio);

		tracks.forEach(track => track.addEventListener("click", swapSource));
})();