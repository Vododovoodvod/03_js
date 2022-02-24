const productListElement = document.getElementById("product-list");
const cartItemListElement = document.getElementById("cart-item-list");
const cartProductNumbers = document.getElementById("cart-no");

class Product {
  constructor(barcode, image, name) {
    this.barcode = barcode;
    this.image = image;
    this.name = name;
  }

  render() {
    console.log(this.barcode, this.image, this.name);
    const nameElement = document.createElement("div");
    nameElement.classList.add("product_name");
    nameElement.innerText = this.name;

    const barcodeElement = document.createElement("div");
    barcodeElement.classList.add("product_barcode");
    barcodeElement.innerText = this.barcode;

    const imgElement = document.createElement("img");
    imgElement.classList.add("product_image");
    imgElement.setAttribute("src", this.image);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("product_button");
    buttonElement.innerText = "Add to cart";
    buttonElement.addEventListener("click", () => {
      const event = new CustomEvent("app@add-to-cart", {detail: {product: this}});
      document.dispatchEvent(event);
    })

    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.append(nameElement, barcodeElement, imgElement, buttonElement);

    return productElement;
  }
}

class Cart {
  items = [];

  constructor() {
    document.addEventListener("app@add-to-cart", (event) => {
      this.items.push(event.detail.product);
      cartItemListElement.innerHTML = "";
      this.render();
    });
  }

  render() {
    cartProductNumbers.innerText = "Cart (" + this.items.length + ")";

    for(let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];

      const cartItemNameElement = document.createElement("div");
      cartItemNameElement.classList.add("cart-item__name");
      cartItemNameElement.innerHTML = currentItem.name;

      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.append(cartItemNameElement);

      cartItemListElement.append(cartItemElement);
    }
  }
}

const cart = new Cart();

fetch("./products.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Error!");
    }
  })
  .then((json) => {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      const currentProduct = json[i];
      const product = new Product(currentProduct.barcode, currentProduct.image, currentProduct.name);
      productListElement.append(product.render());
    }
  })
  .catch((error) => {
    console.log(error);
  });
