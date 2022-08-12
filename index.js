let count = 0
let countEl = document.getElementById("counter-el")
let decreaseEl = document.getElementById("decrease-el")
let resetEl = document.getElementById("reset-el")
let increaseEl = document.getElementById("increase-el")
let entryEl = document.getElementById("entry-el")

function increase() {
    count += 1
    countEl.textContent = count
}

function decrease() {
    count -= 1
    if (count <= 0)
        return 0
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}

function save() {
    let entryStr = count + " - "
    entryEl.textContent += entryStr
    countEl.textContent = count
    count = 0
}