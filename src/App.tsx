import './App.css';
import Navbar from './components/Navbar';
// import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddNotes from './pages/AddNotes';
import Logout from './pages/Logout';
import Notes from './pages/Notes';
import NoteDetails from './pages/NoteDetails';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  return (
    <>
    {/* <Navbar />
    <Outlet /> */}




  
{/* why is this method of defining routes is not feasible?     */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addnotes" element={<AddNotes />}/>
          <Route path="/notes/:id" element={<NoteDetails  />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/logout" element={<Logout />}/>
        </Routes>
      </Router>
    

    </>
  )
}

export default App
