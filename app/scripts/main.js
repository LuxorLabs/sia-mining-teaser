function fadeInElastic (el) {
  TweenMax.fromTo(
    el,
    1.5,
    { autoAlpha: 0, yPercent: 50 },
    { autoAlpha: 1, yPercent: 0, ease: Back.easeOut.config(1.7) }
  )
}

var fadeInProperties = [
  '#hero--logo',
  '#hero--title',
  '#hero--subtitle',
  '#hero--input'
]

document.addEventListener('DOMContentLoaded', function () {
  fadeInElastic(fadeInProperties)
})
