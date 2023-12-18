// import React, { useState } from 'react'


// const Table = ({data,isUpdateButton, updateFunc, isDeleteButton, deleteFunc ,isSchemeButton,SchemeFunc, isCalculateButton,CalculateFunc}) => {
//    const[isActive,setIsActive]= useState(true)
  

//    const updateActiveStatus = (value, newStatus) => {
//     console.log(`Updating active status of item ${value} to ${newStatus}`);

//     setIsActive(newStatus === 'true'); // Convert string to boolean
//   };
//     let rowsOfUsers =<></>
//     let tableHeaderRow = <></>
//     let keys =[]
//     console.log(data)
//     if(data && data.content && data.content.length !== 0)
//     {
//         keys =Object.keys(data.content[0])
//         console.log("Keys:",keys)
        
//         if(isSchemeButton)
//         {
//             console.log("inside update-->" +isUpdateButton)
//             keys.push('Scheme')
//         }
//         if(isDeleteButton)
//         {
//             keys.push('Active')
//         }
//         if(isCalculateButton)
//         {
//             keys.push('Calculate')
//         }
//         tableHeaderRow = keys.map(k => {
//             if (k == "firstname") {
//                 return <th scope="col">FirstName</th>;
//               }
//               else if(k=="lastname"){
//                   return <th scope="col">Last Name</th>;
//               }
//               else if(k=="username"){
//                   return <th scope="col">User Name</th>;
//               }
//               else if(k=="emailId"){
//                   return <th scope="col">Email Id</th>;
//               }
//               else if(k=="mobileNumber"){
//                 return <th scope="col">Mobile Number</th>;
//             }
//             else if(k=="dateOfBirth"){
//                 return <th scope="col">Date Of Birth</th>;
//             } 
//             else if(k=="totalCommission"){
//                 return <th scope="col">Total Commission</th>;
//             } 
//             else if(k=="Active"){
//                 return <th scope="col">Active</th>;
//             }
//             else if(k=="active"){
//                   return null;
//               }
//           });
        
       
//         rowsOfUsers = data.content.map((value) => {
//           const { active, dateOfBirth, ...otherFields } = value;
          
//             return (
//               <tr>
//                 {Object.values(otherFields).map((i) => (
//                   <td>{i !== null ? i.toString() : 'N/A'}</td>
//                 ))}
//                 <td>{dateOfBirth ? dateOfBirth.split('T')[0] : 'N/A'}</td>
          
//                 {isUpdateButton && (
//                   <td>
//                     <button
//                       onClick={() => {
//                         updateFunc(value);
//                       }}
//                       style={{border: "none" }}
//                     >
//                       Update
//                     </button>
//                   </td>
//                 )}
//                 {isSchemeButton && ( 
//                   <td>
//                       <button   style={{border: "6px",  background:"white" ,transition: "background-color 0.3s"}} 
//                         onClick={(e)=>{  
//                           e.preventDefault(); 
//                           SchemeFunc(value, isSchemeButton)
//                        }}  >Scheme</button>
//                   </td>
//                 )}

//                 {isDeleteButton && (
//                   <td>
//                     <select 
//                       onChange={(e) => updateActiveStatus(value, e.target.value)}
//                       style={{ backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"1.7rem",}}
                  
//                     >
//                       <option onClick={()=>{deleteFunc(value ,"active")}}>Active</option>
//                       <option  onClick={()=>{deleteFunc(value, "inactive")}}>Inactive</option>
//                     </select>
//                   </td>
//                 )}

//                   {isCalculateButton && ( 
//                   <td>
//                       <button   style={{border: "6px",  background:"white" ,transition: "background-color 0.3s"}} 
//                         onClick={(e)=>{  
//                           e.preventDefault(); 
//                           CalculateFunc(value)
//                        }}  >Calculate</button>
//                   </td>
//                 )}
//               </tr>
//             );
//           });
//     }

//     return (
//     <>
//         <table className="table table-striped " style={{"paddingLeft" :"1rem", "marginRight":"1rem"}}>
//             <thead>
//                 <tr>
//                 {tableHeaderRow}
//                 </tr>
                
//             </thead>
//             <tbody>
//                 {rowsOfUsers}
//             </tbody>

//         </table>
        
//     </>
//   )
// }

// export default Table

import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({data,isUpdateButton, updateFunc, isDeleteButton, deleteFunc ,isSchemeButton,SchemeFunc, isCalculateButton,CalculateFunc}) => {
   const[isActive,setIsActive]= useState(true)
   const[searchTerm, setSearchTerm] = useState('');
   const[filteredData, setFilteredData] = useState([]);
  
   const handleSearch = () => {
    const filtered = data.content.filter((item) => {
      const values = Object.values(item).map((i) =>
        i !== null ? i.toString().toLowerCase() : ''
      );
      return values.some((val) => val.includes(searchTerm.toLowerCase()));
    });

    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilteredData([]);
    setSearchTerm('');
  };
  const updateActiveStatus = (value, newStatus) => {
        console.log(`Updating active status of item ${value} to ${newStatus}`);
        toast.success('Updated status successfully ');
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
        if(isCalculateButton)
        {
            keys.push('Calculate')
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
              else if(k=="mobileNumber"){
                return <th scope="col">Mobile Number</th>;
            }
           
            else if(k=="dateOfBirth"){
                return <th scope="col">Date Of Birth</th>;
            } 
            else if(k=="active"){
              return <th scope="col">IsActive</th>;
        
              }
            else if(k=="totalCommission"){
                return <th scope="col">Total Commission</th>;
            } 
            else if(k=="Active"){
                return <th scope="col">Active</th>;
            }
           
          });
        
       
        // rowsOfUsers = data.content.map((value) => {
        //   const { active, dateOfBirth, ...otherFields } = value;
        rowsOfUsers = (filteredData.length > 0 ? filteredData : data.content).map((value) => {
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
    <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} style={{
              padding: '8px',
              height: '2.1rem',
              marginLeft: '1rem',
              marginRight:'6px',
              borderRadius: '4px',
              border: '1px solid rgb(34, 52, 100)',
              marginBottom: '15px',
            }}
          />
          <button
            style={{
              backgroundColor: 'rgb(34, 52, 100)',
            color: '#ffffff',
            height: '2.1rem',
            // padding: '8px',
            marginRight: '8px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            }}
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            style={{
              backgroundColor: '#7f8c8d', 
            color: '#ffffff', // White text color
           
            borderRadius: '4px',
            height: '2.1rem',
            marginBottom:"1rem",
            cursor: 'pointer',
            }}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
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
        <ToastContainer position='top-center' autoClose={3000}/>
    </>
  )
}

export default Table
