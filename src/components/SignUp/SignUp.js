import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

const handleEmailBlur = event =>{
    setEmail(event.target.value);
}
const handlePasswordlBlur = event =>{
    setPassword(event.target.value);
}
const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value);
}

const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

const handleCreateUser = event =>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError('Your two passwords did not match!')
        return;
    }
    if(password.length < 6){
        setError('Password must be 6 characters or longer')
        return;
    }

    createUserWithEmailAndPassword(email, password);
if(user){
    navigate('/shop');
}
}

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign up</h2>
          <form onSubmit={handleCreateUser}>
          <div className="input-group">
              <label htmlFor='email'>Email</label>
              <input onBlur={handleEmailBlur} type="email" name='email' required></input>
          </div>
          <div className="input-group">
              <label htmlFor='password'>Password</label>
              <input onBlur={handlePasswordlBlur} type="password" name='password' required></input>
          </div>
          <div className="input-group">
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required></input>
          </div>
          <p style={{color: 'red'}}>{error}</p>
          <input className='form-submit' type="submit" value="Sign Up" required/>
          </form>
          <p>
          Already have an account? <Link className='form-link' to="/login">Login</Link>
              
          </p>
        </div>
      </div>
    );
};

export default SignUp;