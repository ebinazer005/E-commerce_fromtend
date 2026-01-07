import { useDispatch, useSelector } from "react-redux";
import { signinUser  } from "../store/singin";
import { useState } from "react";
const Signin = () => {
    const dispatch = useDispatch();
    const {loading, error ,userdata} = useSelector((state) => state.storeForSingin);

     const [siginData,setSiginData] = useState({
        email : "",
        password : "",
        
    }); 

    const handleChange =(event)=>{
    const {name ,value} =event.target;
    setSiginData ((prev)=>({
        ...prev,
        [name] : value
    }))  

    }


    console.log(siginData)
    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(signinUser(siginData));
    }

    return ( <>
        <h1>singin</h1>
        <form onSubmit={handleSubmit}>
            <label>email</label>
            <input type = "email" name="email"  placeholder="email"  value={siginData.email} onChange={handleChange}/>
             <label>password</label>
            <input type = "password" name="password" placeholder="password" value={siginData.password} onChange={handleChange}/>
            <button type="submit">Sign In</button>

        </form>
    </> );
}
 
export default Signin;