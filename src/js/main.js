const productList = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "./img/image.png",
        time: 30,
        type: "Snack",
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        img: "./img/image4.png",
        time: 30,
        type: "Fish",
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        img: "./img/image5.png",
        time: 30,
        type: "Snack",
    },
    {
      id: 4,
      name: "Fresh and Healthy Mixed Mayonnaise",
      img: "./img/image1.png",
      time: 30,
      type: "Healthy",
  },
  {
    id: 5,
    name: "The Creamiest Creamy Chicken",
    img: "./img/image2.png",
    time: 30,
    type: "Noodles",
  },
  {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    img: "./img/image3.png",
    time: 30,
    type: "Sweet",
  },
  ];
  
  function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;
  
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result +=` <div
        class="pb-2 shadow hover:shadow-xl duration-300 rounded-3xl bg-gray-50"
      >
      <a href="./detail.html?id=${product.id}"> <img src="${product.img}" class="w-full rounded-3xl" alt="" /></a>
        <h3 class="my-4 ml-2 text-lg font-bold text-red-600">
        <a href="./detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="flex ml-4">
          <span class="flex mr-8 text-base font-medium text-[#5D5D5D]"
            ><img src="images/ForkKnife.png" class="mr-2" alt="" />${product.time}
            Minutes</span
          ><span class="flex text-base font-medium text-[#5D5D5D]"
            ><img src="images/Timer.png" class="mr-2" alt="" />${product.type}</span
          >
        </div>
      </div>`;
    }
    return result;
  }
  
  document.getElementById("products").innerHTML = showProducts(productList);
  