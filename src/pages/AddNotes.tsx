import { useState } from "react";
import Navbar from "../components/Navbar";
import { addNote } from "../redux/notesSlice";

interface Note{
  id: number;
  image: string;
  title: string;
  text: string;
}

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Images,  setImages] = useState<unknown>([])
  
  const handleSubmit = (title, Desc) => {
    
  }

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([...e.target.files as FileList])
  }

  return (
    <>
      {/* <Navbar /> */}
      <div>
        <h3 className="text-5xl mt-10">Add Your Notes Here!</h3>
        <div className="w-96 h-96 mx-auto mt-14 border-2">
          <input
            type="text"
            className="border-2 mt-2 rounded-md py-1"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <textarea
            className="border-2 rounded-md mt-2"
            name="notes"
            id=""
            cols={20}
            rows={10}
            placeholder="Add notes here..."
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          ></textarea>
          <input type="file" multiple accept="image/*" onChange={onImageChange} className="pb-4"/>
          <button className="border-2 block mx-auto px-4 rounded-md bg-[#6f6bfa] text-white border-none py-1 mb-4"
            // onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNotes;
