import React, { useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown';


const Table = ({data,isUpdateButton, updateFunc, isDeleteButton, deleteFunc ,isSchemeButton,SchemeFunc, updateStatusActive,updateStatusInActive}) => {
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
        
        if(isSchemeButton)
        {
            console.log("inside update-->" +isUpdateButton)
            keys.push('Scheme')
        }
        if(isDeleteButton)
        {
            keys.push('Active')
        }
        
        tableHeaderRow = keys.map(k => {
            if (k == "firstname") {
                return <th scope="col">FirstName</th>;
              }
              else if(k=="lastname"){
                  return <th scope="col">Last Name</th>;
              }
              else if(k=="username"){
                  return <th scope="col">User Name</th>;
              }
              else if(k=="emailId"){
                  return <th scope="col">Email Id</th>;
              }
              else if(k=="salary"){
                return <th scope="col">Salary</th>;
            }
              else if(k=="mobileNumber"){
                return <th scope="col">Mobile Number</th>;
            }
            else if(k=="dateOfBirth"){
                return <th scope="col">Date Of Birth</th>;
            } 
            else if(k=="Active"){
                return <th scope="col">Active</th>;
            }
            else if(k=="active"){
              return <th scope="col">IsActive</th>;
          
              }
          });
        
       
        rowsOfUsers = data.content.map((value) => {
          const { active, dateOfBirth, ...otherFields } = value;
         
            return (
              <tr>
                {Object.values(otherFields).map((i) => (
                  <td>{i !== null ? i.toString() : 'N/A'}</td>
                ))}
              <td>{dateOfBirth ? dateOfBirth.split('T')[0] : 'N/A'}</td>
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
                      <button   style={{border: "6px",  background:"white" ,transition: "background-color 0.3s"}} 
                        onClick={(e)=>{  
                          e.preventDefault(); 
                          SchemeFunc(value, isSchemeButton)
                       }}  >Scheme</button>
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
        <table className="table table-striped " style={{"paddingLeft" :"1rem", "marginRight":"1rem"}}>
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

