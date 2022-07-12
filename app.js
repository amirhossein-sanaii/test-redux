const redux = require('redux')

const createStore = redux.createStore

const infinityState = {
    num : 0
}

const rootReducer = (state = infinityState , action)=>{

    if (action.type === "PLUS") {
        return{
            ...state,
            num : state.num +1 
        }
    }

    if (action.type === "PLUSTOW") {
        return{
            ...state,
            num : state.num + action.value
        }
    }
    return state
}


const stor = createStore(rootReducer)



stor.subscribe(()=>{
    console.log("subscribe" , stor.getState());
})





stor.dispatch({type: "PLUS"})
stor.dispatch({type: "PLUSTOW" , value : 2})



console.log(stor.getState());