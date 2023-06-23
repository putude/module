
let lbxElm = document.querySelectorAll('.lbx-item')
lbxElm.forEach(elm=>{
    elm.addEventListener('click',evt=>{
        evt.preventDefault()
        if(document.querySelector('#lbx-modal') !== null) document.querySelector('#lbx-modal').remove()
        let lbxModal = document.createElement('div')
        let contentModal = document.createElement('div')
        let closeModal = document.createElement('button')
        closeModal.classList.add('lbx-control')
        closeModal.innerHTML = '&#10006;'
        let imgDom = document.createElement('img')
        lbxModal.setAttribute('id','lbx-modal')
        lbxModal.classList.add('lbx-control')
        imgDom.setAttribute('src',evt.currentTarget.href)
        contentModal.append(imgDom)
        lbxModal.append(contentModal)
        document.querySelector('body').append(lbxModal)
        imgDom.addEventListener('load',()=>{
            contentModal.append(closeModal)
        })
        lbxModal.addEventListener('click',(evt)=>{
            document.querySelector('#lbx-modal') && evt.target.classList.contains('lbx-control') && lbxClosing()
        })
        document.addEventListener('keydown',e=>{
            document.querySelector('#lbx-modal') && e.key === 'Escape' && lbxClosing()
        })

    })
})

function lbxClosing() {
    if (document.querySelector('#lbx-modal')) {
        document.querySelector('#lbx-modal').classList.add('modal-closing')
        setTimeout(()=>{
            document.querySelector('#lbx-modal') && document.querySelector('#lbx-modal').remove()
        },500)
    }
}