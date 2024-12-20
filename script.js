// Global cart array
let cart = [];

// Function to show product details in modal
function buyNow(productName, description, price) {
    document.getElementById("modal-product-name").textContent = productName;
    document.getElementById("modal-product-description").textContent = description;
    document.getElementById("modal-product-price").textContent = price;
    document.getElementById("product-modal").style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

// Function to add product to cart
function addToCart() {
    const size = document.getElementById("size").value;
    const product = {
        name: document.getElementById("modal-product-name").textContent,
        price: document.getElementById("modal-product-price").textContent,
        size: size,
    };
    cart.push(product);
    alert(`${product.name} (Size: ${product.size}) added to cart!`);
    closeModal();
}

// Function to proceed to checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    let total = 0;
    let summary = "Order Summary:\n";
    cart.forEach((item, index) => {
        total += parseFloat(item.price.replace("RM ", ""));
        summary += `${index + 1}. ${item.name} - Size: ${item.size} - Price: ${item.price}\n`;
    });
    summary += `\nTotal: RM ${total.toFixed(2)}`;
    alert(summary);
    cart = []; // Clear cart after checkout

    // Redirect to payment page
    alert("Redirecting to payment...");
    window.location.href = "https://paypal.me/natu888"; // Update with your payment link
}

// Event listeners for products
document.querySelectorAll(".product-item button").forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.parentElement;
        const name = product.querySelector("h3").textContent;
        const description = product.querySelector("p").textContent;
        const price = product.querySelector("strong").nextSibling.textContent.trim();
        buyNow(name, description, price);
    });
});
