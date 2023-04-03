import React,{FC} from 'react';
import { TagModel } from '../Interfaces/TagModel'

 const TagFilter:FC <TagModel>  = ({name}) =>  {
  return (
    <div>
      TagFilter
    {name}  
    TagFilter
    </div>
  );
}

export default TagFilter;
