// Event listener to transfer display text
const inputFields = document.getElementsByTagName("input");

for (const item of inputFields) {
  item.addEventListener("keyup", transferInput);
}

// Transfer text function
function transferInput(event) {
  const inputTarget = event.target;
  const targetId = inputTarget.id.replace("form", "display");
  document.getElementById(targetId).innerText = inputTarget.value;
  if (event.target.id == "formFirstName") {
    document.getElementById("displayInitials1").innerText =
      inputTarget.value.charAt(0);
    addInitialsSymbol();
  } else if (event.target.id == "formSecondName") {
    document.getElementById("displayInitials2").innerText =
      inputTarget.value.charAt(0);
    addInitialsSymbol();
  }
}

// Add and alter displayInitialsSymbol depending on selected style
function addInitialsSymbol() {
  const styleNumber = parseInt(
    document.getElementById("displaySection").className.slice(-1)
  );
  switch (styleNumber) {
    case 1:
      document.getElementById("displayInitialsSymbol").innerText = `|`;
      break;
    case 2:
      document.getElementById("displayInitialsSymbol").innerText = `&`;
      break;
    case 3:
      document.getElementById("displayInitialsSymbol").innerText = `+`;
      break;
    default:
      break;
  }
}

// Event listener to change display styles
const displayStyles = document.getElementsByClassName("displayStyle");

for (const item of displayStyles) {
  item.addEventListener("click", changeDisplayStyle);
}

// Change display style function
function changeDisplayStyle(event) {
  const clicked = event.target;
  const newDisplayStyle = clicked.id.substr(clicked.id.length - 1, 1);
  document.getElementById("displaySection").className =
    document.getElementById("displaySection").className.slice(0, -1) +
    newDisplayStyle;
    addInitialsSymbol();
}