import React, { useContext, useState } from 'react'
import { Context } from '../context';
import { useHistory } from "react-router-dom";
import Button from './Button';
import API from '../API';
import styled from 'styled-components';

export const Login = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
  const [error, setError] = useState(false);


    const [_user, setUser] = useContext(Context);
    const history = useHistory();

const handleSubmit = async () =>{
    setError(false);
   try {
    const requestToken = await API.requestToken();
    const sessionId = await API.authenticate(
        requestToken,
        username,
        password
    );
        console.log(sessionId);
        setUser({sessionId: sessionId.session_id, username});
        history.push('/');
   } catch (error) {
       setError(true);
   }
}
 const handleInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
if(name === 'Name')  setUsername(value);
if(name === 'Password')  setPassword(value);
}

    return (
        <Wrapper>
      {error && <div className='error'>There was an error!</div>}

            <label>UserName:</label>
            <input 
            name='Name'
            type='text'
            value={username}
            onChange={handleInput}
            />
            <input 
            name='Password'
            type='text'
            value={password}
            onChange={handleInput}
            />
            <Button callback={handleSubmit} text='Login' />
        </Wrapper>
    )
}
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  padding: 20px;
  color: var(--darkGrey);

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }

  .error {
    color: red;
  }
`;
