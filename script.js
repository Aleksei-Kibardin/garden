'use strict';

//______________генерация чисел
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
//___________сад
let tree = [],
    appleStatus = ['свежее', 'упавшее', 'испорчиное'];

function getStatus(i) {
    if (i === 0) {
        return getRandom(0, 29);
    }if (i === 2) {
        return getRandom(0, 10);
    }else{
        return getRandom(0, 1);
    }
}

function createApples(){
    let apples = []
    for(let i=0; i < getRandom(5, 10); i++) {
        let index = getRandom(0, 2);
        apples[i] = {
            age: getStatus(index),
            appleDepravity: appleStatus[index]
        }
    }
    return apples
}


function createTree() {
    for(let i=0; i < getRandom(2, 5); i++) {
        tree[i] = {
            age: getRandom(60, 90),
            apple: createApples()
        }
    }   
}
createTree();



let garden = {
    age: getRandom(100, 200),
    tree: tree
}

console.log(garden)

//_______________ skip

const btn = document.querySelector('.btn');

function addAple() {
    garden.tree.forEach(t =>{
    t.apple.push(...createApples())
})
}
btn.addEventListener('click', () =>{
    addAple();
    addingAge(30);   
    reloadStatus();
    console.log(garden)
})

// reload status apple

function reloadStatus(){
    garden.tree.forEach(t =>{
        t.apple.forEach(a =>{
            if (a.appleDepravity === appleStatus[0] && a.age > 30){
                a.appleDepravity = appleStatus[1]
                a.age = 1
            } if (a.appleDepravity === appleStatus[1] && a.age > 3){
                a.appleDepravity = appleStatus[2]
                a.age = 1
            }
        })
    })
}
// increasing age

function addingAge(i){
    garden.age = garden.age + i
    let tt = garden.tree.forEach(t =>{
        t.age = t.age + i
        t.apple.forEach(a =>{
            a.age = a.age + i
        })
    })   
};

// timer
