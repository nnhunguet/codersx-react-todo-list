import React from 'react';
const todos = [
  'Go to market',
  'Buy food',
  'Make dinner'
];
const items = todos.map(function(todo) {
return <li>{todo}</li>
}) 
function TodoList() {
  return (
    <div className="todo-List">
        <ul>
          {items}
        </ul>
    </div>
  );
}

export default TodoList;