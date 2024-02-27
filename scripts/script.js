function addInput(){
    let listItems = document.getElementById("list-items");
    let a = document.getElementById('input').value;
    let li = document.createElement('li');
    li.innerHTML = `<div id="alo" class = "elem">${a} <img class="bin" src="/images/bin.jpg" alt="bin" onclick="deleteElem(this)"></div>`;
    if (a != ''){
        listItems.appendChild(li);
    document.getElementById('input').value = '';
    }
    else{
        Errors('empty')
    }
}

function Errors(code){
    if (code == 'empty'){
        document.getElementById('alerts').innerHTML = 'input is empty!'
        setTimeout(() => document.getElementById('alerts').innerHTML = '', 2000)
    }
    else if (code == 'exists'){
        // toDO: if input exists in array inputList => alert 'already exists!'
    }
}
// its not working correctly
// TODO: write an array inputList with all inputs
//       delete only one from that array and refresh all inputs
function deleteElem(e){
    e.parentElement.parentElement.remove();
}