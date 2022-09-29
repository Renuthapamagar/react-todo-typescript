export type TodoType = {
    id: number;
    text: string;
    isComplete?: boolean;
}

export type TodoFormPropsType = {
    edit?: {value: string;}; 
    onSubmit: ({id, text, isComplete}: TodoType) => void;
}

export type TodoFormEventType = {
    preventDefault: () => void;
} 

export type TodoFormType = {
    todos: TodoType[];
    completeTodo: (id: number) => void;
    removeTodo: (id: number) => void; 
    updateTodo: (id: number, newValue: TodoType) => void;
}