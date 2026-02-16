// let is_red = true;
// let recipes = document.querySelector(".recipes");
// async function getAllMeals() {
//     let allMeals = [];
//     const letters = "abcdefghijklmnopqrstuvwxyz";

//     for (let letter of letters) {
//         try {
//             const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
//             if (!response.ok) continue;

//             const data = await response.json();
//             if (data.meals) allMeals = allMeals.concat(data.meals);
//         } catch (error) {
//             console.log("Error fetching letter " + letter, error.message);
//         }
//     }

//     displayMeals(allMeals);
// }

// getAllMeals();
// function displayMeals(meals) {
//     recipes.innerHTML = "";
//     meals.forEach(element => {
//         recipes.innerHTML += `
//             <div class="recipe" style="display: flex; flex-direction: column; gap: 10px; width: 30%; background-color: beige; margin-bottom: 20px;">
//                 <img src="${element.strMealThumb}" alt="" style="width: 100%; height: fit-content;" >
//                 <div style="display: flex; flex-direction: column; gap: 2px; margin: 10px;">
//                     <div style="display: flex; justify-content: space-between; align-items: center;">
//                         <img src="https://cdn.iconscout.com/icon/free/png-256/favourite-1895577-1604567.png" alt="favorite" style="width: 20px;" class="favorite-icon">
//                         <div class="stars" style="display: flex; flex-direction: row;">
//                             <i class="fa-regular fa-star"></i>
//                             <i class="fa-regular fa-star"></i>
//                             <i class="fa-regular fa-star"></i>
//                             <i class="fa-regular fa-star"></i>
//                         </div>
//                     </div>
                  
//                     <p> name:${element.strMeal}.</p>
//                     <p>country:${element.strArea}.</p>
//                     <p> category:${element.strCategory}.</p>
//                    <div style="display: flex; flex-direction:row; gap: 10px; justify-content:space-between; align-items: center;">
//                       <button style="padding: 10px; border: none; border-radius:5px; background-color: rgb(221, 221, 11);" onclick="viewdetails('${element.idMeal}')">
//                         viewdetails
//                     </button>
//                 <a href="${element.strYoutube}" target="_blank">
//                     <button style="padding: 10px; border: none; border-radius:5px; background-color: rgb(221, 221, 11);">
//                         See Recipe Video
//                     </button>
//                 </a>
//                      </div>
//             </div>`

//     });
//     let favoriteIcons = document.querySelectorAll(".favorite-icon");

//     favoriteIcons.forEach(icon => {
//         let isRed = false;

//         icon.addEventListener("click", () => {
//             if (!isRed) {
//                 icon.src = "https://tse2.mm.bing.net/th/id/OIP.Xg15MmRGyd4HlTCojqeyDwHaHa?pid=ImgDet&w=183&h=183&c=7&dpr=1.3&o=7&rm=3";
//             } else {
//                 icon.src = "https://cdn.iconscout.com/icon/free/png-256/favourite-1895577-1604567.png";
//             }
//             isRed = !isRed;
//         });
//     });

// }

// async function viewdetails(id) {

//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?i=${id}`);
//     const data = await response.json();
//     const meal = data.meals[0];
//     let ingredients = "";


//     for (let key in meal) {
//         if (key.startsWith("strIngredient") && meal[key]) {
//             console.log(meal[key]);
//             ingredients += `<li>${meal[key]}</li>`;
//         }
//     }
//     let details = document.querySelector(".details");
//     details.style.opacity = 1;
//     details.style.padding = "20px";

//     details.innerHTML = `
//             <div class="recipe" style="display: flex; flex-direction: column; gap: 10px; width: 100%; background-color: beige;">
//                 <img src="${meal.strMealThumb}" alt="" style="width:100%; height: fit-content;">
//                 <div style="display: flex; flex-direction: column; gap: 2px; margin: 10px;">
//                     <p>recipe details Lorem ipsum dolor sit amet.</p>
//                 </div>
//                 <ul style="list-style-type: none; ">
//                         ${ingredients}
                    
//                 </ul>
//                 <a href="${meal.strYoutube}" target="_blank">
//                     <button style="padding: 10px; border: none; border-radius:5px; background-color: rgb(221, 221, 11);">
//                         See Recipe Video
//                     </button>
//                 </a>
//                  <button class="close" style="padding: 10px; border: none; border-radius:5px; background-color: rgb(221, 221, 11);" onclick="closeDetails()">
//                         close
//                     </button>
//             </div>`;


