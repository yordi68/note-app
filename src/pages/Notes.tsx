import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotesState, fetchBlogs } from "../redux/notesSlice";
// import {setNotes} from '../features/notesSlice'
import Navbar from "../components/Navbar";

interface Note {
  id: number;
  image: string;
  title: string;
  text: string;
}

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: {notes: NotesState}) => state.notes.notes)

  // useEffect(() => {
  //   async function fetchNotes() {
  //     try {
  //       const response = await axios.get<Note[]>(
  //         "http://localhost:5000/allNotes"
  //       );
  //       const data = response.data
        
  //       dispatch(setNotes(data))

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchNotes();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBlogs())
  })

    const navigate = useNavigate();

    const handleClick = (id: number) => {
      navigate(`/notes/${id}`);
    };

  return (
    <>
    {/* <Navbar /> */}
    <div>
      <h3 className='text-5xl mt-10'>Your Notes</h3>

        <div className='grid grid-cols-4 gap-x-3 gap-y-5 mt-4'>
            {notes?.map((note:Note) => (
              <div key={note.id}>

                        <div key={note.id} className='flex flex-col shadow-xl' onClick={() => {handleClick(note.id)}}>
                          <img  className="w-full h-3/5 aspect-video" src={`../src/assets/img${note.id}.png`} alt="" />
                            <div className="flex flex-row items-center  px-2 h-2/5">
                                <img src={`../src/assets/img${note.id}.png`} alt="" className='aspect-square w-14 rounded-full' />
                                <p className='p-5 '>{note.title}</p>
                            </div>
                        </div>
                    </div>

            ))}

        </div>

    </div>
    </>
  );
};

export default Notes;
