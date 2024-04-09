const openBtn = document.getElementById('btnOn');
const btnClose = document.querySelector('#btnX');
const navigation = document.querySelector('.navigation');
const light = document.querySelector('.just-for-opacity');








openBtn.addEventListener('click', ()=>{
    navigation.style.display='flex'
    light.style.display='block'
    

})

btnClose.addEventListener('click', ()=>{
    navigation.style.display='none'
    light.style.display='none'
})

