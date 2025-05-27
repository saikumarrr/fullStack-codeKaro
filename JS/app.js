
roll = () => {
    let counter = 0;
    let finalCount = 0;
    let dice = document.getElementById('dice');
    let diceMp3 = document.getElementById('diceMp3');

    diceMp3.pause() // important!!!
    diceMp3.currentTime = 0
    diceMp3.play();
    finalCount = Math.floor(Math.random() * 6);
    dice.classList.add('spin')
    setTimeout(() => {

        dice.innerText = finalCount + 1;
        dice.classList.remove('spin');
    }, 700);
}


let items = [];

function add() {
    let name = document.getElementById('userName');
    let email = document.getElementById('email');
    let itemsDiv = document.getElementById('items');
    let obj = {
        name: name.value,
        email: email.value
    }

    const findIndex = items.findIndex((x) => x.email == obj.email);

    if (findIndex == -1 && name.value && email.value) {
        items.push(obj);

        var checkBox = document.createElement("input");
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('value', obj.name);

        let div = document.createElement('div');
        let p1 = document.createElement('p');

        div.classList.add('items')
        div.style.display = 'flex';
        div.style.gap = '10px';
        itemsDiv.appendChild(div);
        p1.innerText = name.value + ' - ' + email.value;
        div.appendChild(checkBox);
        div.appendChild(p1);

        checkBox.addEventListener('click', () => {
            selectedItem(checkBox, obj.name, div);
        });
        
    } else {
        if (!name.value && !email.value) {
            alert('Enter values');
        } else {
            alert('User already exists');
        }
    }

    console.log(items);

    name.value = '';
    email.value = '';
}


function selectedItem(checkBox, objName, itemsDiv) {
    // const inx = items.findIndex( ele => ele.name == objName);
    console.log(checkBox.checked);
    if (checkBox.checked) {
        itemsDiv.style.textDecoration = 'line-through';
    } else {
        itemsDiv.style.textDecoration = 'none';
    }
    
}
