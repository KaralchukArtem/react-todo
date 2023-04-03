import React,{FC} from 'react';
import Notes from './Note'; 
import { NoteModel } from '../Interfaces/NoteModel';

const CreateNote:FC<{note:NoteModel[]}> = (note) => {

  return (    
    <div>
      {note.note[0].id}
    </div>
  );
}

export default CreateNote;