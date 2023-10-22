let pList ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?"
let pStor = " ";
let pGen =(pLen)=>{
    if(pLen == " "){
        alert('asalt')
    }
    pStor = ' ';
    for(i = 0; i < pLen; i++){
        pStor += pList.charAt(Math.floor(Math.random() * pList.length));
    }
    return pStor; 
}

$('.btn').on('click',()=>{
    let x = $('.input2').val()
    if(isNaN(x)){
        alert('Please Enter The Number..')
    }
    else if(x === ''){
        alert('Input is empty')
    }
    $('.input1').val(pGen(x))
}) //jQuary
