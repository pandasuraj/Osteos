 import React from 'react'
import Footer from '../components/Footer'

export default function ConsultingLogin  ()  {
  
        return (
          <>
          <div className="container-fluid ps-md-0">
        <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6">
                <img src="https://static.vecteezy.com/system/resources/previews/002/710/265/original/profile-login-style-vector.jpg"
                    alt="" className="img" />
            </div>
            <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-lg-8 mx-auto">
                                <h3 className="login-heading mb-4"><b>Welcome to Osteos Consulting Room </b></h3>
                                <p>Generate Credentials By Pressing Generate Button</p>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="username"
                                            placeholder="name@example.com"/>
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="password"
                                            placeholder="Password"/>
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-grid">
                                        <button  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                            type="submit">Generate</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
         
          </>
         
    )
}
