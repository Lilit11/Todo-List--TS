import { IToDO } from "./types";
import axios from "axios";

export const getAll = async (): Promise<IToDO[]> => {
    const response = await axios.get("http://localhost:3004/todos")

    return response.data

}
type InputTodo = Omit<IToDO, 'id'>

export const add = async (obj: InputTodo): Promise<IToDO> => {
    const response = await axios.post("http://localhost:3004/todos", obj)
    return response.data
}


export const complete = async (id: string, obj: Partial<IToDO>): Promise<IToDO> => {

    const response = await axios.patch(`http://localhost:3004/todos/${id}`, obj)

    return response.data
}

export const deleteTodo = async (id: string): Promise<IToDO> => {
    const response = await axios.delete(`http://localhost:3004/todos/${id}`)

    return response.data
}