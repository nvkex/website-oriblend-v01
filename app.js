const menu = document.querySelector('#menu');
const menuList = document.querySelector('#menuItemList');
const menuCardCross = document.querySelector('#menuCardCross');
const MENU_ITEMS = {
    lassi: [
        'Simple Lassi',
        'Banana Bhai Lassi',
        'Mango Lassi',
        'Dry Fruit Lassi',
        'Banana Mango',
        'Strawberry Lassi',
        'Kiwi Lassi',
        'Pineapple Lassi',
        'Ajay Devgan’s Favorite (Kesar Lassi)',
        'Extra Cream Lassi'
    ],
    smoothies: [
        'Ginger beets',
        'Strawberry Fantasy',
        'Organic Forest',
        'Organic Red',
        'Organic Sunshine',
        'Green Reviver',
        'Passion Storm',
        'Raspberry Heaven',
        'Berry Burst',
        'Pineapple Sunset',
        'Acai Kick',
        'Super Green',
        'Mango Dream',
        'Coconut Crush'
    ],
    juices: [
        'Lychee',
        'Mango',
        'Banana',
        'Apple',
        'Acai',
        'Grape',
        'Pomegranate',
        'Pineapple',
        'Orange',
        'Mosambi',
        'Ginger Lime',
        'Fresh Lime',
        'Kiwi',
        'Bitter Gourd',
        'Spinach',
        'Broccoli',
        'Carrot',
        'Ghaas Phoos(Spinach + Broccoli + Cabbage + Celery)',
        'Beet My Carrot(Beetroot + Carrot + Ginger + Celery)'

    ],
    snacks: [
        'Yogurt Bowl (Yogurt, banana, oats, Peanut Butter, Vanilla)',
        'Coconut Munch (Oats, Coconut, Yogurt, Vanilla)',
        'Seed Limit (Chia Seeds, Hemp Seeds, Spinach paste)',
        'Hey Honey (Honey, Yogurt, Banana, Almond Milk)',
        'Nuclear Nuts(Almonds, Cashews, Coconut, Walnuts, Dates, Apricots, Pistachios)',
        'Paneer Panini',
        'Paneer Cheese Wrap',
        'Veggie Wrap',
        'Cheesy Wrap',
        'Egg Wrap(N)',
        'Egg White Wrap(N)',
        'Cheesy Egg White Wrap(N)',
        'Egg White Veggie Wrap(N)',
        'Oatmeal Cookie'
    ],
    combos: [],
    cafe: [
        'Simple Chai',
        'Masala Chai',
        'Ilaichi Burst',
        'Adrak Ilaichi',
        'Green Tea',
        'Ice tea',
        'Sugar Free Tea',
        'Coffee',
        'Black Coffee',
        'Black Coffee with Sugar',
        'Cappuccino',
        'Coco',
    ]
}

$(document).ready(function () {

    $(menuList).hide();
    menuList.classList.remove('d-none');

    $(menuCardCross).on('click', () => {
        $(menuList).fadeOut("slow");
    });

    function addMenuItems(parentCard) {
        let category = parentCard.children[1].children[0].innerHTML;
        var listTemplate = ``;

        //clear previous list items
        menuList.children[0].children[3].innerHTML = "";

        //add menu heading
        menuList.children[0].children[1].innerHTML = category;

        //create list template
        if (category.toLowerCase() == 'smoothies') {
            MENU_ITEMS.smoothies.forEach((item) => {
                listTemplate += `<li>${item}<li>`;
            });
        }
        else if (category.toLowerCase() == 'juices') {
            MENU_ITEMS.juices.forEach((item) => {
                listTemplate += `<li>${item}<li>`;
            });
        }
        else if (category.toLowerCase() == 'lassi') {
            MENU_ITEMS.lassi.forEach((item) => {
                listTemplate += `<li>${item}<li>`;
            });
        }
        else if (category.toLowerCase() == 'snacks') {
            MENU_ITEMS.snacks.forEach((item) => {
                listTemplate += `<li>${item}<li>`;
            });
        }
        else if (category.toLowerCase() == 'oriblend cafe') {
            MENU_ITEMS.cafe.forEach((item) => {
                listTemplate += `<li>${item}<li>`;
            });
        }
        else if (category.toLowerCase() == 'combos') {
            MENU_ITEMS.combos.forEach((item) => {
                listTemplate += `<li>${item}<li>`;
            });
        }

        //inject list to html
        menuList.children[0].children[3].innerHTML = listTemplate;

    }

    $(menu).on('click', (e) => {
        e.preventDefault();
        //Get Parent Card Node
        var parentCard;
        if (e.target.classList.contains('menu-card'))
            parentCard = e;
        else if (e.target.parentNode.classList.contains('menu-card'))
            parentCard = e.target.parentNode;
        else if (e.target.parentNode.parentNode.classList.contains('menu-card'))
            parentCard = e.target.parentNode.parentNode;

        if (parentCard != null) {
            addMenuItems(parentCard);
            $(menuList).fadeIn(400);
        }
    });


});