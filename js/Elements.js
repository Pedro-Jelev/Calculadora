export function Elements() {
  function getScreenLastCalc() {
    return document.querySelector('.display .last-calc')
  }

  function getScreenResult() {
    return document.querySelector('.display .result span')
  }

  function getScreenOperation() {
    return document.querySelector('.display .operation img')
  }

  function getKeyboard() {
    return document.querySelector('.keyboard')
  }

  function getPlus() {
    return document.querySelector('.plus')
  }

  function getMinus() {
    return document.querySelector('.minus')
  }

  function getDivide() {
    return document.querySelector('.divide')
  }

  function getMultiply() {
    return document.querySelector('.multiply')
  }

  function getEquals() {
    return document.querySelector('.equals')
  }

  function getClean() {
    return document.querySelector('.clean')
  }

  function getRemove() {
    return document.querySelector('.remove')
  }



  return {
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
  }
}
