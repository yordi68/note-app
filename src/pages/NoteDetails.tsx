import { useEffect } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../redux/notesSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


interface Note {
  id: number;
  image: string;
  title: string;
  text: string;
}

const NoteDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);


  const handleDelete = (note: Note) => {
    
    dispatch(
      deleteNote(note)
    )
    navigate("/notes", {replace: true})
  }

  const handleEdit = (note: Note) => {
    dispatch(
      updateNote(note)
    )
  }


  // Ask zeru for explanation
  const { id } = useParams();
  const note = notes.filter((note:Note) => {
    return note.id === Number(id);
  });


  return (
    note && (
      <>
      {/* <Navbar /> */}
      <div>
        <h3 className="text-3xl mt-10">{note[0].title}</h3>
        <div className="flex flex-col justify-center items-center ">
          <img
            className="w-full h-96 mt-5 mx-auto"
            src={note[0].image}
            alt=""
          />
          <p className="text-left">{note[0].text}</p>
          <div className="flex flex-row justify-between w-20 h-3items-center">
            <button
            onClick={() => handleDelete(note[0].id)}
            >
              <RiDeleteBin3Line size={20} />
            </button>
            <button
              onClick={() => {handleEdit(note[0])}}
            >
              <MdEditNote size={30} />
            </button>
          </div>
        </div>
      </div>
      </>
    )
  );
};

export default NoteDetails;
