function addInput(){
    let listItems = document.getElementById("list-items");
    let a = document.getElementById('input').value;
    let li = document.createElement('li');
    li.innerHTML = `<div id="alo" class = "elem">${a} <img class="bin" src="/images/bin.jpg" alt="bin" onclick="deleteElem(this)"></div>`;
    listItems.appendChild(li);
}
// its not working correctly
// TODO: write an array inputList with all inputs
//       delete only one from that array and refresh all inputs
function deleteElem(e){
    e.parentElement.parentElement.remove();
}