export const IncrementAction = (payload) => ({
    type: "INCREMENT_COUNT",
    payload
})

const DecrementAction = (payload) => ({
    type: "DECREMENT_COUNT",
    payload
})

export const DecrementActionwithDelay=()=>{
     return dispatch => {
         setTimeout(function(){
         return dispatch({type:"DECREMENT_COUNT"})},10000)
     }
}


