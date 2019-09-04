// FETCH
const fetch = require('node-fetch');

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const newUsers = viewUsers(users)
            console.log(newUsers);
        });
}

function viewUsers(users) {
    // console.log(users);
    return users
        .map(user => {
            return JSON.stringify({
                id: user.id,
                name: user.name
            });
        });
}

getUsers();