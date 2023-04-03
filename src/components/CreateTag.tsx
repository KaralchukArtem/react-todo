import React,{FC} from 'react';
import { NoteModel } from '../Interfaces/NoteModel';
import  TagView  from '../components/TagView'
 
 const CreateTag:FC <NoteModel>  = (text:NoteModel) =>  {

  return (
    <div>
      CreateTag
    {text.text}
    CreateTag  
    </div>
  );
}

export default CreateTag;
