import React, { useState } from 'react';

const VsjLocalStorage = () => {

   const [task, setTask] = useState('');
   const [status, setStatus] = useState('');

   const handle = () => {
      localStorage.setItem('Task', task);
      localStorage.setItem('Status', status);
   };
   const remove = () => {
      localStorage.removeItem('Task');
      localStorage.removeItem('Status');
   };
   return (
      <div className="App">
         <h1>Task Name:</h1>
         <input
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
         />
         <h1>Status:</h1>
         <input
            
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Task') && (
            <div>
               Task: <p>{localStorage.getItem('Task')}</p>
            </div>
         )}
         {localStorage.getItem('Status') && (
            <div>
               Status: <p>{localStorage.getItem('Status')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default VsjLocalStorage;