import { Calculator } from './Calculator'

class DecCalculator extends Calculator {
  constructor(settings) {
    super(settings)
    console.log(this.getName())
  }
  add() {}
  changeNumber() {
    this.$calculatorDOMElement.find('.active').on('click', (e) => {
      $(e.target).empty().attr('contenteditable', 'true').focus()
    })
  }
  updateResult() {}
  initEvents() {}
}
export { DecCalculator }
