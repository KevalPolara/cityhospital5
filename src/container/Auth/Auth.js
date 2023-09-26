import React, { useState } from "react";

function Auth(props) {
    const [type,isType]=useState('login');
    // const [istype,SetIsType]=useState('fpassword');


  return (
    <section id="appointment" className="appointment">
      <div classname="container">
        <div className="section-title">
            {
                type==='fpassword' ? <h2 className="text-center">Forgot Password</h2> : type=== 'login' ?<h2 className="text-center">Login</h2> :
                <h2 className="text-center">SignUp</h2>
            }

        </div>
        <form action method="post" role="form" className="php-email-form">
        <div className="row justify-content-center">
            {
                type ==='fpassword' ? '' : type==='login' ? '':
                <div className="col-md-8 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />  
              </div>
            }
          
          <div className="col-md-8 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div className="validate" />
          </div>

          {
              type==='fpassword' ? '': <div className="col-md-8 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            </div>
            }
         
        </div>
        {
          type==='fpassword' ?<div className="text-center mt-3"><button type="submit">Submit</button></div> : type==='login' ?
          <div className="text-center mt-3"><button type="submit">Login</button></div> : <div className="text-center mt-3"><button type="submit">SignUp</button></div>
        }
        
        </form>
        
        {
           type==='fpassword' ? '' : type==='login' ? <p className="text-center mt-3">Don't Have An Account ? <a onClick={()=>{isType('signUp')}} className="login">SignUp</a></p> :
            <p className="text-center mt-3">Already Have An Account ? <a onClick={()=>{isType('login')}} className="login">Login</a></p>
        }

        {
           type==='signUp'? '' : type==='login'?<p className="text-center">Forgot Password ? <a onClick={()=>{isType('fpassword')}} className="login">Click</a></p> : 
           <p className="text-center mt-3">Already Have An Account ? <a onClick={()=>{isType('login')}} className="login">Login</a></p>
        }
      </div>
    </section>
  );
}

export default Auth;
