import React, { useState } from "react";
import Button from "../../components/UI/Button/Button";
import InputBox from "../../components/UI/InputBox/InputBox";
import { Heading } from "../../components/UI/Heading/Heading";

function Auth(props) {
    const [type,isType]=useState('login');


  return (
    <section id="appointment" className="appointment">
      <div classname="container">
        <div className="section-title">
            {
                type==='fpassword' ? <Heading className="text-center">Forgot Password</Heading> : type=== 'login' ?<Heading className="text-center">Login</Heading> :
                <Heading className="text-center">SignUp</Heading>
            }

        </div>
        <form action method="post" role="form" className="php-email-form">
        <div className="row justify-content-center">
            {
                type ==='fpassword' ? '' : type==='login' ? '':
                <div className="col-md-8 form-group">
                <InputBox type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />  
              </div>
            }
          
          <div className="col-md-8 form-group mt-3 mt-md-0">
            <InputBox type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div className="validate" />
          </div>

          {
              type==='fpassword' ? '': <div className="col-md-8 form-group mt-3 mt-md-0">
              <InputBox type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            </div>
            }
         
        </div>
        {
          type==='fpassword' ?<div className="text-center mt-3"><Button type="submit" disabled={true}>Submit</Button></div> : type==='login' ?
          <div className="text-center mt-3"><Button type="submit" btndisabled={true} btntype="secondary">Login</Button></div> : <div className="text-center mt-3"><Button type="submit" btntype="outline" disabled={true}>SignUp</Button></div>
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
