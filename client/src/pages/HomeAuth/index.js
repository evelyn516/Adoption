import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';
import Modal from '../../modal/HomeAuth';
import "./style.css";

function Testauth({api}) {
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
              const response = await fetch(`${api}api/auth/`, {
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
            const response = await fetch(`${api}posts/${username}/`)
            const content = await response.json()
            console.log(content)
            setList(content)
            console.log(list)
          }
        )
        ()
      }, [])
      console.log(list)


    const renderRows = () => 
      list.map( obj =>  // image, age, desc, id, delete, edit
        <div className='OrgPosts'>
          <h2>{obj.name}</h2>
          <img className='OrgPostImg' src={obj.image} alt={`${obj.q1} called ${obj.name}`}/>
          <p>Age: {obj.age}</p>
          <p>{obj.description}</p>
          <span> <button>Edit</button> <button>Delete</button> </span>
        </div>
      )
    
    
    const handleButton = (e) => {
      e.preventDefault()
      setModal(prevState => !prevState)
    };

    

  return (
    <>
    <Header/>

    <h1 id='OrgHeader' >Welcome to the Adopter Organisation Page!</h1>
    <button onClick={handleButton} >{modal ? 'Close Tab' : 'Add An Animal'}</button>
    <div><Modal api={api} toggle={modal} setModal={setModal}/></div>
    <div>
      {renderRows()}
    </div>
    </>
  )
}

export default Testauth