// }

// function closeDetails() {
//     let details = document.querySelector(".details");
//     details.style.opacity = 0;
// };




// async function findbycategory(category) {
//     try {
//         const response = await fetch(
//             `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
//         );

//         const data = await response.json();

//         recipes.innerHTML = "";

//         if (data.meals) {
//             displayMeals(data.meals);
//         } else {
//             recipes.innerHTML = "<p>No meals found.</p>";   

//         };

//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// async function findbyarea(area){
//     try {
//     const response = await
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
//     const data = await response.json();
//         recipes.innerHTML = "";
//         if(data.meals){
//             displayMeals(data.meals);
//         } else{
//             recipes.innerHTML = "<p>No meals found.</p>";
//         }
    
//     if (response.ok) {
//         const data = await response.json();

//     }} catch (error) {
//         console.error("Error:", error);
//     }
//     recipes.innerHTML = "";
    
// }

// async function getAllCategories() 
// {
//     let categories = [];
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
//         if (!response.ok) throw new Error("Network response was not ok");   
//         const data = await response.json();
//         categories = data.meals.forEach((meal) =>{ 
//             meal.strCategory;
//             categories.push(meal.strCategory);
//         });
//     } catch (error) {
//         console.error("Error fetching categories:", error);
//     }
//     return categories;
// }

// async function getAllAreas()
// {
//     let areas=[];
//     try{
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
//          const data = await response.json();
//          areas=data.meals.forEach((meal) =>{ 
//         meal.strArea;
//         areas.push(meal.strArea);
//     });
//     }catch(error){
//         console.error("Error fetching areas:", error);
//     }
    
//     return areas;
// }

// async function getAllIngredients()
// {
//     let ingredients=[];
//     try{
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
//          const data = await response.json();
//          ingredients=data.meals.forEach((meal) =>{ 
//         meal.strIngredient;
//         ingredients.push(meal.strIngredient);
//     });
//     }catch(error){
//         console.error("Error fetching ingredients:", error);
//     }
// }

// async function findbyingredient(ingredient){
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//         if (!response.ok) throw new Error("Network response was not ok");   
//         const data = await response.json();
//         recipes.innerHTML = "";
//       if(data.meals){
//         displayMeals(data.meals);
//       } else{
//         recipes.innerHTML = "<p>No meals found.</p>";
//       }
//     } catch (error) {
//         console.error("Error:", error);
//     }   
// }

// async function findbyname(name){
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
//         const data = await response.json();
//         recipes.innerHTML = ""; 
//         if (data.meals) {
//             displayMeals(data.meals);
//         } else {
//             recipes.innerHTML = "<p>No meals found.</p>";
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }   

// }

// async function sortbytime()
//     {

//         try{
//             const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
//             const data = await response.json();
//             recipes.innerHTML = "";
//             if(data.meals){
//                 let sortedMeals = data.meals.sort((a, b) => a.strTime - b.strTime);
//                 displayMeals(sortedMeals);
//             } else{
//                 recipes.innerHTML = "<p>No meals found.</p>";
//             }   
//         }catch(error){
//             console.error("Error:", error);
//         }
//     }
// async function collections()
// {
//     try{
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
//         const data = await response.json();
//         recipes.innerHTML = "";
//         if(data.meals){
//             let sortedMeals = data.meals.sort((a, b) => a.strTime - b.strTime);
//             displayMeals(sortedMeals);
//         } else{
//             recipes.innerHTML = "<p>No meals found.</p>";
//         }
//     }catch(error){
//     console.error("Error:", error);
// }
// }
// collection=document.querySelector(".collection");
// let categories=getAllCategories();
// collection.addEventListener("click",
//     function(){
//         categories.forEach(category => {
//         collection.innerHTML=`
//           <div class="category"style="display: flex;flex-direction: column;background-color: rgb(88, 88, 166); border-radius: 10px; justify-content: center;align-items:center;width:10%;padding-top: 10px;">
//              ${category}
//             </div>`
//     }
// );
// let categoryElements=document.querySelectorAll(".category");
// categoryElements.forEach(categoryElement => {
//     categoryElement.addEventListener("click", function() {
//         let category = categoryElement.textContent.trim();
//         findbycategory(category);
//         recipes.innerHTML = "";
//        displayMeals(recipes);
//     }); 
// });

