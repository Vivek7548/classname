var items = document.getElementsByClassName('list-group');
console.log(items);
items[2].style.backgroundColor = 'green';
items.style.fontweight = 'bold';
for(var i = 0; i<items.length; i++)
{
    items.style.fontweight = 'bold';
}