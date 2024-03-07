import React, { useState } from 'react';
import '../styles/cardCustom.css';
import Task from './Task';

const CardCustom = () => {
  const [tarea, setTarea] = useState([]);
  const onKeyEnter = (e) => {
    if (e.key == 'Enter') {
      if (e.target.value.trim().length !== 0) {
        let object;
        if (tarea.length == 0) {
          object = {
            id: 1,
            desc: e.target.value.trim(),
          };
        } else {
          object = {
            id: tarea[tarea.length - 1].id + 1,
            desc: e.target.value.trim(),
          };
        }
        setTarea([...tarea, object]);
      } else {
        alert('Ingrese una tarea.');
      }
    }
  };
  let deleteElement = (id) => {
    let tareaAUX = [...tarea].filter((elm) => elm.id !== id);
    setTarea(tareaAUX);
  };
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='content p-5'>
        <div className='text-center'>
          <h1 className='fs-1'>Bienvenido</h1>
          <h3 className='fs-5'>Ingresa tus tareas</h3>
          <input type='text' placeholder='Tarea 1...' onKeyDown={onKeyEnter} />
        </div>
        <div>
          <ul>
            {tarea.map((element) => (
              <Task task={element} key={element.id} deleteElement={deleteElement}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardCustom;