// }
// );

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pasta")
//     .then(response => response.json()) // convert response to JSON
//     .then(data => {
//         console.log(data);
//         console.log(data.meals);
//     })
//     .catch(error => console.error("Error:", error));



const recipesContainer = document.getElementById("recipes");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");

let favorites = JSON.parse(localStorage.getItem("favorites")) || {};
let ratings = JSON.parse(localStorage.getItem("ratings")) || {};

let selectedIngredients = [];
let lastLoadedMeals = [];

// ================== SEARCH ==================
searchInput.addEventListener("keyup", () => {
    searchRecipe(searchInput.value);
});

function showLoader() { loader.style.display = "block"; }
function hideLoader() { loader.style.display = "none"; }

async function searchRecipe(name) {
    showLoader();
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await res.json();
        lastLoadedMeals = data.meals || [];
    } catch {
        lastLoadedMeals = [];
    }
    hideLoader();
    filterByIngredientsMulti(selectedIngredients);
}

// ================== CATEGORY / COLLECTION ==================
async function filterByCategory(category) {
    showLoader();
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await res.json();
        if (!data.meals) lastLoadedMeals = [];
        else {
            const fullMeals = await Promise.all(
                data.meals.map(meal =>
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                        .then(res => res.json())
                        .then(data => data.meals[0])
                )
            );
            lastLoadedMeals = fullMeals.filter(m => m != null);
        }
    } catch { lastLoadedMeals = []; }
    hideLoader();
    filterByIngredientsMulti(selectedIngredients);
}

// ================== MULTI-INGREDIENT FILTER (OR) ==================
async function filterByIngredientsMulti(ingredients) {
    if (!ingredients || ingredients.length === 0) {
        displayRecipes(lastLoadedMeals);
        return;
    }

    showLoader();
    let allMeals = [];

    for (const ing of ingredients) {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`);
            const data = await res.json();
            if (data.meals) allMeals.push(...data.meals);
        } catch {}
    }

    // IDs الفريدة لكل الوصفات
    const uniqueIDs = [...new Set(allMeals.map(m => m.idMeal))];

    const fullMeals = await Promise.all(
        uniqueIDs.map(id =>
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(data => data.meals[0])
        )
    );

    hideLoader();
    displayRecipes(fullMeals.filter(m => m));
}

// ================== FILTER BY SINGLE INGREDIENT ==================
function filterByIngredient(ingredient) {
    const index = selectedIngredients.indexOf(ingredient);
    if (index === -1) selectedIngredients.push(ingredient);
    else selectedIngredients.splice(index, 1);

    document.querySelectorAll('.ingredients-list button').forEach(btn => {
        btn.classList.toggle('selected', selectedIngredients.includes(btn.innerText.trim()));
    });

    updateIngredientCounters();
    filterByIngredientsMulti(selectedIngredients);
}

// ================== UPDATE COUNTERS ==================
function updateIngredientCounters() {
    for (let type in ingredientBuckets) {
        const items = [...new Set(ingredientBuckets[type])];
        if (items.length === 0) continue;

        const sanitized = type.replace(/[^a-zA-Z0-9]/g, "_");
        const section = document.getElementById("list-" + sanitized);
        if (!section) continue;

        const selectedCount = items.filter(i => selectedIngredients.includes(i)).length;
        const counterSpan = section.previousElementSibling.querySelector(".selected-counter");
        if (counterSpan) counterSpan.innerText = selectedCount;
    }
}

// ================== TIME FILTER ==================
function filterByTime(maxMinutes) {
    const cards = document.querySelectorAll(".recipe-card");
    cards.forEach(card => {
        const textLength = parseInt(card.dataset.length) || 0;
        const estimatedTime = Math.ceil(textLength / 100);
        card.style.display = estimatedTime <= maxMinutes ? "block" : "none";
    });
}

// ================== DISPLAY ==================
function displayRecipes(meals) {
    recipesContainer.innerHTML = "";
    if (!meals || meals.length === 0) {
        recipesContainer.innerHTML = "<h2 style='padding:20px;'>No Recipes Found</h2>";
        return;
    }

    meals.forEach(meal => {
        const isFav = favorites[meal.idMeal] ? "❤️" : "🤍";
        const rate = ratings[meal.idMeal] || 0;
        const instrLength = meal.strInstructions ? meal.strInstructions.length : 0;

        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.length = instrLength;

        card.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <div>
                <button onclick="viewDetails('${meal.idMeal}')">View</button>
                <button onclick="toggleFavorite('${meal.idMeal}', '${meal.strMeal}', '${meal.strMealThumb}')">
                    ${isFav}
                </button>
            </div>
            <div>
                ${createStars(meal.idMeal, rate)}
            </div>
        `;

        recipesContainer.appendChild(card);
    });
}

