
import {createStore,createEvent} from "effector";
import {TagModel} from "./Interfaces/TagModel"

export const Tags = createStore( [TagModel] );

export const createTag = createEvent("create Tag");
