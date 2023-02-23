import { Elements } from "./Elements.js"
import { Display } from "./Display.js"
import { Buttons } from "./Buttons.js"

const {
    getScreenLastCalc,
    getScreenResult,
    getScreenOperation,
    getKeyboard,
    getPlus,
    getMinus,
    getDivide,
    getMultiply,
    getEquals,
    getClean,
    getRemove
} = Elements()

const display = Display(getScreenLastCalc(), getScreenResult(), getScreenOperation())

Buttons({
    getKeyboard,
    getPlus,
    getMinus,
    getDivide,
    getMultiply,
    getEquals,
    getClean,
    getRemove,
    display
})

alert("Os botões pintados de vermelho ainda não estão funcionando. Obrigado pela comreensão")
