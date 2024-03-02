function addInput(){
    let listItems = document.getElementById("list-items");
    let a = document.getElementById('input').value;
    let li = document.createElement('li');
    li.innerHTML = `<div>${a} 
                        <img class="bin" src="/images/edit.png" alt="edit" onclick="editElem(this)">
                        <img class="bin" src="/images/bin.jpg" alt="bin" onclick="deleteElem(this)">
                    </div>
                    `;
    if (a != ''){
        listItems.appendChild(li);
        document.getElementById('input').value = '';
    }
    else{
        showAlert('empty');
    }
}

function showAlert(code){
    if (code == 'empty'){
        document.getElementById('alerts').innerHTML = 'input is empty!'
        setTimeout(() => document.getElementById('alerts').innerHTML = '', 1500)
    }
    else if (code == 'exists'){
        // toDO: if input exists in array inputList => alert 'already exists!'
    }
    else if (code == 'deletedItem'){
        document.getElementById('alerts').innerHTML = 'Item successfully deleted!'
        setTimeout(() => document.getElementById('alerts').innerHTML = '', 1500)
    }
}
// its not working correctly
// TODO: write an array inputList with all inputs
//       delete only one from that array and refresh all inputs
function deleteElem(thisElem){
    thisElem.parentElement.parentElement.remove();
    showAlert('deletedItem');
}

function editElem(thisElem){
    let elem = thisElem.parentElement.parentElement.innerText;
    document.getElementById('input').value = elem.slice(0, elem.length - 2 );
    thisElem.parentElement.parentElement.remove();
}