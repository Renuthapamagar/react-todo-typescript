import { ReactElement, useEffect, useRef, useState } from "react";
import { TodoFormEventType, TodoFormPropsType } from '../types';

function TodoForm(props: TodoFormPropsType): ReactElement<Element> {
    const [input, setInput] = useState<string>(props.edit ? props.edit.value : '');

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });

    const handleSubmit = (event: TodoFormEventType) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            isComplete: false,
        })
        setInput('');
    }

    return (
        <form>
            {
                props.edit ? (
                    <>
                        <input
                            placeholder=" Upadte your todo"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            name='Text'
                            className="todo-input edit"
                            ref={inputRef}
                        />
                        <button className="todo-button edit" onClick={handleSubmit}>Upadte Todo</button>
                    </>
                ) : (
                    <><input
                        placeholder=" Add a Todo"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        name='Text'
                        className="todo-input"
                        ref={inputRef}
                    />
                        <button className="todo-button" onClick={handleSubmit}> Add Todo</button></>
                )
            }

        </form>
    )
}
export default TodoForm