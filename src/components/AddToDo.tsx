import { useContext, useState } from "react"
import { add } from "../lib/api"
import { ActionTypes } from "../lib/types"
import { ToDoContext } from "../lib/context"

export const AddToDo: React.FC = () => {

    const [text, setText] = useState<string>("")
    const context = useContext(ToDoContext)
    if (!context) {
        throw new Error("")
    }
    const { dispatch } = context
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        add({ text, completed: false })
            .then(res => {
                dispatch({ type: ActionTypes.addTodo, payload: res })
                setText("")
            })


    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button>save</button>
        </form>
    </div>
}