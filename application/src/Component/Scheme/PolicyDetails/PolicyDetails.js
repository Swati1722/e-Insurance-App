import React, {useState} from 'react'

const PolicyDetails = ({value}) => {
    const [maxAmount, setMaxAmount] = useState();
    const [minAmount, setMinAmount] = useState();
    
    const [minAge, setMinAge] = useState();
    const [maxAge, setMaxAge] = useState();
    const [minTime, setMinTime] = useState();
    const [maxTime, setMaxTime] = useState();
    const [profitRatio, setProfitRatio] = useState();
  return (
    <>
    <div>
    <h1 className='investment-heading'>Investment Details</h1>
    <div className="investment-blur" style={{ background: "rgb(238 210 255)" }}></div>
    <form className='investment-postdata'>
        <div className='investment-form-group'>
            <label htmlFor="investmentAmount">Minimum Investment Amount *</label>
            <input
                disabled={true}
                type="text"
                className="form-control"
                id="investmentAmount"
                value={minAmount}
              
                required
            />
        </div>
        <div className='investment-form-group'>
            <label htmlFor="investmentAmount">Maximum Investment Amount *</label>
            <input
                disabled={true}
                type="text"
                className="form-control"
                id="investmentAmount"
                value={maxAmount}
                required
            />
        </div>
        <div className='investment-form-group'>
            <label htmlFor="minAge">Minimum Age *</label>
            <input
                disabled={true}
                type="text"
                className="form-control"
                id="minAge"
                value={minAge}
                required
            />
        </div>
        <div className='investment-form-group'>
            <label htmlFor="maxAge">Maximum Age *</label>
            <input
                disabled={true}
                type="text"
                className="form-control"
                id="maxAge"
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
                required
            />
        </div>
        <div className='investment-form-group'>
            <label htmlFor="minPolicyTerm">Minimum Policy Term *</label>
            <input
                disabled={true}
                type="text"
                className="form-control"
                id="minPolicyTerm"
                value={minTime}
                onChange={(e) => setMinTime(e.target.value)}
                required
            />
        </div>
        <div className='investment-form-group'>
            <label htmlFor="maxPolicyTerm">Maximum Policy Term *</label>
            <input
                disabled={true}
                type="text"
                className="form-control"
                id="maxPolicyTerm"
                value={maxTime}
                onChange={(e) => setMaxTime(e.target.value)}
                required
            />
        </div>
        <div className='investment-form-group'>
            <label htmlFor="profitRatio">Profit Ratio *</label>
            <input
                disabled={true}
                type="text"
                className="form-control"
                id="profitRatio"
                value={profitRatio}
                onChange={(e) => setProfitRatio(e.target.value)}
                required
            />
        </div>
        </form>
</div>
    
{/* onClick={submitInvestmentDetails} */}
    </>
  )
}

export default PolicyDetails
