const initState = {
    username: '',
    quizData: []
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case "SET_USERNAME":
            return {
                ...state, 
                username: action.value
            }
        case "SET_QUIZDATA":
            return {
                ...state, 
                quizData: action.value
            }
        case "RESET":
            return initState
            
        default: 
            return state;
    }
}

export default reducer