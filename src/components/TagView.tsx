import React,{FC} from 'react';
import { TagModel } from '../Interfaces/TagModel';
import Tag from './Tag';
import CreateTag from './CreateTag';
import { NoteModel } from '../Interfaces/NoteModel';

 const TagView:FC <{tagview:NoteModel[]}>  = ({tagview}) =>  {

  return (
    <div>
      TagView
        {tagview.map(i => <Tag tagId = {i.id as number} />)}
        {/* <TagPicker/> */}
        <CreateTag />
        TagView
    </div>
  );
}

export default TagView;
