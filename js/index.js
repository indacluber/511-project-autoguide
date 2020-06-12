const name = document.getElementById("name");
const email = document.getElementById("email");
const cars = document.getElementById("cars");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const massage = document.getElementById("massage");

form.addEventListener("submit", (e) => {
  let masseges = [];
  if (name.value === "" || name.value == null) {
    masseges.push("Вкажіть своє Ім'я");
  }

  if (cars.value === "text1") {
    masseges.push("Вкажіть марку автомобіля");
  }
  if (masseges.length > 0) {
    errorElement.innerText = masseges.join(", ");
    e.preventDefault();
    console.log(masseges);
  }
});
