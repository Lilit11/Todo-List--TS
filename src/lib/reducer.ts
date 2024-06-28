import { ActionTypes, IAction, IState, IToDO } from "./types";

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {

        case ActionTypes.setTodos:
            return {
                ...state,
                todos: action.payload as IToDO[]
            }

        case ActionTypes.addTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload as IToDO]
            }

        case ActionTypes.updateTodo:

            const task: IToDO = action.payload as IToDO
            return {
                ...state,
                todos: state.todos.map(elm => elm.id == task.id ? task : elm)

            }

        case ActionTypes.removeTodo:
            const taskRem: IToDO = action.payload as IToDO

            return {
                ...state,
                todos: state.todos.filter(elm => elm.id != taskRem.id)
            }
        default:
            return state
    }
}