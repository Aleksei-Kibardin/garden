//______________генерация чисел
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
//___________сад
let tree = [],
    apple = createApples(),
    appleStatus = ['свежее', 'упавшее', 'испорчиное']

function getStatus(i) {
    if (i === 0) {
        return getRandom(0, 30);
    }if (i === 2) {
        return getRandom(0, 10);
    }else{
        return getRandom(0, 1);
    }
}

function createTree() {
    for(let i=0; i < getRandom(2, 5); i++) {
        tree[i] = {
            age: getRandom(60, 90),
            apple: apple
        }
    }   
}
createTree();

function createApples(){
    for(let i=0; i < getRandom(5, 10); i++) {
        let index = getRandom(0, 2);
        apple[i] = {
            age: getStatus(index),
            appleDepravity: appleStatus[index]
        }
    }
}


let garden = {
    age: getRandom(100, 200),
    tree: tree
}

console.log(garden)