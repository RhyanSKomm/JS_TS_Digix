let count = 1;

function addItem() {
    const item = document.createElement('li');
    const list = document.getElementById('ol');

    item.innerText = `Item ${count++}`;
    list.appendChild(item);
}

function removeItem() {
    const list = document.getElementById('ol');
    const item = list.firstElementChild;

    if (item) {
        list.removeChild(item);
    }
}

const buttonAdd = document.getElementById('add');
const buttonRemove = document.getElementById('remove');

buttonAdd.addEventListener('click', addItem);
buttonRemove.addEventListener('click', removeItem);
