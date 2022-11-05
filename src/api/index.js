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
            body: JSON.stringify(
                {
                    username,
                    password
                }
            )
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
export const getUserRoutines = async (token, username) => {
    try {
        const response = await fetch(`${baseURL}/users/${username}/routines`, {
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
        console.log('ALL ROUTINESSSS-api/index.js', results)
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
          name: name,
          goal: goal,
          isPublic: true
        })
    })
        const result = await response.json();
        
        return result;
    }
    catch (err) {
        console.error('createNewRoutine-api/index.js FAILED:', err)
    }
}

export const updateRoutine = async (token,{name, goal, isPublic, id}) => {
    try {
        const response = await fetch (`${baseURL}/routines/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: isPublic
        })
    })
        const result = await response.json();
        
        return result;
        }
        catch (err) {
            console.error('updateRoutine-api/index.js FAILED:', err);
    }
}


export const deleteRoutine = async (token, id ) => {
    try {   
        const response = await fetch (`${baseURL}/routines/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    
        const result = await response.json();
        
        return result;
    }
    catch (err) {
        console.error('deleteRoutine-api/index.js FAILED:', err)
    }
}

export const createNewActivity = async (token,{name, description}) => {
    try {
        const response = await fetch (`${baseURL}/activities`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify({
          name: name,
          description: description
        })
    })
        const result = await response.json();
       
        return result;
    }
    catch (err) {
        console.error('createNewActivity-api/index.js FAILED:', err)
    }
}

export const updateActivity = async (token,{name, description, id}) => {
    try {
        const response = await fetch (`${baseURL}/activities/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify({
          name,
          description
          
        })
    })
        .then(response => response.json())
        .then(result => {
        console.log(result);
        })
        .catch(console.error);
    }
    catch (err) {
        console.error('createNewActivity-api/index.js FAILED:', err)
    }
}

export const getRoutinesByActivity = async (activityId) => {

    try {
        const response = await fetch(`${baseURL}/${activityId}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const results = await response.json();
        
        return results;
    }
    catch (err) {
        console.error('getRoutinesByActivities-api/index.js FAILED:', err)
    }
}

export const deleteRoutineActivity = async (token, id) => {
    try {
      const response = await fetch(`${baseURL}/routine_activities/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      const result = await response.json();

      return result

    } catch (err) {
      console.error('deleteRoutineActivity-api/index.js FAILED', err)
    }
  }

export const addActivityToRoutine = async (token, routineId, {activityId, count, duration}) => {
    try {
        console.log(activityId, count, duration)
      const response = await fetch(`${baseURL}/routines/${routineId}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration
        })
      })

      const result = await response.json();

      return result

    } catch (err) {
        console.error('addActivityToRoutine-api/index.js FAILED:', err)
    }
  }

  export const updateRoutineActivity = async (token, id, {count, duration}) => {
    try {
      const response = await fetch(`${baseURL}/routine_activities/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          count: count,
          duration: duration
        })
      })

      const result = await response.json();

      return result

    } catch (err) {
      console.error('updateRoutineActivity-api/index.js FAILED', err)
    }
  }