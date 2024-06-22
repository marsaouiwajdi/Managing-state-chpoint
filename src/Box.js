import React from 'react'

function Box(p) {
    console.log(p.data)
  return (
    
      <div class="card">
        <div class="card-body">
            <h5 class="card-title">To do list</h5>
            { p.data.map( f =>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={f.Iscompleted}/>
                <label class="form-check-label" for="flexSwitchCheckDefault">{f.nom}</label>
            </div>)}
         </div>
      </div>
    
  )
}

export default Box;

