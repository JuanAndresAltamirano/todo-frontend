import { Task } from "./Task";

export interface Folder {
    id?: number;
    name: string;
    tasks?: Task[];
}