function Carousel(elm){
  this.carouselSlide = elm.querySelector('.carousel-slide')
  this.content = this.carouselSlide.querySelectorAll('.carousel-content')
  this.prevBtn = elm.querySelector('.shift.left')
  this.nextBtn = elm.querySelector('.shift.right')
  this.contentWidth = this.content[0].clientWidth
  this.counter = 1

  this.nextBtn.addEventListener('click', () => {
    this.carouselSlide.style.transition = "transform 0.4s ease-in-out"
    this.counter++
    this.counter > this.content.length ? this.counter = 1 : ''
    this.carouselSlide.style.transform = 'translateX(' + (-this.contentWidth * (this.counter - 1)) + 'px)';
  })
  this.prevBtn.addEventListener('click', () => {
    this.carouselSlide.style.transition = "transform 0.4s ease-in-out"
    this.counter--
    this.counter < 1 ? this.counter = this.content.length : ''
    this.carouselSlide.style.transform = 'translateX(' + (-this.contentWidth * (this.counter - 1)) + 'px)';
  })
  window.addEventListener('resize', () => {
    this.contentWidth = this.content[0].clientWidth
    this.carouselSlide.style.transform = 'translateX(' + (-this.contentWidth * (this.counter - 1)) + 'px)';
  })
}

const carousel = new Carousel(document.querySelector('.carousel-container'))