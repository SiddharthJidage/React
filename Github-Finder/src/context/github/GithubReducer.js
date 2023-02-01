// reducer takes 2 args and returns sate based on both args
const githubReducer =(state, action)=>{

    // to map multiple state transition for a reducer function.
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users : action.payload,
                loading : false
            }
        case 'SET_USERS':
            return{
                ...state,
                loading:true
            }
        default:
            return state
    }

}

export default githubReducer 