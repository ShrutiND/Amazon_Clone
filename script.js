let imgsBox = document.querySelector(".main-img");
let imgs = document.querySelectorAll(".main-img a");
let buttonSlide = document.querySelectorAll("#slideButton");

let isScrolling = false;
buttonSlide.forEach((button) => {
	button.addEventListener("click", async () => {
		if (isScrolling) return;
		isScrolling = true;
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * imgs[0].clientWidth;
		imgsBox.scrollBy({ left: scrollImg, behavior: "smooth" });
		await new Promise((resolve) => setTimeout(resolve, 1000));
		isScrolling = false;
	});
});

let imgsBoxB = document.querySelector(".mini_slide-block");
let buttonSlideB = document.querySelectorAll("#slideButton-b");
buttonSlideB.forEach((button) => {
	button.addEventListener("click", () => {
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * (imgs[0].clientWidth - 150);
		imgsBoxB.scrollBy({ left: scrollImg, behavior: "smooth" });
	});
});
let imgsBoxL = document.querySelector(".mini_slide-live");
let buttonSlideL = document.querySelectorAll("#slideButton-l");
buttonSlideL.forEach((button) => {
	button.addEventListener("click", () => {
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * (imgsBoxL.clientWidth - 150);
		imgsBoxL.scrollBy({ left: scrollImg, behavior: "smooth" });
	});
});

let imgsBoxS;
window.addEventListener("mousedown", (e) => {
	let flag =
		e.target.offsetParent.className === "right_img_button" ||
		e.target.offsetParent.className === "left_img_button";
	imgsBoxS = e.target.offsetParent.className;
	console.log(imgsBoxS);
	if (flag) {
		imgsBoxS = e.target.offsetParent.offsetParent.className;
		console.log(imgsBoxS);
	}
	if (`${imgsBoxS}` == "") {
		console.log("if condition block")
		return;
	}
	let imgsBoxSItom = document.querySelector(`.${imgsBoxS}`);
	let buttonSlideS = document.querySelectorAll(`.${imgsBoxS} #slideButton-s`);
	console.log(imgsBoxSItom);
	buttonSlideS.forEach((button) => {
		button.addEventListener("click", () => {
			const direction = button.className == "left_img_button" ? -1 : 1;
			const scrollImg = direction * (imgs[0].clientWidth - 150);
			imgsBoxSItom.scrollBy({ left: scrollImg, behavior: "smooth" });
		});
	});
});

document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "https://file:///C:/Users/shrut/.vscode/mini%20project/Amazon-Clone-main/signup%20page.html";

	

});

function performSearch() {
    const query = document.getElementById('search-bar').value;
    fetchProducts(query);
}

async function fetchProducts(query) {
    try {
        // This would be your API call to the backend to fetch search results.
        // For demonstration, we'll use a mock function to simulate search results.
        const products = await mockFetchProducts(query);
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function addToCart() {
    alert("Product added to cart!");
            // You can add more functionality here, such as updating the cart count or making an AJAX call to add the item to the user's cart
}




const searchInput = document.getElementById('search');
const items = document.querySelectorAll('.item'); // Replace with your actual item selector

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    items.forEach((item) => {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

let cart = [];

function addToCart(productName, price) {
    // Add the product to the cart
    cart.push({ name: productName, price: price });
    
    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItemsContainer.appendChild(listItem);

        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice;
}




