const { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAIL } = require("../actions/user")

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_START:{
            return{
                ...state,
                loading: true
            }
        }
        case FETCH_USER_SUCCESS:{
            return{
                ...state,
                loading: false,
                users: action.payload
            }
        }
        case FETCH_USER_FAIL:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
}

module.exports.userReducer = userReducer;