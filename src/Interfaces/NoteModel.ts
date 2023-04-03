import { TagModel } from "./TagModel";

export class NoteModel{
    id?: number;
    title?:string;
    text?: string;
    edit?: boolean;
    tag?: Array<TagModel>;
}
