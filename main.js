// we want to scan through the elements on a webpage and search for keywords like "instructions",
//"directions" or "ingredients"
//If those keywords are found, we will use const ingredientsWord = document.documentElement.innerText.indexOf('ingredients');
//ingredientsWord.scrollIntoView({behavior: "smooth"})


//how can I "capture" the html text of any website that I visit
//if the words "instructions" "directions" "ingredients" exist we will auto scroll to those areas


if (document.body.textContent.includes("Ingredients")) {
    document.body.querySelector('#recipe').scrollIntoView({
        behavior: 'smooth'
      });
    // const element = document.body.innerText;
    // alert(element);
    // document.body.innerHTML.indexOf("Instructions").scrollIntoView({behavior: "smooth"})
    // element.scrollIntoView();
}

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