import { IState } from "./types";
import { Filters } from "./types";

export const initialState: IState = {
    todos: [],
    currentFilter: Filters.all
}