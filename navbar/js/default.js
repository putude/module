document.getElementById('navicon').addEventListener('click', (elm) => {
  document.querySelector('.navbar').classList.toggle('show')
})

document.querySelectorAll('.nav-dropdown-toggle').forEach(dropdown => {
  dropdown.addEventListener('click', elm => {
    elm.preventDefault()
    let navClass = elm.target.parentNode.classList
    navClass.contains('expand') ? navClass.remove('expand') : navClass.add('expand')
  })
})

document.addEventListener('click', elm => {
  !elm.target.classList.contains('nav-dropdown-toggle') &&
    document.querySelectorAll('.nav-dropdown').forEach(elm => {
      elm.classList.contains('expand') ? elm.classList.remove('expand') : ''
    })
})