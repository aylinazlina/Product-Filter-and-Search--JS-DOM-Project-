
let products = {
    data: [{
        productName: "Regular Dark Brown Top",
        category: "Topwear",
        price: "28",
        image: "top1.jpeg",
    },
    {
        productName: "Deep Blue Color Watch",
        category: "Watch",
        price: "100",
        image: "watch_6.jpeg",

    },
    {
        productName: "Brown Jacket",
        category: "Jacket",
        price: "100",
        image: "Jacket_1.jpeg",

    },


    {
        productName: "Black pant",
        category: "Bottomwear",
        price: "26",
        image: "bottomwear_1.jpeg"

    },
    {
        productName: "Regular Brown Top",
        category: "Topwear",
        price: "22",
        image: "top_2.jpg",
    },
    {
        productName: "Red Jacket",
        category: "Jacket",
        price: "110",
        image: "Jacket_3.jpg",

    },
    {
        productName: "white Top",
        category: "Topwear",
        price: "27",
        image: "top_3.jpeg",

    },
    {
        productName: "Light color Top",
        category: "Topwear",
        price: "32",
        image: "top_4.jpg",

    },

    {
        productName: "White designed Top ",
        category: "Topwear",
        price: "50",
        image: "top_5.jpg",

    },

    {
        productName: "Skirt Multi color",
        category: "Bottomwear",
        price: "26",
        image: "bottomwear_2.webp",

    },

    {
        productName: "Titan Silver",
        category: "Watch",
        price: "50",
        image: "watch_1.jpeg",

    }
        ,

    {
        productName: "Blue Jeans",
        category: "Bottomwear",
        price: "40",
        image: "bottomwear_3.jpeg",

    },
    {
        productName: "Green Pant",
        category: "Bottomwear",
        price: "35",
        image: "bottomwear_4.jpeg",

    },
    
    {
        productName: "Square Gold Watch",
        category: "Watch",
        price: "150",
        image: "watch_5.png",

    },

    {
        productName: "Black Jacket",
        category: "Jacket",
        price: "105",
        image: "Jacket_2.jpg",

    },


    {
        productName: "Golden watch",
        category: "Watch",
        price: "80",
        image: "watch_2.jpg",

    },
    {
        productName: "Stylish Watch",
        category: "Watch",
        price: "100",
        image: "watch_3.jpg",

    },

    {
        productName: "Simple Watch",
        category: "Watch",
        price: "40",
        image: "watch_4.jpg",

    },

    ]
};

for (let i of products.data) {

    //todo create card
    let card = document.createElement("div");

    //! card should have category and should stay hidden initially

    card.classList.add("card", i.category, "hide");

    //todo image div
    let imageContainer = document.createElement("div");

    imageContainer.classList.add("image-container");

    //! img tag
    let image = document.createElement("img");
    image.setAttribute("src", "images/" + i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);


    //todo container
    let container = document.createElement("div");
    container.classList.add("container");


    //! product name

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //! price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);


    //todo parameter passed from button (parameter same as category)

    function filterProduct(value) {

        //! button class code

        let buttons = document.querySelectorAll(".button-value");

        buttons.forEach((button) => {

            //todo check if value equals innerText

            if (value.toUpperCase() === button.innerText.toUpperCase()) {
                button.classList.add("active");
            }
            else {
                button.classList.remove("active");
            }
        });


        //todo select all card
        
        let elements=document.querySelectorAll(".card");

        //! loop through all cards

        elements.forEach((element) => {
            //todo display all cards on "all" button click
            if(value === "All"){
                element.classList.remove("hide");
            }

            else{

                //todo check if element contains category class
                if(element.classList.contains(value)){
                    
                    //! display element based on category
                    element.classList.remove("hide");

                }
                else{
                    //todo hide other elements
                    element.classList.add("hide")
                }
                
            }
        });









    }
   

}

 //todo Initially display all products

 window.onload =()=>{
    filterProduct("All");
};


let searchBtn=document.querySelector(".searchBtn");


//todo search button click
searchBtn.addEventListener("click",()=>{

    let searchInput=document.querySelector(".searchField").value;
    let elements=document.querySelectorAll(".product-name")
    let cards=document.querySelectorAll(".card");


    // todo loop through all elements

    elements.forEach((element,index) => {
        
        //todo checkt if text includes th search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //todo display matching card
            cards[index].classList.remove("hide");
        }
        //todo hide others
        else{
            cards[index].classList.add("hide");
        }
    });
    


})

