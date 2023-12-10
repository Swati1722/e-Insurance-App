import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {savePolicy} from "../../../Service/PolicyService"
import './AddPolicy.css'
import Button from 'react-bootstrap/Button';
import { validateUser as validate } from '../../../Service/Authentication';



import { Link } from 'react-router-dom';

const AddPolicy = () => {
const [mobileNumber,setMobileNumber] = useState()
const[dateOfBirth,setDateOfBirth] = useState()
const[username,setUsername] =useState()


  const location = useLocation();
  const receivedData = location.state || {};
  const [selectedFiles, setSelectedFiles] = useState([])
  const maxFiles = 3;
  const validateUser = async() =>{
    const authToken = localStorage.getItem('authentication')
    let resp = await validate(authToken)
    setUsername(resp.data.sub)

    
 }
 useEffect(()=>{
  validateUser()
},[])

  const handleFileChange = (e) =>{
    const files = Array.from(e.target.files)
    const validFiles = []

    // Filter and validate the selected files
    for (const file of files) {
      const fileType = file.type.toLowerCase()
      const fileName = file.name.toLowerCase()

      // Define allowed file types (image or PDF)
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
      if (allowedTypes.includes(fileType) && validFiles.length < maxFiles) {
       
        validFiles.push(file)
      } else {
        alert(
          `Invalid file: ${fileName}. Only images (jpeg, jpg, png) and PDF (pdf,
             doc, docx) files are allowed, and you can upload a maximum of ${maxFiles} files.`
        )
      }
    }
    // Update the selected files state
    setSelectedFiles([...selectedFiles, ...validFiles])
  }

  const renderSelectedFiles = () =>{
    if (selectedFiles.length === 0) {
        return <p>No files selected.</p>
      }
  
      return (
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              {file.name}{' '}
              <Button
                variant="danger"
                onClick={() => handleFileRemove(index)}
                style={{ maxWidth: '100px', marginTop: '2px' }}
                >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )
  }

  const handleFileRemove = (index) => {
    const updatedFiles = [...selectedFiles]
    updatedFiles.splice(index, 1)
    setSelectedFiles(updatedFiles)
  }


  const handleSubmit =  async(e)  =>{
    e.preventDefault()

    if (selectedFiles.length > 0) { // Check if at least one file is selected
        const formDataWithFiles = []
        selectedFiles.forEach((file, index) => {
          formDataWithFiles.push('documentFiles', file)
        })
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];

        const maturityDate = new Date(currentDate);
        maturityDate.setFullYear(currentDate.getFullYear() + receivedData.noOfYear);
    const formattedMaturityDate = maturityDate.toISOString().split('T')[0];
    try{

            let respose = await savePolicy(username,receivedData.schemeId,receivedData.noOfYear,receivedData.totalInvestmentAmount, receivedData.premiumType,receivedData.installmentAmount,receivedData.interestAmount,receivedData.totalAmount,receivedData.profitRatio, formattedDate,formattedMaturityDate,  formDataWithFiles)
          if(respose)
          {
            alert("data is saved")
          }
            setSelectedFiles([])
    }
    catch(error)
    {
      console.log(error)
        alert(error.message)
    }
    }
}

  return (
    <>
        <div className='plan-box'>
            <div className='plan-tittle'>

                <h1>Policy Details Form</h1>
            </div>
            <div className='plan-form-container'>
                <form className='plan-form-controlller' onSubmit={handleSubmit}>
                {/* <p>Number of Years: {receivedData.noOfYear}</p>
                <p>Received data: {JSON.stringify(receivedData)} <h1></h1></p> */}
                    <div className="plan-form-row">
                        <div className="form-group">
                            <label for="inputEmail4">Mobile</label>
                            <input type="Mobile" className="form-control" id="inputEmail" placeholder="Mobile" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label for="dataOfBirth">Date Of Birth</label>
                            <input type="dataOfBirth" className="form-control" id="dataOfBirth" placeholder="dataOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                        </div>
                
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group ">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control" size="5">
                                <option selected>Choose...</option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chhattisgarh</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Odisha</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>Uttarakhand</option>
                                <option>West Bengal</option>
                                <option>Andaman and Nicobar Islands</option>
                                <option>Chandigarh</option>
                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                <option>Delhi</option>
                                <option>Lakshadweep</option>
                                <option>Puducherry</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group ">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                        <div className="form-group ">
                            <label for="inputNominees">Nominees</label>
                            <input type="text" className="form-control" id="inputNominees"/>
                        </div>
                        <div className="form-group ">
                            <label for="inputNomineesRelation">Nominees Relation</label>
                            <input type="text" className="form-control" id="inputNomineesRelation"/>
                        </div>
                        
                

                
                        <div className='form-group'>
                            <label htmlFor="noOfYear">Number of year*</label>
                            <input
                    
                                type="text"
                                className="form-control"
                                id="noOfYear"
                                value={receivedData.noOfYear}
                                // onChange={(e) => setNoOfYear(e.target.value)}
                            
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="totalInvestmentAmount">Total Investment Amount *</label>
                            <input
                                
                                type="text"
                                className="form-control"
                                id="totalInvestmentAmount"
                                value={receivedData.totalInvestmentAmount}
                            
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="premiumType">Premium Type *</label>
                            <input
                                
                                type="text"
                                className="form-control"
                                id="premiumType"
                                value={receivedData.premiumType}
                            
                                required
                            />
                        </div>
                        <div className='investment-form-group'>
                            <label htmlFor="installmentAmount">Installment Amount*</label>
                            <input
                                disabled={true}
                                type="text"
                                className="form-control"
                                id="installmentAmount"
                                value={receivedData.installmentAmount}
                                
                            
                                required
                            />
                        </div>
                        <div className='investment-form-group'>
                            <label htmlFor="interestAmount">Interest Amount *</label>
                            <input
                                disabled={true}
                                type="text"
                                className="form-control"
                                id="Interest Amount"
                                value={receivedData.interestAmount}
                                required
                            />
                        </div>
                        <div className='investment-form-group'>
                            <label htmlFor="totalAmount">Total Amount *</label>
                            <input
                                disabled={true}
                                type="text"
                                className="form-control"
                                id="totalAmount"
                                value={receivedData.totalAmount}
                            
                                required
                            />
                        </div>
                        <div>
                            <div className="form-group" style={{marginTop:"1rem"}}>
                              <label htmlFor="documentfile" style={{marginRight:"1rem"}}>Upload Document</label>
                              <input
                                  type="file"
                                  accept=".pdf,.doc,.docx,.png,.jpeg,.jpg"
                                  name="documentfile"
                                  onChange={handleFileChange}
                                  multiple 
                              />
                            </div>
                            {renderSelectedFiles()}
                        </div>
                    </div>
                
            
                    <div className='policy-button'>
                        <button type="submit" className="btn btn-primary" style={{marginTop:"1rem",backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"2.5rem"}} >Buy Now</button>
                        <Link to="/customerDashboard"  className="btn btn-secondary d-text" style ={{marginLeft:"25rem", marginTop:"1.5rem"}}onClick={(e)=> {localStorage.clear()}}>Back</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddPolicy
