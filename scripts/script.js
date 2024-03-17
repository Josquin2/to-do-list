let existingInputs = [];

function addInput() {
  let listItems = document.getElementById("list-items");
  let a = document.getElementById("input").value;
  let li = document.createElement("li");
  li.innerHTML = `
    <div class="added-task">             
    <p>${a}</p> 
    <div>
        <img class="bin" src="/images/edit.png" alt="edit" onclick="editElem(this)">
        <img class="bin" src="/images/bin.jpg" alt="bin" onclick="deleteElem(this)">
        </div>
    </div>`;

  if (a != false) {
    if (existingInputs.includes(a)) {
      showAlert("exists");
    } else {
      existingInputs.push(a);
      listItems.appendChild(li);
      document.getElementById("input").value = "";
    }
  } else {
    showAlert("empty");
  }
}

function showAlert(code) {
  if (code == "empty") {
    document.getElementById("alerts").innerHTML = "input is empty!";
    setTimeout(() => (document.getElementById("alerts").innerHTML = ""), 1500);
  } else if (code == "exists") {
    document.getElementById("alerts").innerHTML = "exists!";
    setTimeout(() => (document.getElementById("alerts").innerHTML = ""), 1500);
  }
}
// its not working correctly
// TODO: write an array inputList with all inputs
//       delete only one from that array and refresh all inputs
function deleteElem(thisElem) {
  console.log(thisElem.parentElement.parentElement.innerHTML);
  thisElem.parentNode.parentNode.parentNode.parentNode.removeChild(
    thisElem.parentNode.parentNode.parentNode
  );
}

function editElem(thisElem) {
  let elem = thisElem.parentElement.parentElement.innerText;
  document.getElementById("input").value = elem.slice(0, elem.length - 2);
  deleteElem(thisElem);
}
