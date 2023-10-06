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
            onSave={({ id, title }) => onSave?.({ id, title })}
            onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
            onDelete={({ id }) => onDelete?.({ id })}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
