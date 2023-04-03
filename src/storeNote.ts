
import {createStore,createEvent, createApi , Json} from "effector";
import { NoteModel } from "./Interfaces/NoteModel"

// export const $addNote = createStore( [NoteModel] );

// export const createTag = createEvent("create Tag");


const addNote = createEvent()
const clearTodoList = createEvent()

const $todos = createStore([NoteModel])
.on(addNote, (list, todo) => [...list, todo])
  .reset(clearTodoList)

$todos.watch(todos => {
  console.log('todos', todos)
})



addNote({id: 1, title: titl,text: "",tag:[] } as NoteModel)

addNote('go to the gym')

clearTodoList()
