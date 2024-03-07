import React, { useState } from 'react';
import '../styles/cardCustom.css';
import Task from './Task';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

const CardCustom = () => {
  const [tarea, setTarea] = useState([]);
  const onKeyEnter = (e) => {
    console.log(e);
    // if (e.key == 'Enter') {
    //   if (e.target.value.trim().length !== 0) {
    //     let object;
    //     if (tarea.length == 0) {
    //       object = {
    //         id: 1,
    //         desc: e.target.value.trim(),
    //       };
    //     } else {
    //       object = {
    //         id: tarea[tarea.length - 1].id + 1,
    //         desc: e.target.value.trim(),
    //       };
    //     }
    //     setTarea([...tarea, object]);
    //   } else {
    //     alert('Ingrese una tarea.');
    //   }
    // }
  };
  let deleteElement = (id) => {
    let tareaAUX = [...tarea].filter((elm) => elm.id !== id);
    setTarea(tareaAUX);
  };
  return (
    <div className='principalContainer'>
      <div className='textContainer'>
        <h1>Bienvenido</h1>
        <p>
          Ingrese sus tareas pendientes. para cargar una tarea, ingrese el
          nombre de la tarea y presione enter
        </p>
      </div>
      <div className='formContainer'>
        <Form className='d-flex flex-column align-items-center'>
          <FormGroup className='w-100'>
            <FormControl
              type='text'
              placeholder='Nombre de la tarea'
              onKeyDown={onKeyEnter}
            />
          </FormGroup>
          <Button className='w-25 my-3' onClick={onKeyEnter}>
            Guardar tarea
          </Button>
        </Form>
      </div>
      <div className='taskContainer'>
        <h2>Lista de tareas pendientes</h2>
        <div>
          <ul>
            {tarea.map((element) => (
              <Task
                task={element}
                key={element.id}
                deleteElement={deleteElement}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <div className='d-flex justify-content-center align-items-center flex-column min-vh-100'>
    //   <h1>Bienvenido</h1>
    //   <div className='content p-5'>
    //     <div className='text-center'>
    //       <h1 className='fs-1'>Bienvenido</h1>
    //       <h3 className='fs-5'>Ingresa tus tareas</h3>
    //       <input type='text' placeholder='Tarea 1...' onKeyDown={onKeyEnter} />
    //     </div>
    //     <div>
    //       <ul>
    //         {tarea.map((element) => (
    //           <Task
    //             task={element}
    //             key={element.id}
    //             deleteElement={deleteElement}
    //           />
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardCustom;
