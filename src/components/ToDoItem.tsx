import { IToDO } from "../lib/types"
import { complete, deleteTodo } from "../lib/api"
import { ActionTypes } from "../lib/types"
import { useContext } from "react"
import { ToDoContext } from "../lib/context"

interface Props {
    todo: IToDO
}
export const ToDoItem: React.FC<Props> = ({ todo }) => {

    const context = useContext(ToDoContext)
    if (!context) {
        throw new Error("")
    }
    const { dispatch } = context
    const handleComplete = () => {

        complete(todo.id, { completed: !todo.completed })
            .then(res => {
                dispatch({ type: ActionTypes.updateTodo, payload: res })
            })
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
            .then(res => {
                dispatch({ type: ActionTypes.removeTodo, payload: res })
            })
    }
    return <div className={`item ${todo.completed ? 'completed' : ''} `}>
        <p>{todo.text}</p>
        <div>
            <button onClick={handleComplete}>done</button>
            <button onClick={handleDelete}>remove</button>
        </div>
    </div>
}