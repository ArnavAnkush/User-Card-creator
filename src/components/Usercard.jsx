

const Usercard = ({user, setToggle, deleteUser, setUpdateData}) => {
  return (
    <div className='p-4  border border-white rounded-xl flex flex-col gap-6'>
        <div className='h-60 w-60'>
            <img className='object-cover h-full w-full' src={user.image} alt="" />
        </div>
        <div className='flex flex-col gap-1'>
            <h1 className='text-xl'>{user.name}</h1>
            <p className='text-md'>{user.email}</p>
            <p className='text-md'>{user.mobile}</p>
        </div>
        <div className='flex justify-between w-full'>
            <button onClick={() => {setUpdateData(user); setToggle(prev => !prev)}} className='bg-yellow-500 rounded-xl p-2 cursor-pointer'>Update</button>
            <button onClick={() => deleteUser(user.id) } className='bg-red-500 rounded-xl p-2 cursor-pointer'>Delete</button>
        </div>
    </div>
  )
}

export default Usercard