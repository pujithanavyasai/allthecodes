const container = document.getElementById("container");


function displayDetails(prod){
    console.log(prod);
    for (let each in prod){
        const ImgUrl = prod[each].images[0]
        let img = document.createElement('img');
        img.src = `${ImgUrl}`;
        img.style.width=100+'%'
        container.appendChild(img);
    } 
}
async function getImgaes(){
    let a = await fetch("https://dummyjson.com/products");
    let prod = await a.json()
    displayDetails(prod.products); 
}
getImgaes();
