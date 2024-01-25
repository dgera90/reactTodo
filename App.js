import { useState } from 'react';
import './App.css';

export default function App() {
  const [todo, setTodo] = useState()
  const [isDisabled, setIsDisabled] = useState(true)

  function addTodo() {
    setTodo(todo);
    let li = document.createElement('li');
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('btn');
    removeBtn.innerText = 'Delete';
    removeBtn.addEventListener('click', clicked);
    function clicked() {
      li.remove();
    }
    li.innerText = document.getElementById('input').value;
    li.classList.add('items');
    document.getElementById('list').append(li);
    li.append(removeBtn);
    document.getElementById('input').value = '';
    setIsDisabled(true)

  }

  function enableAddButton() {
    if (document.getElementById('input').value) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  return <>
  <h1>Todo List</h1>
  <div className='inputDiv'>
    <input
      id='input'
      type='text'
      placeholder='What to do?'
      value={todo}
      onChange={enableAddButton}
    ></input>
    </div>
    <div className='addBtnDiv'>
    <button id='addBtn' onClick={addTodo} disabled={isDisabled}>Add</button>
    </div>
    <div className='listDiv'>
    <ol id='list'>
    </ol>
    </div>
  </>
}