import Home from "../pages/Home";
import AddNotes from "../pages/AddNotes";
import Logout from "../pages/Logout";
import Notes from "../pages/Notes";
import NoteDetails from "../pages/NoteDetails";


const route = [
    {
        path: '/',
        element: <Home />
    },
    {
        path:'/addnotes',
        element: <AddNotes />
    },
    {
        path: '/notes/:id',
        element: <NoteDetails />
    },
    {
        path: '/notes',
        element: <Notes />
    },
    {
        path: '/logout',
        element: <Logout />
    }
];

export default route