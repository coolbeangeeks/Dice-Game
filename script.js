let randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;


// console.log(randomNumber1);
let randomImage1="dice"+ randomNumber1 +".png";
let randomimageSource="images/"+randomImage1;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimageSource);
let randomImage2="dice"+ randomNumber2 +".png";
let randomimageSource2="images/"+randomImage2;
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimageSource2)

let changeH1=document.querySelector('h1');
if(randomNumber1>randomNumber2){
    changeH1.innerText='Player 1 Win';
}
else if(randomNumber1<randomNumber2){
    changeH1.innerText='Player 2 Win';
}
else{
    changeH1.innerText='Draw';
}