import React, { useState } from 'react'
import "./Table.css"


const Table = ({data ,isViewDocumentButton,isVerifyButton, viewDocFunc}) => {
   
    let rowsOfUsers =<></>
    let tableHeaderRow = <></>
    let keys =[]
    if(data && data.content && data.content.length !== 0)
    {
        keys =Object.keys(data.content[0])
        // console.log("Keys:",keys)
        
        if(isViewDocumentButton)
        {
      
            keys.push('View Document')
        }
        if(isVerifyButton)
        {
      
            keys.push('Verify')
        }
       
        tableHeaderRow = keys.map(k => {
            if(k=="policyNumber"){
                return <th scope="col">Policy Number</th>;
            } 
            else if(k=="issueDate"){
                return <th scope="col">Issue Data</th>;
            }
            else if(k=="maturityDate"){
                return <th scope="col">Maturity Data</th>;
            }
            else if(k=="premiumType"){
                return <th scope="col">Premium Type</th>;
            }
            else if(k=="numberOfYear"){
                return <th scope="col">Number Of Year</th>;
            }
            else if(k=="profitRatio"){
                return <th scope="col">Profit Ratio</th>;
            }
            else if(k=="totalPremiumAmount"){
                return <th scope="col">Total Premium Amount</th>;
            }
            else if(k=="installmentAmount"){
                return <th scope="col">Installment Amount</th>;
            }
            else if(k=="schemeName"){
                return <th scope="col">Scheme Name</th>;
            }
            else if(k=="planName"){
                return <th scope="col">Plan Name</th>;
            }
            
            
            
            else if(k=="intrestAmount"){
                return <th scope="col">Intrest Amount</th>;
            }
            else if(k=="maturityBenefit"){
                return <th scope="col">Maturity Benefit</th>;
            }
            else if(k=="View Document"){
                return <th scope="col">View Document</th>;
            }
            else if(k=="Verify"){
                return <th scope="col">Verify</th>;
            }
            else if(k=="fileDB"){
                return <th scope="col">FileDb</th>;
            }
            else if(k=="nominees"){
                return <th scope="col">Nominees</th>;
            }
            else if(k=="active"){
                return null;
            }
            else if(k=="View Document"){
                return <th scope="col">View Document</th>;
            }
          });
       
        rowsOfUsers = data.content.map((value) => {
            const { active, ...otherFields } = value;
          
            return (
              <tr>
                {Object.values(otherFields).map((i) => (
                  <td>{i !== null ? i.toString() : 'N/A'}</td>
                ))}
          
                
                {isViewDocumentButton && ( 
                  <td>
                      <button  
                        onClick={(e)=>{  
                          e.preventDefault(); 
                          viewDocFunc(value)
                       }} 
                       style={{ backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"1.7rem",}}
                       >ViewDocument</button>
                  </td>
                )}
                {isVerifyButton && ( 
                  <td>
                      <button  
                        onClick={(e)=>{  
                          e.preventDefault(); 
                        //   viewDocFunc(value)
                       }} 
                       style={{ backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"1.7rem",}}
                       >Verify</button>
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

