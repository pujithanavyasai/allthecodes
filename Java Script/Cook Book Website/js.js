const input = document.getElementById(`input`);
const button = document.getElementById(`searchBut`);
const beforeSearch = document.getElementById(`beforeSearch`);
const aftetSearch = document.getElementById(`aftetSearch`);
const loading = document.getElementById(`loader`);
const main = document.getElementById(`main`);
const bsP = document.getElementById(`bsP`);
loading.style.display = "none";
document.body.style.overflow = "visible";
let dataOBJ;
function getAllRecipes() {
    beforeSearch.style.display = "none";
    loading.style.display = "block";
    aftetSearch.innerHTML = "";
    if (input.value) {
        data(input.value);
    } else {
        aftetSearch.style.display = "none";
        document.body.style.overflow = "hidden";
        bsP.textContent = "Please enter data to show Recipes.";
        beforeSearch.classList.add("transform", "translate-x-[45px]", "md:translate-x-[0px]");
        setTimeout(() => {
            loading.style.display = "none";
            beforeSearch.style.display = "block";
        }, 800);
    }
}
async function data(item) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
        if (!response.ok) {
            document.body.style.overflow = "hidden";
            bsP.textContent = "Reload the Page, there is a Server Issue.";
            beforeSearch.classList.add("transform", "translate-x-[45px]", "md:translate-x-[0px]");
            
                throw new Error(`${err}`);
            } 
            else {
                beforeSearch.style.display = "none";
                let food = await response.json()
                dataOBJ = food;
                setTimeout(() => {
                loading.style.display = "none";
                document.body.style.overflow = "visible";
                displayCard(food.meals);
            }, 500);
        }
    } catch (err) {
        loading.style.display = "none";
    }
}
function displayCard(foods) {
    beforeSearch.style.display = "none";
    aftetSearch.innerHTML = "";

    const head = document.createElement("p");
    head.classList = "text-center mt-[20px]  mb-[20px] md:mb-[10px] md:mt-[40px] font-bold tracking-[5px] text-[16px] sm:text-[20px] md:text-[30px]";
    head.textContent = "MENU";
    aftetSearch.appendChild(head);

    const cardsCont = document.createElement("div");
    cardsCont.classList = "relative ml-[30px] mr-[30px]  md:ml-[60px] md:mr-[60px] md:mt-[30px] box-border rounded-xl bg-white p-[30px] sm:m-[50px]";
    aftetSearch.appendChild(cardsCont);


    const totalCount = document.createElement("p");
    totalCount.classList = "text-start font-bold sm:text-[20px] md:text-[30px]";
    totalCount.textContent = `Total Dishes : ${foods.length}`;
    cardsCont.appendChild(totalCount);


    const gridWrap = document.createElement("div");
    gridWrap.classList = " p-[20px] grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-5";
    cardsCont.appendChild(gridWrap);


    foods.forEach((meal) => {
        const card = document.createElement("div");
        card.classList = "w-[100%] shadow-xl flex flex-row md:flex-col justify-between box-border rounded-xl bg-[#ffd4a3] p-[20px] md:p-[10px] md:pb-[20px]";

        card.innerHTML = `
            <img id="img-${meal.idMeal}" class="w-[20%] h-[100%] md:h-[50%] md:w-[70%] md:m-auto object-cover rounded-lg hover:cursor-pointer" src="${meal.strMealThumb}" />
            <div class="flex flex-col justify-between gap-5 mr-[20px] ">
                <div>
                    <h1 class="font-bold ml-[10px] text-end md:text-start text-[#35332aff] text-[18px] md:ml-[20px] md:text-[30px]">${meal.strMeal}</h1>
                    <p class="font ml-[10px] text-[#35332aff] text-end md:text-start text-[18px] md:ml-[20px] md:text-[25px]">${meal.strArea}</p>
                </div>
                <div class="flex flex-row justify-end">
                    <button id="btn-${meal.idMeal}" class="bg-[#D35400] text-[#ffffff] p-4 rounded-lg hover:bg-[#b14700] cook-btn">Cook Now</button>
                </div>
            </div>
        `;

        gridWrap.appendChild(card);

        const img = document.getElementById(`img-${meal.idMeal}`);
        img.onclick = () => window.open(meal.strYoutube, "_blank");

        const cookBtn = document.getElementById(`btn-${meal.idMeal}`);
        cookBtn.onclick = () => cookRecipe(meal);
    });
}


function cookRecipe(meal) {
    aftetSearch.innerHTML = "";
    let IngCount = 0;
    aftetSearch.innerHTML = `

        <button class="absolute top-[20px] text-[#ffffff] hover:bg-[#b14700] left-[20px] p-[10px] pl-[20px] pr-[20px] sm:p-[20px] sm:pl-[40px] sm:pr-[40px] bg-[#D35400]  rounded-lg" onclick="back()"><i class="fa-solid fa-arrow-left-long "></i></button>
        <div class="absolute flex flex-col justify-start top-[100px] p-[30px] w-[80%] rounded-lg bg-white" >
            <h1  class="font-bold m-[10px] text-center text-[30px]">${meal.strMeal}</h1>
            <h3 id="Ingcount" class="mt-4 mb-4 md:text-[24px] text-[16px] ml-8 font-semibold"></h3>
            <img class="h-[200px] w-[200px] xl:h-[400px] rounded-lg md:h-[350px] md:w-[80%] md:object-cover m-auto" src="${meal.strMealThumb}"/>
            <h3 class="mt-4 ml-3 md:text-[24px] text-[16px] font-semibold">Meal Description</h3>
            <p class="overflow-auto md:text-[20px] text-[12px] ml-10 mr-10 mt-3 mb-3 max-h-[300px]">${meal.strInstructions}</p>
            <h3 class="mt-4 md:text-[24px] text-[16px] ml-3 font-semibold">Ingredients :</h3>
            <ol class="list-decimal md:text-[20px] text-[12px] md:pl-20 pl-10 pr-10 pt-3 pb-3" id="listCont" ></ol>
        </div>
    `;

    const listCont = document.getElementById("listCont");
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const meauserment = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            IngCount++;
            let li = document.createElement(`li`);
            li.innerHTML = `${ingredient} - ${meauserment}`;
            listCont.appendChild(li);
        }
    }
    console.log(IngCount);
    const disIngCount = document.getElementById(`Ingcount`);
    disIngCount.textContent = `Cook this simple dish with just ${IngCount} ingredients`;
    window.scrollTo({ top: 0, behavior: "auto" });


}
function back() {
    displayCard(dataOBJ.meals)
}
button.onclick = getAllRecipes;