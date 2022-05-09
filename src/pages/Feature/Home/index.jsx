import React from 'react';
import { Header, Footer } from '../../../components/layout'

export default function HomePage() {
  return (
    <div className='page-home'>
      <Header/>
      <main className='page-main'>
        <h1> This is page Home! </h1>
      </main>
      <Footer/>
    </div>
  )
}
