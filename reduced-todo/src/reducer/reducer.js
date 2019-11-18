
export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'Learn about cats',
    completed: false,
    id: 383534534
},
{  
    item: 'Learn about muffins',
    completed: true,
    id: 389298545334
}]

export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
      
        if(action.payload.item !== "") 

          return [...state, action.payload]
        
        return state;

        case 'REMOVE':

            let filterArr = state.filter( todo => {
                return todo.completed === false
            });

            return filterArr;
        
        case 'TOGGLE':

              let index = state.map( todo => {
                return todo.id
              }).indexOf(action.payload.id);

              state[index].completed = !state[index].completed;

              return state;

        default:
          return state
    }
}