
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

    const findIndex = items.findIndex((x) => x.email == obj.email) ;

    if (findIndex == -1) {
        items.push(obj);
        let div = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        div.classList.add('items')
        itemsDiv.appendChild(div);
        p1.innerText = name.value;
        p2.innerText = email.value;
        div.appendChild(p1);
        div.appendChild(p2);
    } else {
        alert('User already exists')
    }

    console.log(items);

    name.value = '';
    email.value = '';
}
