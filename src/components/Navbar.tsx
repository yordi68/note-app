import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between'>
        <Link to="/" className='text-xl'>Logo</Link>
        <div className='flex flex-row justify-between w-1/4'>
            <Link to="/">Home</Link>
            <Link to="/addnotes">AddNotes</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/logout">Logout</Link>
        </div>
      
    </div>
  )
}

export default Navbar
