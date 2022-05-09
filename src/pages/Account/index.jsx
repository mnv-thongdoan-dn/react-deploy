import React from 'react'
import { Header, Footer } from '../../components/layout'
import { useHistory } from 'react-router-dom';

export default function Account() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  const logout = () => {
    localStorage.removeItem("user");
    history.push('/')
  }
  return (
    <div className='page-account'>
      <Header/>
      <main className='page-main'>
        <h1>This is page Account!</h1>  
        <p>Hello {user.email}</p>
        <button onClick={logout}>Logout</button>
      </main>
      <Footer/>
    </div>
  )
}
