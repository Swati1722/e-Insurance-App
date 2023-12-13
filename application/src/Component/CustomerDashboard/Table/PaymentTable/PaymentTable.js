import React, { useState, useEffect} from 'react'



const Table = ({policyNumber,numberOfYear, premiumType, installmentAmount}) => {
   
    const [numberOfInstallment, setNumberOfInstallment] = useState()
    const [date,setDates] =useState()
    const [disabledButtons, setDisabledButtons] = useState(Array(numberOfInstallment).fill(false));

    
    const getNoOfInstallment = () =>{
        setNumberOfInstallment((numberOfYear*12)/premiumType)
   
        const startDate = new Date('2023-11-01');
        const installmentDates = Array.from({ length: numberOfInstallment }, (_, index) => {
        const date = new Date(startDate);
        date.setMonth(startDate.getMonth() + index * premiumType);
        return date.toISOString().split('T')[0]; // Extracting YYYY-MM-DD
        });

        setDates(installmentDates);
    }
   
   
    useEffect(()=>{
        getNoOfInstallment ()
    },[]) 

    const handlePayButtonClick = (index) => {
        const updatedButtons = [...disabledButtons];
        updatedButtons[index] = true;
        setDisabledButtons(updatedButtons);
      };

   
    return (
    <>
        <table className="table table-striped " style={{"paddingLeft" :"1rem", "marginRight":"1rem"}}>
            <thead>
                <tr>
                    <th scope="col">Serial No.</th>
                    
                    <th scope="col">Installment Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Pay</th>

                </tr>
                
            </thead>
            <tbody>
            {Array.from({ length: numberOfInstallment }, (_, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{installmentAmount}</td>
              <td>{date[index]}</td>
              <td>
                <button
                  style={{width :"4rem", backgroundColor: 'rgb(34, 52, 100)', border: "none", color: 'white', height: '1.9rem' }}
                  disabled={disabledButtons[index]}
                  onClick={() => handlePayButtonClick(index)}
                >
                  {disabledButtons[index] ? 'Paid' : 'Pay'}
                </button>
              </td>
            </tr>
          ))}

                  
               
            </tbody>

        </table>
        
    </>
  )
}

export default Table