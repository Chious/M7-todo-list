import { getTodos, createTodo, patchTodo, deleteTodo } from 'api/todo';
import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const TodoPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const { isAuthenticated, currentMember } = useAuth();

  console.log(currentMember);

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleTodo = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };
  const handleKeyDown = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleDone = async (id) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    try {
      await patchTodo({
        id,
        isDone: !currentTodo.isDone,
      });
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }

        return { ...todo, isEdit: false };
      });
    });
  };

  const handleSave = async ({ id, title }) => {
    try {
      await patchTodo({
        id,
        title,
      });
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title, isEdit: false };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  //Count Remaining
  const countRemain = () => {
    const remainingTasks = todos.filter((todo) => !todo.isDone);
    return remainingTasks.length;
  };

  //Delete items from todo
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  //Get Data from API
  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (error) {
        console.error(error);
      }
    };
    getTodosAsync();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      TodoPage
      <Header currentMember={currentMember.name} />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleTodo}
        onKeyDone={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onChangeMode={handleChangeMode}
        onToggleDone={handleToggleDone}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer countRemain={countRemain} />
    </div>
  );
};

export default TodoPage;
