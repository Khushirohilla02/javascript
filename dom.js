let mainFrame= document.getElementById("main-frame");
mainFrame.classList ="m-10 flex p-10 ";
let flagBox=document.createElement("div");

//flag1(India)
function getIndiaFlag(){
    let indiaFlag=document.createElement("div");
    indiaFlag.classList="border-2 w-31 m-2";
    let orange=document.createElement("div");
    orange.classList="bg-orange-500 h-10 w-30";
    let white=document.createElement("div");
    white.classList="bg-white-500 h-10 w-30 justify-items-center";
    let green=document.createElement("div");
    green.classList="bg-green-500 h-10 w-30";
    let blue=document.createElement("div");
    blue.classList="bg-blue-700 h-10 w-10 rounded-full";
    white.appendChild(blue);
    indiaFlag.appendChild(orange);
    indiaFlag.appendChild(white);
    indiaFlag.appendChild(green);
    return indiaFlag;
}

//flag2(Japan)
function getJapanFlag(){
    let japanFlag=document.createElement("div");
    japanFlag.classList="border-2 w-31 m-2 bg-white-500 justify-items-center content-center";
    let red=document.createElement("div");
    red.classList="bg-red-700 h-10 w-10 rounded-full";
    japanFlag.appendChild(red);
    return japanFlag;
}

//flag3(Italy)
function getItalyFlag(){
    let italyFlag=document.createElement("div");
    italyFlag.classList="border-2 w-31 m-2 flex";
    let green1=document.createElement("div");
    green1.classList="bg-green-500 h-30 w-10";
    let white1=document.createElement("div");
    white1.classList="bg-white-500 h-30 w-10";
    let red1=document.createElement("div");
    red1.classList="bg-red-600 h-30 w-10";
    italyFlag.appendChild(green1);
    italyFlag.appendChild(white1);
    italyFlag.appendChild(red1);
    return italyFlag;
}

//flag4(France)
function getFranceFlag(){
    let franceFlag=document.createElement("div");
    franceFlag.classList="border-2 w-31 m-2 flex";
    let blue1=document.createElement("div");
    blue1.classList="bg-blue-700 h-30 w-10";
    let white2=document.createElement("div");
    white2.classList="bg-white-500 h-30 w-10";
    let red2=document.createElement("div");
    red2.classList="bg-red-600 h-30 w-10";
    franceFlag.appendChild(blue1);
    franceFlag.appendChild(white2);
    franceFlag.appendChild(red2);
    return franceFlag;
}

//flag5(Indonesia)
function getIndonesiaFlag(){
    let indonesiaFlag=document.createElement("div");
    indonesiaFlag.classList="border-2 w-31 m-2";
    let red3=document.createElement("div");
    red3.classList="bg-red-600 h-10 w-30";
    let white3=document.createElement("div");
    white3.classList="bg-white-500 h-10 w-10";
    indonesiaFlag.appendChild(red3);
    indonesiaFlag.appendChild(white3);
    return indonesiaFlag;
}

//flag6(Germany)
function getGermanyFlag(){
    let germanyFlag=document.createElement("div");
    germanyFlag.classList="border-2 w-31 m-2";
    let black=document.createElement("div");
    black.classList="bg-black h-10 w-30";
    let red4=document.createElement("div");
    red4.classList="bg-red-600 h-10 w-30";
    let yellow=document.createElement("div");
    yellow.classList="bg-yellow-400 h-10 w-30";
    germanyFlag.appendChild(black);
    germanyFlag.appendChild(red4);
    germanyFlag.appendChild(yellow);
    return germanyFlag;
}

//flag7(bangladesh)
function getBangladeshFlag(){
    let bangladeshFlag=document.createElement("div");
    bangladeshFlag.classList="border-2 w-31 m-2 bg-green-800 justify-items-center content-center";
    let red5=document.createElement("div");
    red5.classList="bg-red-600 h-10 w-10 rounded-full";
    bangladeshFlag.appendChild(red5);
    return bangladeshFlag;
}

//flag8(bulgaria)
function getBulgariaFlag(){
    let bulgariaFlag=document.createElement("div");
    bulgariaFlag.classList="border-2 w-31 m-2";
    let white4=document.createElement("div");
    white4.classList="bg-white-500 h-10 w-30";
    let green2=document.createElement("div");
    green2.classList="bg-green-500 h-10 w-30";
    let red6=document.createElement("div");
    red6.classList="bg-red-600 h-10 w-30";
    bulgariaFlag.appendChild(white4);
     bulgariaFlag.appendChild(green2);
    bulgariaFlag.appendChild(red6);
    return bulgariaFlag;
}

//flag9(belgium)
function getBelgiumFlag(){
    let belgiumFlag=document.createElement("div");
    belgiumFlag.classList="border-2 w-31 m-2";
    let black1=document.createElement("div");
    black1.classList="bg-black h-10 w-30";
    let red7=document.createElement("div");
    red7.classList="bg-red-600 h-10 w-30";
    let yellow1=document.createElement("div");
    yellow1.classList="bg-yellow-300 h-10 w-30";
    belgiumFlag.appendChild(black1);
    belgiumFlag.appendChild(red7);
      belgiumFlag.appendChild(yellow1);
    return belgiumFlag;
}

//flag10(Ireland)
function getIrelandFlag(){
    let irelandFlag=document.createElement("div");
    irelandFlag.classList="border-2 w-31 m-2 flex";
    let green3=document.createElement("div");
    green3.classList="bg-green-500 h-30 w-10";
    let white5=document.createElement("div");
    white5.classList="bg-white-500 h-30 w-10";
    let orange1=document.createElement("div");
    orange1.classList="bg-orange-500 h-30 w-10";
    irelandFlag.appendChild(green3);
    irelandFlag.appendChild(white5);
    irelandFlag.appendChild(orange1);
    return irelandFlag;
}

let countryName="india";
let inputBar=document.createElement("input");
inputBar.classList=" bg-blue-200 h-10 rounded-sm border-2 border-black-400 m-2 p-1 hover:bg-green-200";
let searchButton=document.createElement("button");
searchButton.classList="bg-green-200 h-10 rounded-sm border-2 border-black-400 m-2 p-1 cursor-pointer";
searchButton.innerText="Search Country";
flagBox.appendChild(getIndiaFlag());
searchButton.addEventListener("click", () =>{
    let country=inputBar.value;
    inputBar.value="";
    countryName=country;
    flagBox.innerHTML="";
    if(countryName=="japan"){
        flagBox.appendChild(getJapanFlag());}
        else if(countryName=="indonesia"){
            flagBox.appendChild(getIndonesiaFlag());
        }
        else if(countryName=="italy"){
            flagBox.appendChild(getItalyFlag());
        }
        else if(countryName=="france"){
            flagBox.appendChild(getFranceFlag());
        }
        else if(countryName=="germany"){
            flagBox.appendChild(getGermanyFlag());
        }
        else if(countryName=="bangladesh"){
            flagBox.appendChild(getBangladeshFlag());
        }
        else if(countryName=="bulgaria"){
            flagBox.appendChild(getBulgariaFlag());
        }
        else if(countryName=="belgium"){
            flagBox.appendChild(getBelgiumFlag());
        }
        else if(countryName=="ireland"){
            flagBox.appendChild(getIrelandFlag());
        }
        else{
flagBox.appendChild(getIndiaFlag());
        }
    console.log(country);
});
mainFrame.appendChild(inputBar);
mainFrame.appendChild(searchButton);
mainFrame.appendChild(flagBox);



