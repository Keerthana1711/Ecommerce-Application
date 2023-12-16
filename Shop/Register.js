const Register=()=>{
    return(
        <>
        <div className="reg">
    <h1>REGISTRATION</h1><br></br> <br></br>
    <label>FIRST NAME : </label>
   <input type="text" name="first name"></input><br></br> <br></br>
   <label>LAST NAME   : </label>
   <input type="text" name="last name"></input> <br></br> <br></br>
   <label>E-MAIL :   </label>
   <input type="text" name="e-mail"></input><br></br> <br></br>
   <label>PHONE NO : </label>
   <input type="text" name="phone number"></input> <br></br> <br></br>
   
   <label>PASSWORD : </label>
   <input type="text" name="password"></input><br></br> <br></br>
   <label>CONFIRM PASSWORD : </label>
   <input type="text" name="confirm password"></input><br></br><br></br>
    <button type="button">submit</button>
    </div>
        </>
    )
}
export default Register;