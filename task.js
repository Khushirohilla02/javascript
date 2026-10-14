let mainBox=document.getElementById("main-box");
mainBox.innerHTML=`
<h1 class="text-7xl text-center text-bold m-5 font-bold ">Bill Splitter</h1>`;
mainBox.classList="bg-pink-500 border m-5 rounded-xl";
let inputBox=document.getElementById("input-box");
inputBox.innerHTML=`
<input type="text" class ="text-5xl m-2 border hover:bg-pink-500 w-200" placeholder="Enter Total Amount" id="text-box">
<button class="border bg-pink-500 w-25 h-20 rounded-xl m-5 text-5xl onclick="addTip() ">5%</button>
<button class="border bg-pink-500 w-25 h-20 rounded-xl m-5 text-5xl onclick="addTip()">10%</button>
<button class="border bg-pink-500 w-25 h-20 rounded-xl m-5 text-5xl onclick="addTip()">25%</button>
<button class="border bg-pink-500 w-25 h-20 rounded-xl m-5 text-5xl onclick="addTip()">50%</button>
<button class="border bg-pink-500 w-40 h-20 rounded-xl m-5 text-5xl " onclick="showCustomInput()">Custom</button>
<input type="text" class ="text-5xl m-2 border hover:bg-pink-500 w-100" placeholder="Enter No. of People" id="people-box">
<button class="border bg-pink-500 w-80 h-20 rounded-xl m-5 text-5xl" onclick="calculateTip()">Calculate</button>
`;
let outputBox=document.getElementById("output-box");
outputBox.classList="flex flex-col m-5 border rounded-xl p-5 w-200  bg-pink-300 ";    
outputBox.innerHTML=`
<h1 class="text-3xl text-black-200">Total Tip</h1>

 <h1 class="text-3xl text-black-200">Total Bill Per Person</h1>
`;
let tip=document.getElementById("tip-box");
outputBox.tip.classList="text-5xl m-2 border hover:bg-pink-500 w-100";
let bill=document.getElementById("bill-box");
outputBox.bill.classList="text-5xl m-2 border hover:bg-pink-500 w-100";

function addTip(){
   let totalAmount=document.getElementById("text-box");
let people=document.getElementById("people-box");
totalAmount=totalAmount.value;
people=people.value;
tip.innerText=`Total Tip: ${tipAmount}`;
bill.innerText=`Total Bill Per Person: ${billPerPerson}`;
}
addTip();
function showCustomInput(){
   let customInput=document.createElement("input");
   customInput.type="text";
   customInput.classList="text-5xl m-2 border hover:bg-pink-500 w-100";
   inputBox.appendChild(customInput);
}
showCustomInput();
function calculateTip(totalAmount, tip,people) {
  totalBill= (totalAmount * tip) / 100;
  billPerPerson= totalBill / people;
  return { totalBill, billPerPerson };
}
calculateTip();