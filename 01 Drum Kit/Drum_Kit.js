// Wenn eine Taste gedrückt wird, wird der Jeweilige Klang abgespielt
function playSound(e) {
  let taste = e.keyCode
  const key = document.querySelector(`.key[data-key="${taste}"]`)
  const audio = document.querySelector(`audio[data-key="${taste}"]`)

  if (!audio) return // stoppt die Funktion, wenn eine nicht angegebene Taste gedrückt wird
  audio.currentTime = 0 // damit man Spammen kann
  audio.play()
  key.classList.add('playing') // Gibt dem Jeweiligen Div die Klasse Playing, damit es gelb aufblinkt
}

// Diese Funktion dient nur dazu, die klasse Playing nach erfasster "Transitionend" wieder zu entfernen
function removeTransition(e) {
  if (e.propertyName !== 'transform') return // stoppt die Funktion wenn nicht transformed wird
  this.classList.remove('playing')
}

const keys = document.querySelectorAll(`.key`)
window.addEventListener('keydown', playSound) // Checkt ob eine Taste gedrückt wird
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
