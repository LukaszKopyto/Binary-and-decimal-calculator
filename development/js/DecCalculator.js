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
    return result
  }
  changeNumber() {
    this.$calculatorDOMElement.find('.active').on('click', (e) => {
      $(e.target).empty().attr('contenteditable', 'true').focus()
      this.validate()
    })
  }
  updateResult() {
    console.log(this.resultNumberArray)
    let root = this.$calculatorDOMElement
    let $resultNumber = root.children('.group-number').children('.result-bit')
    for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
      let valueResult = parseInt($resultNumber.eq(j).find('.active').text())
      if (this.resultNumberArray[i] != valueResult) {
        $resultNumber
          .eq(j)
          .children(':first-child')
          .text(this.resultNumberArray[i])
      }
    }
  }
  initEvents() {
    this.$calculatorDOMElement.find('.operator-bar__add').on('click', (e) => {
      this.checkNumber()
      this.updateResult()
    })
  }
  validate() {
    this.$calculatorDOMElement.find('.active').on('keydown', function (e) {
      if (!(e.which >= 48 && e.which <= 57)) {
        return false
      } else if ($(e.currentTarget).text().length === 1) {
        return false
      }
      $(e.currentTarget).keyup(() => {
        $(this).parent().parent().parent().find('.tooltip').show(1200)
      })
    })
  }
}
export { DecCalculator }
