import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Register (){

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
    const [confpassword, setconfpassword] = useState("")
    const [users, setUsers] = useState([])
    useEffect(() => {
        getData()
        }, [])

        function getData(){
            axios
            .get('http://localhost:8070/user/')
            .then((res) => {
             setUsers(res.data)
             console.log(res.data)
            })
            .catch((err) => {
              alert(err);
            });

        }



    function sendData(e) {
        e.preventDefault();
        // users.map(el=>{
        //     if(el.email === email){
        //         return (alert("Email is Exsist"))
        //     }
        // })
        // if (confpassword === password){

        // }
        // else{
        //     return (alert("Password Doesn't match"))
        // }
        const newUser = {
            name,
            email,
            userName,
            password
        };
    
        axios
          .post('http://localhost:8070/user/signup', newUser)
          .then(() => {
            alert('User Added');
            setemail('');
            setname('');
            setuserName('');
            setpassword('');
            setconfpassword('');
          })
          .catch((err) => {
            //alert(err);
          });
      }

    return(
      <div>
          <h2 className="text-center">Registration</h2>
          <br></br>
        <form onSubmit={sendData}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Full Name" onChange={(e)=>{setname(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" onChange={(e)=>{setuserName(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e)=>{setconfpassword(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="text-center ">
                <input type="submit" value="Register" className="btn btn-success form-control"/>
            </div>
           
        </form>
      </div>
        )

}
export default Register;