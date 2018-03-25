export const RECEIVE_USER = 'RECEIVE_USER'; 
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveUsers = users => ({ 
    type: RECEIVE_USERS, 
    users 
}); 

export const receiveAllUsers = () => dispatch => {
    const dummyState =  { 
        1: { id: 1, 
            user_name: "joeyD",
            display_name: "joey"
        }, 
        2: { id: 2, 
            user_name: "christineS",
            display_name: "christine"
        }, 
        3: { id: 3, 
            user_name: "annaO",
            display_name: "anna"
        }, 
        4: { id: 4, 
            user_name: "edanL",
            display_name: "edan"
        }, 
        5: { id: 5, 
            user_name: "truongN",
            display_name: "truong"
        }
    };
    return dispatch(receiveUsers(dummyState)); 
}; 

