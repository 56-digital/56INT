function initVideo () {
	var vidEl = document.getElementById('vid')
	var vid = vidEl.querySelector('video')
	var muteEl = document.getElementById('mute')

	vidEl.classList.remove('op0')
	vidEl.classList.add('curn')
	vid.play()

	vidEl.addEventListener('mouseenter', function () {mute.classList.remove('dn')})
	vidEl.addEventListener('mouseleave', function () {mute.classList.add('dn')})

	vidEl.addEventListener('click', function () {
		vid.muted ? handleMute(false, 'Mute') : handleMute(true, 'Unmute')
	})

	vidEl.addEventListener('mousemove', function (e) {
		if (muteEl.classList.contains('dn')) muteEl.classList.remove('dn')

		muteEl.style.top = e.offsetY + 'px'
		muteEl.style.left = e.offsetX + 15 + 'px'
	})

	function handleMute (bool, str) {
		vid.muted = bool
		muteEl.innerText = str
	}
}

function changingText () {
	var letter = document.getElementById('let')
	var sen = document.getElementById('sen')
	var strt = 0

	var strings = [
		{l: 'D', s: 'igital design studio based in Toronto'},
		{l: 'T', s: 'he feelings don\'t really go away'},
		{l: 'C', s: 'reating subversive digital experiences'},
		{l: 'W', s: 'e like interactive + experimental'}
	]

	function change () {
		console.log(strt)

		letter.innerText = strings[strt].l
		sen.innerText = strings[strt].s
	}

	var run = setInterval(function () {
		strt < strings.length - 1 ? strt++ : strt = 0

		change()
	}, 4000)
	
	change()
}

function introText () {
	var strt = 0
	
	var strings = ['\<span class="ffo fsi">N\</span>ew', 'site', 'under', 'construction', '']
	var txt = document.getElementById('text')

	function next () {
		txt.innerHTML = strings[strt]	
		strt++
	}

	function done () {
		clearInterval(run)
		txt.classList.add('dn')
		
		initVideo()
	}

	var run = setInterval(function () {
		strt == 4 ? done() : next()
	}, 300)
}



function init () {
	introText()
	changingText()
}

init()