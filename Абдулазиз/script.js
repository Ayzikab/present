let b1 = document.querySelector('.b1'),
    b2 = document.querySelector('.b2'),
    b3 = document.querySelector('.b3'),
    p__i1 = document.getElementById('p__i1'),
    p__i2 = document.getElementById('p__i2'),
    p__i3 = document.getElementById('p__i3'),
    p__i4 = document.getElementById('p__i4'),
    popup = document.querySelector('.pop-up');
    ayzik_content = document.querySelector('.ayzik-content')
b1.addEventListener('click', function (){
    p__i1.style = `display:block`;
    ayzik_content.style = `opacity:0`;
    popup.style = `opacity:1; visibility:visible`
})
b2.addEventListener('click', function (){
    p__i2.style = `display:block`;
    ayzik_content.style = `opacity:0`;
    popup.style = `opacity:1; visibility:visible`
})
b3.addEventListener('click', function (){
    p__i3.style = `display:block`;
    ayzik_content.style = `opacity:0`;
    popup.style = `opacity:1; visibility:visible`
})
b4.addEventListener('click', function (){
    p__i4.style = `display:block`;
    ayzik_content.style = `opacity:0`;
    popup.style = `opacity:1; visibility:visible`
})

popup.addEventListener('click', function (){
    setTimeout(() => {
        p__i1.style = `display:none`;
        p__i2.style = `display:none`;
        p__i3.style = `display:none`;  
        p__i4.style = `display:none`;  
    }, 500); 
    popup.style = `opacity:0; visibility:hidden`
})