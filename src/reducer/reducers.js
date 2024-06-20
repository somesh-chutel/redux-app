
const initialState = 20;

export const ChangeCounter = (state=initialState,action)=>{

    switch(action.type){
        case ("INCREMENT") : return state + 1;

        case ("DECREMENT") : return state - 1;

        default : return state;

    }

}