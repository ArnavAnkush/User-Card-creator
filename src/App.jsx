import { useState } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'

const App = () => {

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || []
  })
 const [toggle, setToggle] = useState(true)
 const [updateData, setUpdateData] = useState(null)


  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id
    })
    setUsers(filterUser)
    localStorage.setItem("users", JSON.stringify(filterUser))
  }

  return (
    <div className='p-5 h-screen flex flex-col gap-14 bg-[#222] text-white'>
      <Navbar  setToggle = {setToggle}/>

      {toggle ? (
        <div className='flex flex-wrap gap-6'>
        {users.map((elem) => {
          return <Usercard setUpdateData = {setUpdateData} deleteUser={deleteUser} key = {elem.id} user = {elem} setToggle = {setToggle}/>
        })}
        </div>
        ): 
      (
        <div className='flex justify-center items-center h-[70%]'>
          <Form updateData = {updateData} users = {users} setUsers = {setUsers} setToggle = {setToggle}/>
        </div>
      )}
      
      
      
    </div>
  )
}

export default App
