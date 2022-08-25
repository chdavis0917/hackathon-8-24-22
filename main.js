// we want to scan through the elements on a webpage and search for keywords like "instructions",
//"directions" or "ingredients"
//If those keywords are found, we will use const ingredientsWord = document.documentElement.innerText.indexOf('ingredients');
//ingredientsWord.scrollIntoView({behavior: "smooth"})


//how can I "capture" the html text of any website that I visit
//if the words "instructions" "directions" "ingredients" exist we will auto scroll to those areas

let commonIDs = ['recipe', 'ingredients', 'recipe-block_1-0', 'itr-ingredients', 'recipe-body']

let commonClasses = ['recipe', 'Recipe', 'recipe-ingredients', 'Recipe_ingredientName', 'mv-create-ingredients', 'ingredients', 'tasty-recipes-ingredients', 'itr-ingredients']


function keywordChecker() {

for (let i = 0; i < commonIDs.length; i++) {
if (document.body.contains(document.getElementById(commonIDs[i]))) {
    let hashtag = `#${commonIDs[i]}`;
    document.body.querySelector(hashtag).scrollIntoView({
        behavior: 'smooth'
      });
    return;
}
}
for (let i = 0; i < commonClasses.length; i++) {
  if (document.body.contains(document.getElementsByClassName(commonClasses[i]))) {
      let classTag = `.${commonClasses[i]}`;
      document.body.querySelector(classTag).scrollIntoView({
          behavior: 'smooth'
        });
      return;
  }
  }
  if (document.body.textContent.includes("Ingredients")) document.body.scrollTo(0, 950);

}

keywordChecker()


// if (document.body.textContent.includes("Directions")) {
//     document.body.innerText.indexOf('Directions').scrollIntoView({behavior: "smooth"})
// }

// if (document.body.textContent.includes("Ingredients")) {
//     document.body.innerText.indexOf('Ingredients').scrollIntoView({behavior: "smooth"})
// }



//examples below of how to possibly scroll the element into view once we are able to target
//text that indicates that the recipe is there


// const element = document.getElementById("box");

// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({block: "end"});
// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});