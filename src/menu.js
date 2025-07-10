export function createMenu() {

    let menuArray = [
        '$11.99 - - - - - - - - Ham and Swiss Sandwich - - - (Contains Gluten)',
        '$10.99 - - - - - - - - Chicken Noodle Soup',
        '$11.99 - - - - - - - - Fish and Chips - - - (Contains Fish)',
        '$24.99 - - - - - - - - Super Meat Pizza',
        '$49.99 - - - - - - - - Mario Special - - - (Not for the faint of Heart)',
        '$39.99 - - - - - - - - Mario Special Junior - - - (My Dog loves this one)'
    ]

    // general styles
    const body = document.querySelector('body');
    body.style.backgroundColor = 'rgb(77,108,186)';


    const content = document.querySelector('#content');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';

    // create, modify, and append the menu header
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Mario's Marvelous Menu!";
    content.appendChild(menuHeader);

    // create and append the container of items
    const items = document.createElement('div');
    items.style.border = 'rgba(0,0,0,50%) dashed 2px';
    items.style.display = 'flex';
    items.style.flexDirection = 'column';
    items.style.alignItems = 'start';
    items.style.padding = '30px';
    content.appendChild(items);

    // for each recipe in the array, create an item with that recipe
    // and then append it to the items container
    menuArray.forEach(recipe => {
        items.appendChild(createItem(recipe));
    });

}

function createItem(recipe) {
    const item = document.createElement('p');
    item.textContent = recipe;
    return item;
}