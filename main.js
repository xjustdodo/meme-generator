
const formEl = document.querySelector("form");

const inputEl = document.getElementById ("search-input");
let inputData = ""
    
const url = `https://meme-api.com/gimme/${inputData}`;
/* if (inputData =! "") {*/
    console.log (inputEl.value);




const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

async function generateMeme(){
  inputData = inputEl.value;
  const url = `https://meme-api.com/gimme/${inputData}`;
try{
  const response = await fetch (url)
  const data = await response.json()
  .then ((data) => {
    updateDetails(data.url, data.title, data.author);
    });
  } catch (error) {
    alert("No sub entered :c");
  };
};


formEl.addEventListener("submit", (event) => {
  event.preventDefault()
  generateMeme();
  
});

generateMemeBtn.addEventListener("click", generateMeme);

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    generateMeme();
  }
});


/* LIGHT/DARKMODE toggle */


const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const memegenerator = document.querySelector(".meme-generator");
const searchinput = document.querySelector("#search-input");

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")){

        body.style.background = "#D7DFE2";
        body.style.color ="black";
        body.style.transition = "2s";
        memegenerator.style.background = "#fff";
        memegenerator.style.transition = "2s";
        searchinput.style.background = "#fff";
        searchinput.style.transition = "2s";
        searchinput.style.color = "black";
    }else{
        body.style.background ="#030303" ;
        body.style.color = "white";
        body.style.transition = "2s";
        memegenerator.style.background = "#1A1A1B";
        memegenerator.style.transition = "2s";
        searchinput.style.background = "#272729";
        searchinput.style.transition = "2s";
        searchinput.style.color = "white";
        
    };
});


localStorage.clear();
