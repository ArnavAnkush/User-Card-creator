import { useState } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'

const App = () => {

  const [users, setUsers] = useState([])
 const [toggle, setToggle] = useState(false)

  return (
    <div className='p-5 h-screen flex flex-col gap-14 bg-[#222] text-white'>
      <Navbar  setToggle = {setToggle}/>

      {toggle ? (
        <div className='flex gap-6'>
        {users.map((elem) => {
          return <Usercard user = {elem} setToggle = {setToggle}/>
        })}
        </div>
        ): 
      (
        <div className='flex justify-center items-center h-[70%]'>
          <Form setUsers = {setUsers} setToggle = {setToggle}/>
        </div>
      )}
      
      
      
    </div>
  )
}

export default App
