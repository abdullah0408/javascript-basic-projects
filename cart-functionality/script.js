document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
        id: 1,
        name: "Product 1",
        image: "https://images.unsplash.com/photo-1728388939226-3fc095526a91?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 29.99
    },
    {
        id: 2,
        name: "Product 2",
        image: "https://images.unsplash.com/photo-1727773377690-57b51d0c6193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjM5NDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg3MTgzMjF8&ixlib=rb-4.0.3&q=80&w=400",
        price: 19.99
    },
    {
        id: 3,
        name: "Product 3",
        image: "https://images.unsplash.com/photo-1725714835419-1ced0eb34513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjM5NDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg3MTgzMjJ8&ixlib=rb-4.0.3&q=80&w=400",
        price: 49.99
    },
    {
        id: 4,
        name: "Product 4",
        image: "https://images.unsplash.com/photo-1726820254128-642495548079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjM5NDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg3MTgzMjJ8&ixlib=rb-4.0.3&q=80&w=400",
        price: 39.99
    }
    ];

    const inCart = JSON.parse(localStorage.getItem("cart")) || [];
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(inCart));
    };

    const productList = document.querySelector(".product-list");
    const shoppingCart = document.querySelector(".shopping-cart");
    const total = document.querySelector(".total");
    const emptyCartMessage = document.querySelector(".empty-cart-message");
    const checkOut = document.querySelector(".checkout");
    
    products.forEach((product) => {
        const productLi = document.createElement("li");
        productLi.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-details">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        </div>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productLi);
       
    });
    renderCart();

    // Attach event listener to all add-to-cart buttons
    productList.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-to-cart")) {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find((p) => p.id === productId);
            inCart.push(product)
            renderCart()
            saveCart()
        }
    });
    
    function renderCart() {
        let totalCost = 0;
        shoppingCart.innerHTML = ''; // Clear previous cart items
        if (inCart.length) {
            emptyCartMessage.classList.add("hidden")
            inCart.forEach((item, index) => {
                totalCost += item.price;
                total.innerHTML = `Total: $${totalCost.toFixed(2)}`
                const cartItem = document.createElement("li");
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button class="remove-from-cart" data-index="${index}">Remove</button>
                `
                shoppingCart.appendChild(cartItem);
            })
        } else {
            emptyCartMessage.classList.remove("hidden")
            total.innerHTML = "Total: $0.00"
        }
    }

    shoppingCart.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-from-cart")) {
            const indexToRemove = parseInt(e.target.getAttribute("data-index"));
            inCart.splice(indexToRemove, 1);
            renderCart()
            saveCart()
        }
    })
    checkOut.addEventListener("click", () => {
        if (inCart.length > 0) {
            alert("Checkout Successful!");
            inCart.length = 0; // Clear the cart
            renderCart();
            saveCart()
        } else {
            alert("Your cart is empty.");
        }
    });
});

