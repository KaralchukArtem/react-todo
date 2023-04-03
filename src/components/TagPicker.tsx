import React,{FC} from 'react';
import { NoteModel } from '../Interfaces/NoteModel';
import  TagView  from '../components/TagView'
 
 const TagPicker:FC <NoteModel>  = (text) =>  {

  return (
    <div>
    {text.text}  
     {/* <TagView tag = {note.tag}/> */}
    </div>
  );
}

export default TagPicker;
