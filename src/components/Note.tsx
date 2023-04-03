import React,{FC} from 'react';
import { NoteModel } from '../Interfaces/NoteModel';
import  TagView  from '../components/TagView'
 
 const Note:FC <NoteModel>  = (note:NoteModel) =>  {

  return (
    <div>
    {note.title}
     {/* <TagView tag = {note.tag}/> */}
    </div>
  );
}

export default Note;
