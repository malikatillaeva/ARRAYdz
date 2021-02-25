// array - massiv

let arr = ['string', 123, true, {zuhra: 3123}]

console.log(arr);

let tel = {
    akbar: 123,
    boxodir: 1321,
    zuhra: 3123,
    Akbar: 123123,
    Akbar: 3123
}

let str = 'qwerty'

for(let i=0; i< arr.length; i++){
    console.log(arr[i], i);
}

for(let i=0; i< str.length; i++){
    console.log(str[i], i);
}

let obj = {
    name: 'ali',
    age: 10,
    hello: function(){
        console.log(this.name + '  hello');
    }
}

arr.push('naprimer')
console.log(arr);

let matn = 'hello my friend'
// console.log(matn);
// matn = matn.split(' ')
// console.log(matn.join('-'));

// console.log(matn.split(' ').join('+'));

// delete arr[3]

// udaleniya index, kol-vo el
arr.splice(3,2)

console.log(arr);