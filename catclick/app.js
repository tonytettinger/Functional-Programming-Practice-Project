let catPhoto = document.getElementById('cat');
let catName = document.getElementById('catname');
let counterElement = document.getElementById('counter');
let listOfCats = [{
    name: "Miau",
    website: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&h=350"
}, {
    name: "Bobby",
    website: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&h=350"
}, {
    name: "Choppy",
    website: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350"
}, {
    name: "Mokky",
    website: "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"
}, {
    name: "Floki",
    website: "https://cdn.shopify.com/s/files/1/0673/5325/files/LadyDinahs_Cat_Cafe_Alice-Block_2048x.jpg?v=1517059999"
}]

let currentCatCounter = 0;
let catClickCountArray = [0,0,0,0,0];
let clickCounter = function () {
    currentCatCounter++;
    counterElement.innerText = currentCatCounter;
    console.log(currentCatCounter);
}

console.log(listOfCats[0].name);
let eventAdder = function () {
    for (let i = 0; i < listOfCats.length; i++) {
        let currentListElement = 'list' + i;
        let currentCat = document.getElementById(currentListElement);
        let currentCatName = listOfCats[i].name;
        let currentCatPicture = listOfCats[i].website;
        let currentCatCounterTemp = catClickCountArray[i];
        currentCat.addEventListener('click', function (catNameCopy, catCounterTempCopy) {
            return function () {
                catName.innerText = catNameCopy;
                catPhoto.src = currentCatPicture;
                currentCatCounter=catClickCountArray[i];
            };
        }(currentCatName, currentCatCounterTemp));
    };
};
eventAdder();
catPhoto.addEventListener('click', clickCounter);