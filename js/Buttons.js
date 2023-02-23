export function Buttons({
    getKeyboard,
    getPlus,
    getMinus,
    getDivide,
    getMultiply,
    getEquals,
    getClean,
    getRemove,
    display
}) {

    getKeyboard().addEventListener('click', e => {
        const click = e.target
        if (click.classList.contains('num')) {
            display.setResult(display.getResult() + click.textContent)
        }
    })

    getPlus().addEventListener('click', e => {
        plus()
    })

    getMinus().addEventListener('click', e => {
        minus()
    })

    getMultiply().addEventListener('click', e => {
        multiply()
    })

    getDivide().addEventListener('click', e => {
        divide()
    })

    getEquals().addEventListener('click', e => {
        if (display.getOperation() === 'equals') {
            display.setCalc(display.getResult())
            display.setResult(0)
        }

        if (display.getOperation() === 'plus') {
            plus()
        }

        if (display.getOperation() === 'minus') {
            minus()
        }

        if (display.getOperation() === 'multiply') {
            multiply()
        }

        if (display.getOperation() === 'divide') {
            divide()
        }

    })

    getClean().addEventListener('click', e => {
        display.setCalc(0)
        display.setResult(0)
        display.setOperation('equals')
    })

    getRemove().addEventListener('click', e => {
        display.setResult(0)
    })

    function plus() {
        if (display.getCalc() === 0) {
            display.setCalc(display.getResult())
            display.setResult('0')
            display.setOperation('plus')
        } else {
            display.setOperation('plus')
            const result = operation[display.getOperation()](display.getCalc(), display.getResult())
            display.setCalc(result)
            display.setResult(0)
        }
    }

    function minus() {
        if (display.getCalc() === 0) {
            display.setCalc(display.getResult())
            display.setResult('0')
            display.setOperation('minus')
        } else {
            display.setOperation('minus')
            const result = operation[display.getOperation()](display.getCalc(), display.getResult())
            display.setCalc(result)
            display.setResult(0)
        }
    }

    function multiply() {
        if (display.getCalc() === 0) {
            display.setCalc(display.getResult())
            display.setResult('0')
            display.setOperation('multiply')
        } else {
            display.setOperation('multiply')
            const result = operation[display.getOperation()](display.getCalc(), display.getResult())
            display.setCalc(result)
            display.setResult(0)
        }
    }

    function divide() {
        if (display.getCalc() === 0) {
            display.setCalc(display.getResult())
            display.setResult('0')
            display.setOperation('divide')
        } else {
            display.setOperation('divide')
            const result = operation[display.getOperation()](display.getCalc(), display.getResult())
            display.setCalc(result)
            display.setResult(0)
        }
    }

    const operation = {
        plus: (a, b) => a + b,
        minus: (a, b) => a - b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b
    }

}
