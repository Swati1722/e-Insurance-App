import React, { useState } from 'react'
import "./Table.css"


const Table = ({data,isUpdateButton, updateFunc, isDeleteButton, deleteFunc ,isSchemeButton,SchemeFunc, isCalculateButton,CalculateFunc}) => {
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
        if(isCalculateButton)
        {
            keys.push('Calculate')
        }
        tableHeaderRow = keys.map(k => {
            if (k == "planId") {
              return <th scope="col">Plan Id</th>;
            }
            else if(k=="planName"){
                return <th scope="col">Plan Name</th>;
            }
            else if(k=="planDetails"){
              return <th scope="col">PlanDetails</th>;
          }
            else if(k=="Scheme"){
              return <th scope="col">Scheme</th>;
          }
          else if(k=="Active"){
                return <th scope="col">Active</th>;
            }
            else if(k=="active"){
                return null;
            }
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
                {isSchemeButton && ( 
                  <td>
                      <button   style={{ backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"1.7rem",}}
                       
                        onClick={(e)=>{  
                          e.preventDefault(); 
                          SchemeFunc(value, isSchemeButton)
                       }}  >Scheme</button>
                  </td>
                )}

                {isDeleteButton && (
                  <td>
                    <select 
                      onChange={(e) => updateActiveStatus(value, e.target.value)}
                      style={{ backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"1.7rem",}}
                       
                    >
                      <option onClick={()=>{deleteFunc(value ,"active")}}>Active</option>
                      <option  onClick={()=>{deleteFunc(value, "inactive")}}>Inactive</option>
                    </select>
                  </td>
                )}

                  {isCalculateButton && ( 
                  <td>
                      <button   style={{border: "6px",  background:"white" ,transition: "background-color 0.3s"}} 
                        onClick={(e)=>{  
                          e.preventDefault(); 
                          CalculateFunc(value)
                       }}  >Calculate</button>
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

