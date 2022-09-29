import { ReactElement, useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { TodoInterface } from '../interfaces';
import { TodoFormType, TodoType } from '../types';
import TodoForm from './todoForm';

function Todo(props: TodoFormType): ReactElement<Element> {
    const { todos, completeTodo, removeTodo, updateTodo } = props;
    const [edit, setEdit] = useState<TodoInterface>({
        id: undefined,
        value: ''
    });

    const submitUpdate = (value: TodoType) => {
        if (edit.id) {
            updateTodo(edit.id, value);
            setEdit({
                id: undefined,
                value: ''
            });
        }
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <>
            {
                todos.map((item, index) => (
                    <div className={item.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                        <div key={item.id} onClick={() => completeTodo(item.id)}>{item.text}</div>
                        <div className="=icons">
                            <RiCloseCircleLine className='delete-icon' onClick={() => removeTodo(item.id)} />
                            <TiEdit className='edit-icon' onClick={() => setEdit({ id: item.id, value: item.text })} />

                        </div>
                    </div>

                ))
            }

        </>
    )
}
export default Todo;