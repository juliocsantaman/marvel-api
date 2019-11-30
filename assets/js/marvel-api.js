let publickey = "a42d6a517209e7e95f16009842f275f6";
let privatekey = "9dfb86e1d27071eb44239466dc60161a26436468";
let ts = 1;
let stringToHash = ts + privatekey + publickey;
//console.log(stringToHash);
let hash = "5f6da8e0b53bc182f8947c0b3705de1a";
let baseUrl = 'https://gateway.marvel.com/v1/public/characters?';
let url = `${baseUrl}ts=${ts}&apikey=${publickey}&hash=${hash}`;
let marvelCharacters = document.getElementById("marvel-characters");


fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);

    let characters = myJson.data.results;
    renderCard(characters);
    
  });

function renderCard(characters) {

  characters.forEach(character => {
    let imgExtension = character.thumbnail.extension;
    let imgUrl = character.thumbnail.path;
    let myDiv = document.createElement("div");
    let createImg = `
      <img src="${imgUrl}.${imgExtension}" alt="${character.name}" title="${character.name}">
    `;

    myDiv.innerHTML = createImg;
    renderName(character, myDiv);
    marvelCharacters.append(myDiv);
  });

}

function renderName(character, myDiv) {
  let characterName = character.name;
  let myP = document.createElement("p");
  myP.innerHTML = characterName;

  myDiv.append(myP);
}

