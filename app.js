const menu = document.querySelector('#menu');
const menuList = document.querySelector('#menuItemList');
const menuCardCross = document.querySelector('#menuCardCross');

$(document).ready(function () {
    $(menuList).hide();
    $(menuCardCross).on('click', () => {
        $(menuList).fadeOut("slow");
    });

    function addMenuItems(parentCard){
        let category = parentCard.children[1].children[0].innerHTML;
        menuList.children[0].children[1].innerHTML = category;
    }

    $(menu).on('click', (e) => {
        e.preventDefault();
        //Get Parent Card Node
        var parentCard;
        if(e.target.classList.contains('menu-card'))
            parentCard = e;
        else if(e.target.parentNode.classList.contains('menu-card'))
            parentCard = e.target.parentNode;
        else if(e.target.parentNode.parentNode.classList.contains('menu-card'))
            parentCard = e.target.parentNode.parentNode;
        
        if (parentCard != null){
            addMenuItems(parentCard);
            $(menuList).fadeIn("slow");
        }
    });

    
});