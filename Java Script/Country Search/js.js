const resultCountries = document.getElementById('resultCountries');
const searchInput = document.getElementById('searchInput');
const spinner = document.getElementById('spinner');
async function display(word) {
    spinner.classList.remove("hidden");
    let countryList = [];
    try {
        let obj = await fetch("https://apis.ccbp.in/countries-data");
        let res = await obj.json();
        if (!word) {
            spinner.classList.add("hidden");
            res.forEach(each => countryList.push(each));
            
        } else {
            spinner.classList.add("hidden");
            res.forEach(each => {
                each.name.toLowerCase().includes(word) ? countryList.push(each):"";
            });
    
        }
        console.log(countryList);
        countryList.forEach(each=>{
            let card = document.createElement('div');
            card.classList = "p-[15px]  rounded-lg flex gap-[20px] md:gap-[10px] md:flex-col md:items-center md:justify-center w-[100%] bg-blue-100";
            let img = document.createElement('img');
            img.src = each.flag;
            img.classList = "h-[100px] w-[150px]  rounded-lg";
            let div = document.createElement('div');
            div.classList = " flex flex-col justify-center ";
            let h1 = document.createElement('h1');
            h1.textContent = each.name;
            h1.classList = "font-bold text-[24px] md:text-center text-[#123360]";
            let p = document.createElement('p');
            p.textContent = each.population;
            p.classList = "mt-1 md:m-auto";
            div.append(h1,p);
            card.append(img,div);
            resultCountries.append(card);
        });
        
    } catch (err) {

    }
}

function countriesDisplay() {
    let word = searchInput.value.toLowerCase();
    resultCountries.innerText = "";
    if (word === "") {
        // console.log("none");
        display();
    } else {
        // console.log(word);
        display(word);
    }

}
display();
searchInput.addEventListener("input", countriesDisplay);