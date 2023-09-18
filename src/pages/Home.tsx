
import Teamsvg from '../assets/undraw_team_chat_re_vbq1.svg'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className='flex flex-row justify-between mt-24'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl '>Create your notes here</h1>
            <p className='mt-4 opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sint?</p>
            <button className='border-none p-2 rounded-3xl px-4 mt-4 bg-[#6f6bfa] text-white'>Sign up</button>
        </div>

        <div>
            <img src={Teamsvg} className='max-w-lg h-full' alt="" />
        </div>
      
    </div>
    </>
  )
}

export default Home
