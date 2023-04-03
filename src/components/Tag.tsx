import React,{FC} from 'react';
import { TagModel } from '../Interfaces/TagModel'
import { NoteModel } from '../Interfaces/NoteModel';

 const Tag:FC <{tagId: number}>  = ({tagId}) =>  {
  return (
    <div>
    {tagId}  
    </div>
  );
}

export default Tag;
