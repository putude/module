function sliderDom(elm) {
  this.sliderContainer = elm
  this.sliderItems = elm.querySelectorAll('item')
  this.sliderShow(0)
  setInterval(() => {
    this.sliderShow(this.sliderShiftRight())
  }, 8000)

  elm.querySelector('.shift.left').addEventListener('click', () => {
    this.sliderShow(this.sliderShiftLeft())
  })
  elm.querySelector('.shift.right').addEventListener('click', () => {
    this.sliderShow(this.sliderShiftRight())
  })

}

sliderDom.prototype.sliderShow = function (n) {
  for (let i = 0; i < this.sliderItems.length; i++) {
    this.sliderItems[i].classList.remove('show')
  }
  this.sliderItems[n].classList.add('show')
}

sliderDom.prototype.sliderPosition = function () {
  let pos = 0;
  for (var i = 0; i < this.sliderItems.length; i++) {
    if (this.sliderItems[i].classList.contains('show')) pos = i
  }
  return pos
}

sliderDom.prototype.sliderShiftRight = function () {
  let numItem = this.sliderItems.length - 1
  let curPos = this.sliderPosition()
  let pos = 0
  if (curPos < numItem) pos = curPos + 1
  return pos;
}

sliderDom.prototype.sliderShiftLeft = function () {
  let numItem = this.sliderItems.length - 1
  let curPos = this.sliderPosition()
  let pos = curPos - 1
  if (curPos == 0) pos = numItem
  return pos;
}


const sliderMain = new sliderDom(document.querySelector('slider-container'))