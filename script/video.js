console.log("gadhi");
// Fetch, load and show categories

// Create load categories
const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}


// Creare display categories

const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("categories");
    categories.forEach(element => {
        // console.log(element);
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = element.category;
        
        categoryContainer.append(button);
    });
}

loadCategories();