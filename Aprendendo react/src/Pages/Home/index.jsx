import { useState } from 'react'
import './styles.css'



function Home() {
  const users = [
    {
      id: 1,
      name: 'João',
      email: 'joão.gonçalves@gmail.com',
      idade: 25
    },
    {
      id: 2,
      name: 'Gilberto',
      email: 'gilberto.caetano@gmail.com',
      idade: 25
    },
     {
      id: 3,
      name: 'Carlos',
      email: 'carlos.silva@gmail.com',
      idade: 30
    },
    
  ]

  return (
    <>
     
      <div className='container'>
         
          <form>
             <h1>Olá React!</h1>
            <input type="text" name="name" placeholder='digite seu nome'/>
            <input type="email" name="email" placeholder='digite seu email' />
            <input type="number" name="idade" placeholder='digite sua idade'/>
            <button type='submit'>Cadastrar</button>
          </form>
            {users.map(user=>(<div className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p> Idade: <span>{user.idade}</span> <i className="fas fa-trash"></i></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
          </div>))}
          
      </div>
      
    </>
  )
}

export default Home
