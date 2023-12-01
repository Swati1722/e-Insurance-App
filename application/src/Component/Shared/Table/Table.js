 import React, { useState } from 'react'


const Table = ({data,isUpdateButton, updateFunc, isDeleteButton, deleteFunc}) => {
   const[isActive,setIsActive]= useState(true)

   const updateActiveStatus = (value, newStatus) => {
    console.log(`Updating active status of item ${value} to ${newStatus}`);

    setIsActive(newStatus === 'true'); // Convert string to boolean
  };
    let rowsOfUsers =<></>
    let tableHeaderRow = <></>
    let keys =[]
    console.log(data)
    if(data && data.content && data.content.length !== 0)
    {
        keys =Object.keys(data.content[0])
        console.log("Keys:",keys)
        
        if(isUpdateButton)
        {
            console.log("inside update-->" +isUpdateButton)
            keys.push('Update')
        }
        if(isDeleteButton)
        {
            keys.push('Active')
        }
        
        // tableHeaderRow = keys.map(k=>{
        //     return(
                
        //             <th scope="col">{k}</th>
               
        //     )
        // })
       
        tableHeaderRow = keys.map(k => {
            if (k !== "active") {
              return <th scope="col">{k}</th>;
            }
            else{
            return null; 
            }// or any fallback value if you don't want to render anything in case of "active"
          });
        
       
        rowsOfUsers = data.content.map((value) => {
            const { active, ...otherFields } = value;
          
            return (
              <tr>
                {Object.values(otherFields).map((i) => (
                  <td>{i !== null ? i.toString() : 'N/A'}</td>
                ))}
          
                {isUpdateButton && (
                  <td>
                    <button
                      onClick={() => {
                        updateFunc(value);
                      }}
                      style={{border: "none" }}
                    >
                      Update
                    </button>
                  </td>
                )}
          
                {isDeleteButton && (
                  <td>
                    <select 
                      onChange={(e) => updateActiveStatus(value, e.target.value)}
                      style={{border: "1px" }}
                    >
                      <option onClick={()=>{deleteFunc(value ,"active")}}>Active</option>
                      <option  onClick={()=>{deleteFunc(value, "inactive")}}>Inactive</option>
                    </select>
                  </td>
                )}
              </tr>
            );
          });
    }

    return (
    <>
        <table className="table table-striped " style={{"paddingLeft" :"1rem",
    "marginRight":"1rem"}}>
            <thead>
                <tr>
                {tableHeaderRow}
                </tr>
                
            </thead>
            <tbody>
                {rowsOfUsers}
            </tbody>

        </table>
        
    </>
  )
}

export default Table
