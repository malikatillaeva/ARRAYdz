let user = {}


for (let i = 1; i <= 10; i++) {
    console.log('foydalanuvchi' + i);
    user[i] = { name : prompt('Your name'),
    age : prompt ('Your age:')
}
    console.log('Sizning ismingiz:', user[i].name);
    console.log('Sizning yoshingiz:', user[i].age);
}
console.log(user);