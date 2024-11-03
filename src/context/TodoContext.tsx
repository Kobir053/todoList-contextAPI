import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { Todo } from "../types/todoModel";
  
interface TodoProviderProps {
    children: ReactNode;
}

interface ContextProps {
    todoList: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const TodoContext = createContext<ContextProps>({
    todoList: [],
    addTodo: (todo: Todo) => {},
    updateTodo: (index: number) => {},
    deleteTodo: (index: number) => {}
});

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {

    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [dataOnDb, setDataOnDb] = useState<Todo[]>([]);

    const addTodo = (todo: Todo) => {
        if(!todo || todo.name.length == 0){
            alert("illegal newTask");
            return;
        }
        setTodoList([...todoList, todo]);
    }

    const updateTodo = (index: number) => {
        const tempList = [...todoList];
        tempList[index].done = !tempList[index].done;
        setTodoList([...tempList]);
    }

    const deleteTodo = (index: number) => {
        const tempList = [...todoList];
        tempList.splice(index, 1);
        setTodoList([...tempList]);
    }

    const getDataFromLocalStorage = async(): Promise<Todo[] | null> => {
        const data: Todo[] | null = await JSON.parse(localStorage.getItem("todo") || "");
        return data;
      }
      
    async function updateVariableOfLocalStorage() {
        const data = await getDataFromLocalStorage();
        if(!data){
          return;
        }
        setDataOnDb([...data]);
        setTodoList([...data]);
    }
    
    useEffect(() => {
    
        updateVariableOfLocalStorage();
    
    }, []);
    
    useEffect(() => {

        if(todoList.length === 0 && dataOnDb.length === 0)
          return;
        localStorage.setItem("todo", JSON.stringify(todoList));
        setDataOnDb(todoList);
    
    }, [todoList]);

    return (
        <TodoContext.Provider value={{todoList, addTodo, updateTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
};

export const useGlobalTodo = () => {
    return useContext(TodoContext);
};

export { TodoContext, TodoProvider };