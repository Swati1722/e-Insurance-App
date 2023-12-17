import React, { useState } from 'react'
import "./Table.css"

import Dropdown from 'react-bootstrap/Dropdown';


const Table = ({data,isUpdateButton, updateFunc, isDeleteButton,isSchemeButton,SchemeFunc,updateStatusActive,updateStatusInActive}) => {
   const[isActive,setIsActive]= useState(true)

   const updateActiveStatus = (value, newStatus) => {
    console.log(`Updating active status of item ${value} to ${newStatus}`);

    setIsActive(newStatus === 'true'); // Convert string to boolean
  };
    let rowsOfUsers =<></>
    let tableHeaderRow = <></>
    let keys =[]
    if(data && data.content && data.content.length !== 0)
    {
        keys =Object.keys(data.content[0])
       
        
        if(isSchemeButton)
        {
          
            keys.push('Scheme')
        }
        if(isDeleteButton)
        {
            keys.push('Active')
        }
       
        tableHeaderRow = keys.map(k => {
            if (k == "planId") {
              return <th scope="col">Plan Id</th>;
            }
            else if(k=="planName"){
                return <th scope="col">Plan Name</th>;
            }
            else if(k=="Active"){
                return <th scope="col">Active</th>;
            }
            else if(k=="Scheme"){
                return <th scope="col">Scheme</th>;
            }
            else if(k=="planDetails"){
                return <th scope="col">PlanDetails</th>;
            }
           
            else if(k=="active"){
                return <th scope="col">IsActive</th>;
          
            }
          });
       
        rowsOfUsers = data.content.map((value) => {
            const { active, ...otherFields } = value;
          
            return (
              <tr>
                {Object.values(otherFields).map((i) => (
                  <td>{i !== null ? i.toString() : 'N/A'}</td>
                ))}
                <td>{value.active ? 'Active' : 'Inactive'}</td>
          
          
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
                {isSchemeButton && ( 
                  <td>
                      <button  
                        onClick={(e)=>{  
                          e.preventDefault(); 
                          SchemeFunc(value)
                       }} 
                       style={{ backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"2rem",border:'none'}}
                       >Scheme</button>
                  </td>
                )}

                {isDeleteButton && (
                  <td>
                  <Dropdown>
                   <Dropdown.Toggle variant="success" id="dropdown-basic"  style={{ width:"5rem", backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"2rem", borderRadius:"0", alignItems:'center',paddingBottom:'20px'}}>
                     Active
                   </Dropdown.Toggle>
 
                   <Dropdown.Menu > 
                       <Dropdown.Item  onClick={()=>{updateStatusActive(value )}}>Active</Dropdown.Item>
                       <Dropdown.Item onClick={()=>{updateStatusInActive(value)}}>InActive</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
                
               </td>
                )}

                 
              </tr>
            );
          });
    }

    return (
    <>
        <table className="table table-striped custome-table">
            <thead className="table-header">
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

