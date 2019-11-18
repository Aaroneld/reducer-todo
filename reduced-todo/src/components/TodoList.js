import React from 'react';
import styled from 'styled-components';


const TodoContainer = styled.section`

    border: 4px solid black;
    margin: 2% 5% 2% 5%;

    ul {

        list-style-type: none;
        display: flex;
        flex-flow: column;
        padding: 0;
        margin: 0;
        
        li {

            align-self: center;
            width: 100%;
            padding: 2.5% 0;
            border: 1px solid grey;
            font-weight: bold;
            background: red;
            
        }

        .completed {

            background: green;
        }
    }

`;

const TodoList = (props) => {

    return (
        <TodoContainer>
            <ul>
                {props.list.map( todo => {
                  return <li key={todo.id}
                             className={ todo.completed? "completed" : ""}
                             onClick={event => { 
                             props.dispatch({type: 'TOGGLE',
                             payload: todo});
                             event.target.className = todo.completed ? "completed" : "";
                             }}  
                             >{todo.item}
                  </li>
                })}
            </ul>
        </TodoContainer>
    );
}

export default TodoList;