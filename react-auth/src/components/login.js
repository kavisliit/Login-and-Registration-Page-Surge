import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login =()=> {

  const navigate = useNavigate()

    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [test, setTest] = useState(false)
    const [userId, setUserId] = useState('')

    console.log(userName);
    console.log(password);

    // const dataArray = [
    //     {userName:"aa",password:"gsdgjspogjdspgdsaggdagdg"},
    //     {userName:"bb",password:"gsdgjspogjdspgdsaggdagdg"}
    // ]

    // const loginHanlder =()=>{
    //     dataArray.map(el=>{
    //         if(el.userName == userName){
    //             return alert("aa")
    //         }
    //     })
    //     // userName, password

    // }

    // useEffect(() => {
    //   const token = localStorage.getItem("token");
    //   try {
    //     axios({
    //       method: "get",
    //       baseURL: `http://localhost:8070/user/getuser/${userId}`,
    //       headers: {
    //         Authorization: "Bearer " + token
    //       },
    //     })
    //   } catch (err) {
    //     throw err;
    //   }
    // }, [test])
    

function sendData(e){
    e.preventDefault();
    const newUser = {
      //userName:userName,
      email:email,
        password
    };

    axios
      .post('http://localhost:8070/user/login', newUser)
      .then((res) => {
        if(res.status!==200){
          console.log(res)

        }
        localStorage.setItem("user",(res.data.userId))
        localStorage.setItem("token", res.data.token)

        console.log(res.data.token)
        setUserId(res.data.userId)
        setTest(!test)

        navigate('/profile', { replace: true })

      })
      .catch((err) => {
        alert("Email or Password is worng");
        console.log(err)
      });
  }





  return (
    <div>
        <h2 className="text-center">Login</h2>
          <br></br>
        <form onSubmit={sendData}>

            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email Address" onChange={(e)=>{setemail(e.target.value)}} aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}} aria-label="Password" aria-describedby="basic-addon1" required/>
            </div>
            <div className="text-center">
                <button type="submit"  className="btn btn-primary form-control">Login</button>
            </div>
        </form>
    
    </div>
  );
}
export default Login;
