function _class(name){
    return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        _class("tab-header")[0].getElementsByClassName("active")
        [0].classList.remove("active");
        tabPanes[i].classList.add("active");
   

    _class("tab-content")[0].getElementsByClassName("active")
    [0].classList.remove("active");
    _class("tab-content")[0].getElementsByTagName("div")
    [i].classList.add("active");
   
});
}





$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})


// MENU ANIMATION

$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active');
    })
})



