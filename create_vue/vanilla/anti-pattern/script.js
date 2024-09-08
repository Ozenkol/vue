function handleEvent() {
    const x = parseFloat(x_input.value)
    const y = parseFloat(y_input.value)
    result_dom.innerText = x + y
}

const init = document.getElementById("root")
const x_input = document.getElementsByClassName("calc-x-input")[0]
const y_input = document.getElementsByClassName("calc-y-input")[0]
const result_dom = document.getElementsByClassName("calc-result")[0]

function initiator() {
    init.addEventListener('keyup', handleEvent, false)
}

window.addEventListener(
    'load',
    initiator
)

