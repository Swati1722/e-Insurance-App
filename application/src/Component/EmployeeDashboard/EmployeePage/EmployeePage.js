import React from 'react'
import "./EmployeePage.css"
import { Link } from 'react-router-dom';
import logo1 from '../../../Image/Admin.svg'
import logo2 from '../../../Image/Admin1.svg'
import logo3 from '../../../Image/Admin2.svg'
import logo4 from '../../../Image/Admin3.svg'
import logo5 from '../../../Image/Admin4.svg'

const EmployeePage = () => {




  return (
    <>
            <section className="vh-100 content">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-6 col-xl-5">
                        <div className="card text-black">
                            <div className="card-header">
                                <h2 className="fw-bold mb-5">Employee Dashboard</h2>
                            </div>
                            <div className="card-body p-md-5 container-form">
                                <div className="row mb-4">
                                    {/* First Card */}
                                    <div className="col-md-6 mb-4">
                                        <Link to="" className="card-link" >
                                            <div className="card square-card">
                                                <img
                                                    src={logo5}
                                                    className="card-img-top"
                                                    alt="Sample image"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">Add Employee</h5>
                                                    <p className="card-text">Click to view Add Employee table</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Second Card */}
                                    <div className="col-md-6 mb-4">
                                        <Link to="/viewCustomer" className="card-link">
                                            <div className="card square-card">
                                                <img
                                                    src={logo2}
                                                    className="card-img-top"
                                                    alt="Sample image"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">View Customer</h5>
                                                    <p className="card-text">Click to view View Customer table</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Third Card */}
                                    <div className="col-md-6 mb-4">
                                        <Link to="/viewEmployee" className="card-link">
                                            <div className="card square-card">
                                                <img
                                                    src={logo3}
                                                    className="card-img-top"
                                                    alt="Sample image"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">View Employee</h5>
                                                    <p className="card-text">Click to view View Employee table</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Fourth Card */}
                                    <div className="col-md-6 mb-4">
                                        <Link to="/viewAgent" className="card-link">
                                            <div className="card square-card">
                                                <img
                                                    src={logo4}
                                                    className="card-img-top"
                                                    alt="Sample image"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">View Agent</h5>
                                                    <p className="card-text">Click to view View Agent table</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* ... (Your existing card layout) */}
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-xl-7 d-flex align-items-center">
                        <img
                            src={logo1}
                            className="img-fluid registration-image"
                            alt="Sample image"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EmployeePage
