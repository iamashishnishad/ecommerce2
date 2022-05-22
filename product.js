


var cartData = JSON.parse(localStorage.getItem("Products"));
  console.log(cartData);

  function append(cartData){

  cartData.map(function (elem, index) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src =elem.image;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var category = document.createElement("p");
    category.innerText=elem.category;

    var gender = document.createElement("p");
    gender.innerText=elem.gender;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      removeItem(elem, index);
    
    });

    var btn1= document.createElement("button");
    btn1.innerText="Sold";

    btn1.addEventListener("click", function(){
      soldItem(elem, index);
    });

    box.append(img, name, price, category, gender, btn, btn1);

    document.querySelector("#container").append(box);
  
  
  });

}
  append(cartData)
document.querySelector("#counter").textContent = cartData.length;

  function removeItem(elem, index) {
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("Products", JSON.stringify(cartData));
    window.location.reload();
  }


    document.getElementById("showpage").onclick = function () {

        location.href="slidshow.html";
    }