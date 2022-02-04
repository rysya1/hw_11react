import { useState } from "react"
import './AddList.css'
function AddList(props){
  
    const removeTask = (event) => {
       const remove =  props.users.filter((user) => user.id !== event.target.id)
       props.removeTask(remove)
      } 
     
    
    const checkboxHandler = (event) => {
        const checked =  props.users.map((el) => {
            if (el.id === event.target.id) {
                el.completed = !el.completed
            }
            return el
        })
        props.onChecked(checked)
    }

    
    return(
        <div >
            {props.users.map((user) => (
                <div key={user.id} className="map">
                    <div key={user.id} className="addlist">
                        <div id={user.id} user={user} className={`${user.completed ? 'checkbox' : 'task'}`}>
                            <span className="span">{user.title} {user.date}</span>
                        </div>
                        <div>
                            <input type="checkbox" id={user.id} checked={user.completed}
                            onChange={checkboxHandler}/>
                        <button className="delete" onClick={removeTask}  id={user.id}>delete</button>
                        </div>
                        
                    </div>
                    </div>
                ))}
        </div>
    )
}
export default AddList