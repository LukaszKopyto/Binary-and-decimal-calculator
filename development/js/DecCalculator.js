import { Calculator } from './Calculator'

class DecCalculator extends Calculator {
  constructor(settings) {
    super(settings)
    console.log(this.getName())
  }
  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let surplus = 0
    for (let i = numberX.length - 1; i >= 0; i--) {
      let outcome = numberX[i] + numberY[i] + surplus
      surplus = 0
      if (outcome >= 10) {
        result[i] = outcome - 10
        surplus = 1
      } else {
        result[i] = outcome
      }
    }
    console.table(result)
    return result
  }
  changeNumber() {
    this.$calculatorDOMElement.find('.active').on('click', (e) => {
      $(e.target).empty().attr('contenteditable', 'true').focus()
    })
  }
  updateResult() {}
  initEvents() {
    this.$calculatorDOMElement.find('.operator-bar__add').on('click', (e) => {
      this.checkNumber()
      this.updateResult()
    })
  }
}
export { DecCalculator }
