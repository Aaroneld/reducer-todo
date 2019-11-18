import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.section`

    border: 4px solid black;
    margin: 0 5%;
    padding: 4% 0;

    form {

        display: flex;
        flex-flow: column;
    }

    div {

        margin-bottom: 2%;

        input {
        
            height: 85%;
            width: 60%;

        }
        
        button {

            margin-left: 2%;
            padding: 1.5% 4%;
        }

    }

    button {

        align-self: center;
        color: white;
        background: black;
        border: none;
        padding: 1.5% 4%;
    }

`;

const TodoInterface= (props) => {

    return (
        <TodoContainer>
          <form>

              <div>
                    <input
                    type="text"
                    placeholder="...add Todo"
                    />
                    <button 
                    onClick={event => {
                            event.preventDefault();
                            props.dispatch({ type: 'ADD',
                                            payload: { 
                                                        id: Date.now(),
                                                        item: event.currentTarget.form[0].value,
                                                        completed: false,
                                                    }});
                                                }
                    }>Add</button>
               </div>
               
              <button onClick={ event => {
                  event.preventDefault();
                  props.dispatch({ type: 'REMOVE'});                  
              }}>Clear Complete</button>

          </form>
        </TodoContainer>
    );
}

export default TodoInterface;