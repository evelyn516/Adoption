import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';

function Testauth() {
    const navigate = useNavigate()
    
    useEffect(()=>{
        (
          async () =>{
            if (!localStorage.getItem('jwt')){
              localStorage.clear()
                navigate('/login')
            } else{
              const token = localStorage.getItem('jwt')
              const response = await fetch('http://127.0.0.1:8000/api/auth/', {
                method : 'POST', 
                body: JSON.stringify({token:token}),
                headers: {'Content-Type': 'application/json'}
              })
              if(response.status === 500){
                  localStorage.clear()
                  navigate('/login')
              }
            }
          }
        )
        ()
      }, [])

  return (
    <>
    <Header/>

    <div>Testauth</div>
    </>
  )
}

export default Testauth