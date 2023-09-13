let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world你!";

// alert("hello!");
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
// });
let myButton = document.querySelector("button");
let myImage = document.querySelector("img");


myButton.onclick=function(){
    // myImage.setAttribute("src", "images/1.png");
    setUserName();
}
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }