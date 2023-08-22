const nameInput = document.getElementById("name");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const savedNameSpan = document.getElementById("savedName");

saveButton.addEventListener("click", () => {
  const name = nameInput.value;
  localStorage.setItem("savedName", name);
  savedNameSpan.textContent = name;
});

clearButton.addEventListener("click", () => {
  localStorage.removeItem("savedName");
  savedNameSpan.textContent = "";
  nameInput.value = "";
});

const savedName = localStorage.getItem("savedName");
if (savedName) {
  savedNameSpan.textContent = savedName;
  nameInput.value = savedName;
}

const counterSpan = document.getElementById("counter");

let previousValue = sessionStorage.getItem("counterValue");
let counterValue = previousValue ? parseInt(previousValue) : 0;

function updateCounter() {
  counterValue++;
  counterSpan.textContent = counterValue + " secondi";
  sessionStorage.setItem("counterValue", counterValue);
}

const interval = setInterval(updateCounter, 1000);

window.addEventListener("beforeunload", () => {
  clearInterval(interval);
});

updateCounter();
