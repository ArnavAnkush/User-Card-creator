
const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 rounded-xl flex items justify-between bg-black'>
        <div>
            <img width={50} className='rounded-full' src="https://imgs.search.brave.com/uamLcgmTNHQSGcKHG-dNIQflXgtBJGP9hFo3IJ633dg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzE3Ny8zMTc3/NDY1LnBuZw" alt="" />
        </div>
        <div className='flex items-center gap-19 font-semibold text-white'>
            <p className='cursor-pointer'>Home</p>
            <p className='cursor-pointer'>About</p>
            <p className='cursor-pointer'>Contact</p>
        </div>
        <button onClick={()=> setToggle(prev=> !prev)} className='p-2 bg-blue-700 text-white cursor-pointer rounded-xl '>Create User</button>
    </div>
  )
}

export default Navbar