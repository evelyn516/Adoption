import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';
import Modal from '../../modal/HomeAuth';

function Testauth() {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const [list, setList] = useState([])
    
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
      }, []);

      useEffect(()=>{
        (
          async () =>{
            let username = localStorage.getItem('username')
            const response = await fetch(`http://127.0.0.1:8000/posts/${username}/`)
            const content = await response.json()
            console.log(content)
            setList(content)
            console.log(list)
          }
        )
        ()
      }, [])
      console.log(list)
    const renderRows = () => {
      list.map( obj => 
        <>
        <h2>{obj.name}</h2>
        </>
      )
    }
    
    const handleButton = (e) => {
      e.preventDefault()
      setModal(prevState => !prevState)
    };

    

  return (
    <>
    <Header/>
    <button onClick={handleButton} >Add An Animal</button>
    <div>Testauth</div>
    <div style={{position: 'fixed'}} ><Modal toggle={modal}/></div>
    <div>
      {renderRows()}
    </div>
    </>
  )
}

export default Testauth