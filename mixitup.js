const constantValue = document.getElementById("constantValue");
const newConstantValue = document.getElementById("newConstantValue");

function changeConstantValue() {
  const value = newConstantValue.value;
  if (!isNaN(value)) {
    constantValue.value = value;
  } else {
    alert("Please enter a valid number");
  }
  newConstantValue.value = "";
}
