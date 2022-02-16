import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams,useNavigate } from 'react-router-dom';


function Update (props){

    const navigate = useNavigate()

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
    const [confpassword, setconfpassword] = useState("")
    const [users, setUsers] = useState([])
    const params = useParams()

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user");

    useEffect(() => {
        getData()
        }, [])
//get data from profile page
        function getData(){
            axios({
                method: "get",
                baseURL: `http://localhost:8070/user/getuser/${userId}`,
                headers: {
                  Authorization: "Bearer " + token
                }})
            .then((res) => {
               setname(res.data.user.name)
               setemail(res.data.user.email)
               setuserName(res.data.user.userName)
               setpassword(res.data.user.password)
               setconfpassword(res.data.user.password)
            }).catch((err) => {
                 alert(err.message);
            }) 
            console.log(params.id)

        }


//send to updated data to 
     function sendData(e) {
        e.preventDefault();
        if (confpassword === password){

        }
        else{
            return (alert("Password Doesn't match"))
        }
        const newUser = {
            name,
            email,
            userName,
            password
        };
    
    
        

          axios({
            method: "put",
            baseURL: `http://localhost:8070/user/update/${userId}`,
            data:newUser,
            headers: {
              Authorization: "Bearer " + token
            }})

          .then(() => {
            alert('User Updated, Click ok');
            navigate('/profile', { replace: true })
          
          })
          .catch((err) => {
            alert(err);
          });
      }

     return(
      <div>
          <h2 className="text-center">Update</h2>
          <br></br>
        <form onSubmit={sendData}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={name} placeholder="Full Name" onChange={(e)=>{setname(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="email" className="form-control" value={email} placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={userName} placeholder="Username" onChange={(e)=>{setuserName(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" value={confpassword} placeholder="Confirm Password" onChange={(e)=>{setconfpassword(e.target.value)}}  aria-describedby="basic-addon1"/>
            </div>
            <div className="text-center ">
                <input type="submit" value="Update" className="btn btn-success form-control"/>
            </div>
            <br></br>
            <div className="text-center ">
               <Link to="/profile"> <button type="submit" value="Register" className="btn btn-warning form-control">Cancel</button></Link>
            </div>
        </form>
      </div>
        )

}
export default Update;