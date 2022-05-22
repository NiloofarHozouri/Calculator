var inputsText = document.getElementById("inputs");
//var btncl= document.querySelectorAll("#btn-click");
// for (var i in btncl) {
//   btncl[i].addEventListener("click", bindClick(i));
// }
// function bindClick(i) {
//   return function () {
//     console.log(i);
//     inputsText.value +=i;
//   };
// }
//مدل دیگر کد بالا

document.querySelectorAll("#btn-click").forEach((item) => {
  item.addEventListener("click", (myfun) => {
    inputsText.value += item.innerHTML;
  });
});

var AC = document.querySelector("#acBtn");
AC.addEventListener("click", (ACBTN) => {
  inputsText.value = "";
});
function solve()
{
let x = document.getElementById("inputs").value
let y = eval(x)
document.getElementById("inputs").value = y
}