// ================== VIEW DETAILS ==================
async function viewDetails(id) {
    showLoader();
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    hideLoader();

    const meal = data.meals[0];
    let ingredients = "";
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li>${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}</li>`;
        }
    }

    document.getElementById("modalDetails").innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" width="200">
        <h3>Ingredients:</h3>
        <ul>${ingredients}</ul>
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    `;
    document.getElementById("modal").style.display = "block";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

// ================== FAVORITES ==================
function toggleFavorite(id, name, img) {
    if (favorites[id]) delete favorites[id];
    else favorites[id] = { name, img };
    localStorage.setItem("favorites", JSON.stringify(favorites));
    filterByIngredientsMulti(selectedIngredients);
}

// ================== RATING ==================
function createStars(id, currentRate) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += `<span style="cursor:pointer;color:${i <= currentRate ? 'gold' : 'gray'}"
                onclick="rateRecipe('${id}', ${i})">★</span>`;
    }
    return stars;
}

function rateRecipe(id, value) {
    ratings[id] = value;
    localStorage.setItem("ratings", JSON.stringify(ratings));
    filterByIngredientsMulti(selectedIngredients);
}

// ================== INGREDIENTS SIDEBAR ==================
const ingredientBuckets = {
    Vegetables: [], Meat: [], Chicken: [], Fruit: [], Eggs: [],
    "Cheese & Milk": [], Seafood: [], Spices: [], "Baking & Dry": [], Herbs: [], Others: []
};

async function loadIngredientsSidebar() {
    try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
        const data = await res.json();
        const allIngredients = data.meals.map(m => m.strIngredient);

        allIngredients.forEach(ing => {
            const lower = ing.toLowerCase();
            if (/(onion|garlic|tomato|carrot|potato|pepper|cucumber|spinach|broccoli|cauliflower|zucchini|lettuce|celery)/.test(lower)) ingredientBuckets.Vegetables.push(ing);
            else if (/(beef|lamb|pork|veal|goat|meat)/.test(lower)) ingredientBuckets.Meat.push(ing);
            else if (/chicken|turkey|duck/.test(lower)) ingredientBuckets.Chicken.push(ing);
            else if (/(apple|banana|lemon|orange|mango|berry|fruit)/.test(lower)) ingredientBuckets.Fruit.push(ing);
            else if (/egg/.test(lower)) ingredientBuckets.Eggs.push(ing);
            else if (/(cheese|milk|butter|cream|yogurt|dairy)/.test(lower)) ingredientBuckets["Cheese & Milk"].push(ing);
            else if (/(salmon|tuna|shrimp|crab|lobster|fish|seafood|clam|mussel|squid|octopus)/.test(lower)) ingredientBuckets.Seafood.push(ing);
            else if (/(cinnamon|ginger|turmeric|paprika|oregano|thyme|basil|pepper|salt|garlic powder|onion powder|cumin|coriander)/.test(lower)) ingredientBuckets.Spices.push(ing);
            else if (/(flour|sugar|rice|cornmeal|oats|baking powder|baking soda|yeast|cocoa|chocolate)/.test(lower)) ingredientBuckets["Baking & Dry"].push(ing);
            else if (/(herb|mint|parsley|dill|cilantro|rosemary|sage|thyme|basil|oregano)/.test(lower)) ingredientBuckets.Herbs.push(ing);
            else ingredientBuckets.Others.push(ing);
        });

        renderIngredientsSidebar();
    } catch (error) { console.error(error); }
}

function renderIngredientsSidebar() {
    const container = document.getElementById("ingredientsTypes");
    container.innerHTML = "";

    for (let type in ingredientBuckets) {
        const items = [...new Set(ingredientBuckets[type])];
        if (items.length === 0) continue;

        const sanitized = type.replace(/[^a-zA-Z0-9]/g, "_");
        const selectedCount = items.filter(i => selectedIngredients.includes(i)).length;

        const section = document.createElement('div');
        section.className = 'ingredients-type-section';
        section.innerHTML = `
            <h3 onclick="toggleIngredientList('${sanitized}')">
                ${type} (<span class="selected-counter">${selectedCount}</span>/${items.length})
            </h3>
            <div class="ingredients-list" id="list-${sanitized}">
                ${items.map(i => `<button class="${selectedIngredients.includes(i)?'selected':''}" onclick="filterByIngredient('${i.replace(/'/g,"\\'")}')">${i}</button>`).join('')}
            </div>
        `;
        container.appendChild(section);
    }
}

function toggleIngredientList(sanitized) {
    const list = document.getElementById("list-" + sanitized);
    if (list) list.style.display = list.style.display === "grid" ? "none" : "grid";
}

// ================== CLEAR SELECTED ==================
document.addEventListener('DOMContentLoaded', () => {
    const clearBtn = document.getElementById('clearIngredientsBtn');
    if (clearBtn) clearBtn.addEventListener('click', () => {
        selectedIngredients = [];
        document.querySelectorAll('.ingredients-list button').forEach(btn => btn.classList.remove('selected'));
        filterByIngredientsMulti(selectedIngredients);
        updateIngredientCounters();
    });
});
// ================== NUTRITION FILTER ==================
function filterByNutrition(nutrition) {
    showLoader();

    try {
        const filteredMeals = lastLoadedMeals.filter(meal => {
            // Collect all ingredients of the meal
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                if (meal[`strIngredient${i}`]) {
                    ingredients.push(meal[`strIngredient${i}`].toLowerCase());
                }
            }

            // Check nutrition rules based on ingredients
            if (nutrition === "Healthy") {
                // mostly vegetables/fruits, not fatty
                return ingredients.some(i => /(onion|garlic|tomato|carrot|potato|pepper|cucumber|spinach|broccoli|lettuce|celery|apple|banana|lemon|orange|mango|berry)/.test(i));
            }
            if (nutrition === "Fatty") {
                return ingredients.some(i => /(cheese|butter|cream|bacon|pork|beef|lamb)/.test(i));
            }
            if (nutrition === "Low-Calorie") {
                return !ingredients.some(i => /(fried|cake|cream|cheese|butter|chocolate)/.test(i));
            }
            if (nutrition === "High-Protein") {
                return ingredients.some(i => /(chicken|beef|fish|egg|tuna|salmon|shrimp|pork|lamb)/.test(i));
            }

            return true;
        });

        displayRecipes(filteredMeals);
    } catch (e) {
        console.error(e);
    }

    hideLoader();
}


// ================== AREAS FILTER ==================
async function loadAreas() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await res.json();
        const container = document.getElementById('areasDropdown');
        container.innerHTML = '';
        data.meals.forEach(area => {
            const name = area.strArea;
            const div = document.createElement('div');
            div.innerText = name;
            div.onclick = () => filterByArea(name);
            container.appendChild(div);
        });
    } catch(e) { console.error(e); }
}

async function filterByArea(area) {
    showLoader();
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const data = await res.json();
        if (!data.meals) lastLoadedMeals = [];
        else {
            const fullMeals = await Promise.all(
                data.meals.map(meal =>
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                        .then(res => res.json())
                        .then(d => d.meals[0])
                )
            );
            lastLoadedMeals = fullMeals.filter(m => m != null);
        }
        filterByIngredientsMulti(selectedIngredients);
    } catch(e) { console.error(e); }
    hideLoader();
}

// Load Areas on page load
document.addEventListener('DOMContentLoaded', loadAreas);

// ================== GLOBAL FUNCTIONS ==================
window.filterByIngredient = filterByIngredient;
window.filterByCategory = filterByCategory;
window.filterByTime = filterByTime;
window.viewDetails = viewDetails;
window.closeModal = closeModal;
window.toggleFavorite = toggleFavorite;
window.rateRecipe = rateRecipe;
window.toggleIngredientList = toggleIngredientList;
window.searchRecipe = searchRecipe;

// ================== INITIALIZE ==================
loadIngredientsSidebar();
searchRecipe("chicken");
// ================== DARK MODE TOGGLE ==================
const darkModeToggle = document.getElementById('darkModeToggle');

// Load saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Switch icon
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
});
