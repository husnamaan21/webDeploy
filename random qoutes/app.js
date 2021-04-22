const quotes=["Beware of monotony; it’s the mother of all the deadly sins.” –Edith Wharton","Life is 10% what happens to me and 90% of how I react to it. —Charles Swindoll","Perfection is not attainable, but if we chase perfection we can catch excellence. —Vince Lombard","You get in life what you have the courage to ask for. —Nancy D. Solomon"];
const btn=document.getElementById("btn");
const clr=document.querySelector(".myquote");


btn.addEventListener("click",function (){
    console.log("button clicked");
    const randomNumber=RandomNumber();

  clr.innerText=quotes[randomNumber];
});
function RandomNumber(){
   return Math.floor(Math.random()*quotes.length) ;
}