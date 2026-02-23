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
      name: 'Maria',
      email: 'maria.silva@gmail.com',
      idade: 25
    },
  ]

  return (
    <>
     
      <div className='container'>
          <h1>Olá React!</h1>
          <form>
            {users.map(user=>(
              
            ))}
            <input type="text" name="name" placeholder='digite seu nome'/>
            <input type="email" name="email" placeholder='digite seu email' />
            <input type="number" name="idade" placeholder='digite sua idade'/>
            <button type='submit'>Cadastrar</button>
          </form>

          <div>
            <div>
              <p>Nome: </p>
              <p> Idade: </p>
              <p>Email: </p>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default Home
