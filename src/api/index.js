const baseURL = 'http://fitnesstrac-kr.herokuapp.com/api'

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        const result = await response.json();

        return result;

    } catch (err) {
        console.error('registerUser-api/index.js FAILED:', err);
    }
}

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        })

        const result = await response.json();

        return result;

    }
    catch (err) {
        console.error('loginUser-api/index.js FAILED:', err);
    }
}

export const getUserDetails = async (token) => {
    try {
        const response = await fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const result = await response.json();

        return result;

    }
    catch (err) {
        console.error('getUserDetails-api/index.js FAILED:', err);
    }
}

// says no request parameter needed but probably needs an if statement or something or about the token being there
// added in 'Authorization': `Bearer ${token}`
export const getUserRoutines = async (token) => {
    try {
        const response = await fetch(`${baseURL}/users/:username/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        })

        const result = await response.json();

        return result;

    }
    catch (err) {
        console.error('getUserRoutines-api/index.js FAILED:', err);
    }
}

export const getAllActivities = async () => {

    try {
        const response = await fetch(`${baseURL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        const result = await response.json();

        return result;

    }
    catch (err) {
        console.error('getAllActivities-api/index.js FAILED:', err);
    }
}

export const getPublicRoutines = async () => {

    try {
        const response = await fetch(`${baseURL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const results = await response.json();
        console.log("----Public Routines----", results)
        return results;
    }
    catch (err) {
        console.error('getPublicRoutines-api/index.js FAILED:', err)
    }
}

export const createNewRoutine = async (token,{name, goal}) => {
    try {
        const response = await fetch (`${baseURL}/routines`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify({
          name,
          goal,
          isPublic: true
        })
    })
        const result = await response.json();
        console.log ("-----New Routine-----", result);
        return result;
    }
    catch (err) {
        console.error('createNewRoutine-api/index.js FAILED:', err)
    }
}

export const updateRoutine = async (token,{name, goal, isPublic, _id}) => {
    try {
        const response = await fetch (`${baseURL}/routines/${_id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify({
          name,
          goal,
          isPublic
        })
    })
        .then(response => response.json())
        .then(result => {
        console.log(result);
        })
        .catch(console.error);
    }
    catch (err) {
        console.error('createNewRoutine-api/index.js FAILED:', err)
    }
}


export const deleteRoutine = async (token, {_id} ) => {
    try {   
        const response = await fetch (`${baseURL}/routines/${_id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(result => {
        console.log(result);
        })
        .catch(console.error);
    }
    catch (err) {
        console.error('deleteRoutine-api/index.js FAILED:', err)
    }
    
}