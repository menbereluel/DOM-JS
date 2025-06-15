// Images for fruits and vegetables (replace with your own or use these sample links)
const fruits = [
    { name: 'Mangoes', img: 'https://media.istockphoto.com/id/2174461867/photo/fresh-ripe-mango-fruit.jpg?s=2048x2048&w=is&k=20&c=ojhWagatYdm90XplgkHd66l4damdPZ9Cm2bJ7QEESd4=' },
    { name: 'Bananas', img: 'https://plus.unsplash.com/premium_photo-1724250081102-cab0e5cb314c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Water Melons', img: 'https://plus.unsplash.com/premium_photo-1724256227267-cfe917bc1d9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Strawberries', img: 'https://media.istockphoto.com/id/1324831501/photo/single-strawberry-isolated-on-white-background-macro-clipping-path.jpg?s=2048x2048&w=is&k=20&c=VdF_yawM6pi8in7avMrF1XR5d7USWYeEaSBCJFbfFM8=' } // New Fruit
];
const vegetables = [
    { name: 'Onions', img: 'https://media.istockphoto.com/id/182504322/photo/red-and-gold-onion.jpg?s=2048x2048&w=is&k=20&c=Jnsp8LlZr4iFjnyLX_Rj5o0U1f_HSlsfA4u4iwLyAMI=' },
    { name: 'Tomatoes', img: 'https://media.istockphoto.com/id/1410800448/photo/tomato-vegetables-isolated-on-white-background-t.jpg?s=2048x2048&w=is&k=20&c=9JcIrztWrkiA91A43OepJRGP0GF4F49G35fgkQ6Vl9Y=' },
    { name: 'Kales', img: 'https://media.istockphoto.com/id/584879308/photo/fresh-kale.jpg?s=1024x1024&w=is&k=20&c=7mO7BW_cJDSgy3FCz37zrMkthVCrolaZBfbF0IGuzTc=' },
    { name: 'Rainbow Chard', img: 'https://media.istockphoto.com/id/1029856232/photo/two-chard-leaves-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=mKTZhFgFTFHqWz7DoQYnVfuul7-WA8PH7te3Tc5ARGU=' } // New Vegetable
];

let cart = [];

function renderList(list, elementId, type) {
    const ul = document.getElementById(elementId);
    ul.innerHTML = '';
    list.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="item-info">
            <img src="${item.img}" alt="${item.name}">
            <span>${item.name}</span>
          </span>
          <button onclick="addToCart('${item.name}')">Add to Cart</button>
        `;
        ul.appendChild(li);
    });
}

function addToCart(item) {
    cart.push(item);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    if (cart.length === 0) {
        cartList.innerHTML = '<li style="color:#888;">(Cart is empty)</li>';
        return;
    }
    // Count items
    const counts = {};
    cart.forEach(i => counts[i] = (counts[i] || 0) + 1);
    Object.entries(counts).forEach(([item, count]) => {
        const li = document.createElement('li');
        li.textContent = `${item} x${count}`;
        cartList.appendChild(li);
    });
}

function clearCart() {
    cart = [];
    renderCart();
}

// Search functionality
function filterItems() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const filteredFruits = fruits.filter(f => f.name.toLowerCase().includes(search));
    const filteredVegetables = vegetables.filter(v => v.name.toLowerCase().includes(search));
    renderList(filteredFruits, 'fruList', 'fruit');
    renderList(filteredVegetables, 'vegList', 'veg');
}

document.addEventListener('DOMContentLoaded', () => {
    renderList(fruits, 'fruList', 'fruit');
    renderList(vegetables, 'vegList', 'veg');
    renderCart();
    document.getElementById('searchInput').addEventListener('input', filterItems);
    document.getElementById('clearCart').addEventListener('click', clearCart);
});

// Expose addToCart for HTML onclick
window.addToCart = addToCart;