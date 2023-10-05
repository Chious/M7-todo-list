import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onToggleDone,
  onSave,
  onDelete,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggleDone={(id) => {
              onToggleDone?.(id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
