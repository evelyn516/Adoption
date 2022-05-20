const initState = {
    username: ''
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case "SET_USERNAME":
            return {
                ...state, 
                username: action.value
            }
        case "RESET":
            return initState
            
        default: 
            return state;
    }
}

export default reducer