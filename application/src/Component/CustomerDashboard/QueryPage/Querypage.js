import React from 'react'
import image from '../../../Image/Questions.svg'
import "./QueryPage.css"

const Querypage = () => {
  return (
        <>
           <div className='query-container'>
                <div className="query-top-element">
                    <img style={{ height: "45vh", width: "50vh" }} src={image} alt="Query image" />
                </div>

                <div className="query-bottom-element">
                    <div className='query-box'>
                    <h1 className='query-heading'>Query Submission </h1>
                    <form className='query-postdata'>
                        <div className='query-form-group'>
                            <label htmlFor="query"> Enter Your Query</label>
                            <input type="text" className="form-control" id="query"/>
                        </div>

                        <div className='query-button' style={{marginTop:"1rem"}}>
                            <button type="button" className="btn btn-primary query-button" >Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            {/* value={userQuery} onChange={(e) => setUserQuery(e.target.value)}  */}
            {/* onClick={submitQuery} */}

        </>
  )
}

export default Querypage
