// Your code here
let animals = [];
let selectedAnimals = {};

function fetchAnimals(){
    fetch("http://localhost:3000/characters", {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        animals = data;
        characterBarAnimals();

    });
}

function characterBarAnimals() {
    let bar=document.getElementById("character-bar");
    //console.log(bar);
    //console.log(animals);

    let str = "";
    for (let i = 0; i < animals.length; i++ ){
        let animal = animals[i];
      
        console.log(animals);
        str= str+ `<span onClick="myFunction('${i}')" id={animal.id}>${animal.name}</span>`;
    }
    bar.innerHTML =str;
    displayAnimal(0);
}
function displayAnimal(id){
    //console.log(id);
    let animal = animals[id];
    selectedAnimal = animal;
    let charName = document.getElementById("name");
    let charImg = document.getElementById("image");
    let charVote = document.getElementById("vote-count");

    charName.innerText = animal.name;
    charImg.src = animal.img;
    charVote.innerText = animal.vote;

   // console.log(animals);

};
let votesForm = document.getElementById("votes-form");

votesForm.addEventListener("submit", function(e){
    e.preventDefault();
    let votesInput = document.getElementById("votes");
    let votes = parseInt(votesInput.value);

    if (!votes) return;

    let animals = animals[selectedAnimal];
    animal.votes = votes + animal.votes;
    dosplayAnimal(selectedAnimal);
    
});

let resetbtn = document.getElementById("reset-btn");

resetbtn.addEventListener("click", function(){
    let animal = animals[selectedAnimal];
    animal.votes = 0;
    displayAnimals(selectedAnimal);
});