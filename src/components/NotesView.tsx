import React,{FC} from 'react';
import Note from './Note'; 
import { NoteModel } from '../Interfaces/NoteModel';

const ViewNotes:FC<{notes:NoteModel[]}> = ({notes}) => {

  return (    
    <div>
      ViewNotes
    {notes.map(i=> <Note/> )} 
    ViewNotes
    </div>
  );
}

export default ViewNotes;