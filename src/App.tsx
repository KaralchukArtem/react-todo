import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import './App.css';
import ViewNotes from './components/NotesView';
import {NoteModel} from './Interfaces/NoteModel'
import TagFilter from './components/TagFilter';
import TagView from './components/TagView';
import CreateNote from './components/CreateNote';
import { TagModel } from './Interfaces/TagModel';
import { $todos, addTodo, clearTodoList } from './storeNote';






function App() {
  const [titl,setTitle] = useState<string>();
  
  const notes:NoteModel[] = [
    {id: 1, title: titl,text: "",tag:[] } as NoteModel,
  ];

  const ChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setTitle(event.target.value)
  }
  
  const mouseEvent: MouseEventHandler = (event:React.MouseEvent<HTMLInputElement>) =>{
    console.log(titl)
    console.log(notes)
  }


//////////////////////////////////////////////////////////////////////////////////


  $todos.watch(todos => {
    console.log('todos', todos)
  })

  // const f:NoteModel = {id: 1, title: 'titl',text: "",tag:[] } as NoteModel

  const obj = $todos.map(() =>{ return {id: 1, title: 'titl',text: "",tag:[] }})

  // addTodo(f)
  // => todos ['go shopping']
  
  // addTodo('go to the gym')
  // => todos ['go shopping', 'go to the gym']
  
  clearTodoList()



//////////////////////////////////////////////////////////////////////////////////

  return (
    <div> 
      <div>
        <input value={titl}  onChange={ChangeHandler}  type="text" />
        <input onClick={mouseEvent} type='button'  />  
        <br />
        <br />
      </div> 
      <CreateNote note = {notes} />
      <TagFilter />
      <ViewNotes notes = {notes}/>
      <TagView tagview={notes}/>
    </div>
  );
}

export default App;

// import React, { FormEvent, useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';



// interface Task {
//   id: string;
//   text: string;
//   iscompleted: boolean;
//   tags: string[];
// }

// interface TaskProps {
//   task: Task;
//   onToggle: (id: string) => void;
//   onDelete: (id: string) => void;
//   onAddTag: (id: string, tag: string) => void;
// }

// interface TaskProps {
//   task: Task;
//   onToggle: (id: string) => void;
//   onDelete: (id: string) => void;
//   onAddTag: (id: string, tag: string) => void;
// }

// export const TaskItem: React.FC<TaskProps> = ({ task, onToggle, onDelete, onAddTag }) => {
//   const [newTag, setNewTag] = useState<string>('');

//   const handleToggle = () => {
//     onToggle(task.id);
//   };

//   const handleDelete = () => {
//     onDelete(task.id);
//   };

//   const handleAddTag = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onAddTag(task.id, newTag);
//     setNewTag('');
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewTag(event.target.value);
//   };

//   return (
//     <li>
//       <input type="checkbox" checked={task.iscompleted} onChange={handleToggle} />
//       <span>{task.text}</span>
//       <ul>
//         {task.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleAddTag}>
//         <label>
//           Add tag:
//           <input type="text" value={newTag} onChange={handleChange} />
//         </label>
//         <button type="submit">Add</button>
//       </form>
//       <button onClick={handleDelete}>Delete</button>
//     </li>
//   );
// };


// export const App: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [text, setText] = useState<string>('');

//   useEffect(() => {
//   const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//   setTasks(savedTasks);
// }, []);


//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setText(event.target.value);
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   if (text.trim() !== "") {
//     const newTask:Task = { id: uuidv4(), text: text.trim(), iscompleted: false, tags: [] };
//     setTasks([...tasks, newTask]);
//     setText("");
//     localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
//   }
// };


//   const handleDelete = (id: string) => {
//   const newTasks = tasks.filter((task) => task.id !== id);
//   setTasks(newTasks);
//   localStorage.setItem("tasks", JSON.stringify(newTasks));
// };

// const handleAddTag = (id: string, tag: string) => {
//   const newTasks = tasks.map((task) => {
//     if (task.id === id) {
//       return {
//         ...task,
//         tags: [...task.tags, tag],
//       };
//     } else {
//       return task;
//     }
//   });
//   setTasks(newTasks);
//   localStorage.setItem("tasks", JSON.stringify(newTasks));
// };

//   const handleToggle = (id: string) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === id) {
//         return { ...task, iscompleted: !task.iscompleted };
//       } else {
//         return task;
//       }
//     });
//     setTasks(updatedTasks);
//   };

// return (
// <div>
// <h1>To-Do List</h1>
// <form onSubmit={handleSubmit}>
// <label>
// New task:
// <input type="text" value={text} onChange={handleChange} />
// </label>
// <button type="submit">Add</button>
// </form>
// <ul>
// {tasks.map((task) => (
// <TaskItem
//          key={task.id}
//          task={task}
//          onToggle={handleToggle}
//          onDelete={handleDelete}
//          onAddTag={handleAddTag}
//        />
// ))}
// </ul>
// </div>
// );
// };


// export default App;