import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosStuff = () => {
  const [todo, setTodo] = useState([]);
  const SERVER = 'https://jsonplaceholder.typicode.com/todos/';
  useEffect(() => {
    axios.get(SERVER).then(res =>setTodo(res.data))})
    
  return (
    <div>
      length-{todo.length}
      
      {todo.map(todo => <div key={todo.id}> <p>title-{todo.title}</p><p>user-{todo.userId}</p></div>)}

    </div>
  );
};

export default AxiosStuff;
