let width = 100
let height = 100
let radius = 900
let offsetX = 0
let offsetY = 150

let icons = document.querySelectorAll('g#icons svg')
let innerCircle = document.getElementById('innercircle')
let outerCircle = document.getElementById('outercircle')
innerCircle.setAttribute('r', radius - width)
innerCircle.setAttribute('cx', -offsetX)
innerCircle.setAttribute('cy', -offsetY)
outerCircle.setAttribute('cx', -offsetX)
outerCircle.setAttribute('cy', -offsetY)
outerCircle.setAttribute('r', radius + width)

let iconsNumber = icons.length
let anglepart = (2 * Math.PI) / iconsNumber

for (let s = 0; s < iconsNumber; s++) {
	let ix = Math.sin(anglepart * s) * radius
	let iy = Math.cos(anglepart * s) * radius
	icons[s].setAttribute('height', height)
	icons[s].setAttribute('width', width)
	icons[s].setAttribute('x', ix - 0.5 * height - offsetX)
	icons[s].setAttribute('y', iy - 0.5 * height - offsetY)

	icons[s].addEventListener('mouseenter', (e) => {
		let iconId = e.target.id
		switch (iconId) {
			case 'icon-facebook':
				avatar.show(avatar.DOWN)
				break
			case 'icon-github':
				avatar.show(avatar.LEFTDOWN)
				break
			case 'icon-playstore':
				avatar.show(avatar.LEFT)
				break
			case 'icon-instagram':
				avatar.show(avatar.LEFTUP)
				break
			case 'icon-linkedin':
				avatar.show(avatar.UP)
				break
			case 'icon-youtube':
				avatar.show(avatar.RIGHTUP)
				break
			case 'icon-twitter':
				avatar.show(avatar.RIGHT)
				break
			case 'icon-soundcloud':
				avatar.show(avatar.RIGHTDOWN)
				break
		}
	})
}
