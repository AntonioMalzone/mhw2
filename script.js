/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

let first = null;
let second = null;
let third = null;

function answer(event) {

    const choice = event.currentTarget;//Rappresenta l'elemento su cui è stato registrato il listener che ha 'catturato' l'evento. event.target, invece, rappresenta l'elemento su cui si è originato l'evento
    const index = choice.dataset.questionId;

    const checked = document.createElement('img');
    /*const unchecked = [];*/
    /*
     Servono piu elementi perche se faccio append di un elemento già appeso, questo viene spostato
    */

    checked.src = 'images/checked.png';

    checked.classList.add('checkbox');

    console.log('Question answered: ' + index);



    const as = document.querySelectorAll('[data-question-id=' + index + ']'); //Per poter usare valore di una variabile per confronto: '+ nomeVar +'

    switch (index) {
        case "one":
            first = choice.dataset.choiceId;
            break;
        case "two":
            second = choice.dataset.choiceId;
            break;
        case "three":
            third = choice.dataset.choiceId;
            break;
    }


    /*for (let i = 0; i < es.length; i++) {
        unchecked[i] = document.createElement('img');
        unchecked[i].src = 'images/unchecked.png';
        unchecked[i].classList.add('checkbox');

        es[i].removeChild(es[i].lastElementChild);
        es[i].classList.remove('selected');
        es[i].classList.add('opaque');
        es[i].appendChild(unchecked[i]);
    }*/

    for(let a of as)
    {
        uncheck(a);
        a.classList.remove('selected');
        a.classList.add('opaque');
    }

    choice.classList.add('selected');
    choice.classList.remove('opaque');
    choice.removeChild(choice.lastElementChild);
    choice.appendChild(checked);

    if (first != null && second != null && third != null) {
        results(first, second, third);
    }

}

function uncheck(container) {

    container.removeChild(container.lastElementChild);

    const unchecked = document.createElement('img');
    unchecked.src = 'images/unchecked.png';
    unchecked.classList.add('checkbox');
    container.appendChild(unchecked);
}

function reload(event) {
    const art = document.querySelector("article");
    art.removeChild(art.lastChild);
    const as = document.querySelectorAll(".choice-grid div");
    for (const a of as) {
        a.classList.remove("selected");
        a.classList.remove("opaque");
        uncheck(a);
        first = null;
        second = null;
        third = null;
        a.addEventListener('click', answer);
    }
}
/*
function results(q1, q2, q3) {
    let res = null;
    if (q1 === q2 || q2 === q3)
        res = q2;
    else
        if (q1 === q3)
            res = q1;
        else
            res = q1;

    const art = document.querySelector("article");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const id = document.createAttribute("id");

    div.classList.add("result");
    h1.textContent = RESULTS_MAP[res]['title'];
    p.textContent = RESULTS_MAP[res]['contents'];
    a.textContent = "Ricomincia il quiz";
    id.value = "button";

    a.setAttributeNode(id);

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(a);
    art.appendChild(div);

    const as = document.querySelectorAll(".choice-grid div");
    for (const a of as) {
        a.removeEventListener('click', answer);
    }

    const button = document.querySelector("#button");
    button.addEventListener('click', reload);
}
*/
/**brutta */
function results(q1, q2, q3) {
    let res = null;
    if (q1 === q2 || q2 === q3)
        res = q2;
    else
        if (q1 === q3)
            res = q1;
        else
            res = q1;

    const art = document.querySelector("article");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const bottone = document.createElement("button");
    const id = document.createAttribute("id");

    div.classList.add("result");
    h1.textContent = RESULTS_MAP[res]['title'];
    p.textContent = RESULTS_MAP[res]['contents'];
    bottone.textContent = "Ricomincia il quiz";
    id.value = "button";

    bottone.setAttributeNode(id);
    art.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(bottone);
    

    const as = document.querySelectorAll(".choice-grid div");
    for (const a of as) {
        a.removeEventListener('click', answer);
    }

    const button = document.querySelector("#button");
    button.addEventListener('click', reload);
}


//MAIN
const choices = document.querySelectorAll('.choice-grid div');


for (const choice of choices) {
    choice.addEventListener('click', answer)
    //Aggiungo listener a tutti i div in choice-grid
}