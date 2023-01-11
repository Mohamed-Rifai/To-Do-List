import './App.css'
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [filter, setFilter] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
     
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="d-flex justify-content-between" >

        <div onClick={() => setFilter("all")} className="buttons">All list</div>
        <div onClick={() => setFilter("pending")} className="buttons">Pending</div>
        <div onClick={() => setFilter("completed")} className="buttons">Completed</div>
          
      </div>
      <div className="todos">
        {

          toDos.map((obj, index) => {

            if (obj.text === "") {
              return null;
            } else {
              if (filter === "" || filter === "all") {
                return (
                  <div key={index} className="todo">
                    <div className="left">
                      <input
                        onChange={(e) => {
                          console.log(e.target.checked);
                          console.log(obj);
                          setToDos(toDos.filter(obj2 => {

                            if (obj2.id === obj.id) {
                              obj2.status = e.target.checked

                            }
                            return obj2;
                          }))
                        }}
                        value={obj.status} type="checkbox" name="" id="" checked={obj.status} />
                      <p>{obj.status === true ? <s>{obj.text}</s> : obj.text}</p>

                    </div>
                    <div className="right">
                      <i
                        onClick={() => {
                          return setToDos(
                            toDos.filter((obj3) => obj3.id !== obj.id)
                          );
                        }}
                        className="fas fa-times"></i>
                    </div>
                  </div>
                )
              }else if (filter === "completed" || filter === 'pending'){
                const status = filter === 'completed' ? true : false;
                if (obj.status === status){
                  return (
                    <div key={index} className="todo">
                      <div className="left">
                        <input
                          onChange={(e) => {
                            console.log(e.target.checked);
                            console.log(obj);
                            setToDos(toDos.filter(obj2 => {
  
                              if (obj2.id === obj.id) {
                                obj2.status = e.target.checked
  
                              }
                              return obj2;
                            }))
                          }}
                          value={obj.status} type="checkbox" name="" id="" checked={obj.status}/>
                        <p>{obj.status === true ? <s>{obj.text}</s> : obj.text}</p>
  
                      </div>
                      <div className="right">
                        <i
                          onClick={() => {
                            return setToDos(
                              toDos.filter((obj3) => obj3.id !== obj.id)
                            );
                          }}
                          className="fas fa-times"></i>
                      </div>
                    </div>
                  )
                }
              }return null;
            }



          })
        }


      </div>
    </div>
  );
}

export default App;




