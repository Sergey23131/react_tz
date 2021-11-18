const getUsers = () => {
    return fetch('http://localhost:5000/users')
        .then(value => value.json())
};

const getUserByID = (id) => {
    return fetch(`http://localhost:5000/users/${id}`)
        .then(value => value.json())
};

const createUser = (user) => {
    return fetch('http://localhost:5000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
};

const updateUser = (user, id) => {
    return fetch(`http://localhost:5000/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const deleteUser = (id) => {
    return fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE',
    }).then(value => value.json());
};


export {getUsers, getUserByID, createUser, updateUser, deleteUser};
