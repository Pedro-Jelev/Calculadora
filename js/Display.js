export function Display(calc, result, operation) {

    function getCalc() {
        return Number(calc.textContent)
    }

    function getResult() {
        return Number(result.textContent)
    }

    function getOperation() {
        return operation.name
    }

    function setOperation(e) {
        const oper = operation
        oper.src = `https://raw.githubusercontent.com/Pedro-Jelev/Arquivos/main/Calculadora/${e}.svg`

        oper.name = String(e)
    }

    function setCalc(n) {
        calc.textContent = String(n)
    }

    function setResult(n) {
        result.textContent = String(n)
    }

    return { getCalc, getResult, getOperation, setOperation, setCalc, setResult }
}