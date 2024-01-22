function testApi() {
  const time = document.getElementById("timeSelector").value;
  const apiResponseDiv = document.getElementById("apiResponse");

  fetch(`http://localhost:3000/api/adkar/${time}`)
    .then((response) => response.json())
    .then((data) => {
      apiResponseDiv.style.display = "block";
      apiResponseDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      apiResponseDiv.textContent = "Error fetching data.";
    });
}
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
