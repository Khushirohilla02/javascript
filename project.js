let mainFrame = document.getElementById("main-frame");
mainFrame.classList = "bg-pink-200 border m-5 h-120 w-200 place-self-center";
let innerBox = document.getElementById("inner-box");
innerBox.classList = "w-40 h-40 border m-5 rounded-xl p-10 place-self-center m-20 bg-pink-500";
innerBox.style.position = "relative";
let button=document.getElementById("button");
button.classList="border  w-40 h-20 rounded-xl m-5 text-5xl place-self-center bg-pink-500";
button.innerHTML=
`<h1 class="text-5xl text-center m-2">Jump</h1>`;
button.addEventListener("click", function () {
let top=0;
let up=true;
let jump=setInterval(function () {
    if(up){
        top+=10;
        if(top>=100){
            up=false;
        }
    } else {
        top-=10;
        if(top<=0){
            clearInterval(jump);
        }
    }
    innerBox.style.top = top + "px";
}, 100);
});