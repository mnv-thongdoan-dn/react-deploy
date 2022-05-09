import React from 'react';
import useAuth from '../../../hooks/Auth';
import { Header, Footer } from '../../../components/layout';

const Login = () => {
  const {login} = useAuth();
  return (
    <div className='page-login'>
      <Header/>
      <div className='page-main'>
        <h1>This is page login!</h1>
        <button onClick={() => login("ngocthong494@gmail.com")}>Click To Login</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Login;
