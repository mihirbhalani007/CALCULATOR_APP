let string = "";
let buttons = document.querySelectorAll(".button");
let inputElement = document.getElementById("input-text");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (string) {
      string = eval(string);
      inputElement.value = string;
    }
  }
});
