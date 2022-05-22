


function Products(name, category, image, price, gender){

    this.name=name;
    this.category=category;
    this.image =image;
    this.price=price;
    this.gender=gender;
}

let arr =[];

function submitProduct(e) {
    e.preventDefault();

    let form = document.getElementById("products");
    let name = form.name.value;
    let category=form.category.value;
    let image = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;


    let p=new Products(name, category, image, price, gender);
    arr.push(p);

    console.log(arr);
    localStorage.setItem("Products", JSON.stringify(arr));

}

document.getElementById("productpage").onclick = function () {

    location.href="products.html";
}


