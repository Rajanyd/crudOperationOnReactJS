import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { addData } from './context/ContextProvider';

const Login = () => {
    const {uData, setUData} = useContext(addData);

    const history = useHistory("");
    const [inpval, setINP] = useState({
        UserName: "",
        Password: "",
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinpdata = async(e)=>{
        e.preventDefault();

        const { UserName, Password } = inpval;

        const res = await fetch("/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                UserName, Password
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 201 || !data) {
            history.push("/home");
            setUData(data);
            alert("User login succesfully");

        } else {
            
            // console.log("data added");
            
            history.push("/");
            alert("data not  find please use correct details");


        }

    }
  return (
    <div className="container">
            {/* <NavLink to="/">home</NavLink> */}
            <form className=" mt-4">
                <div className="row ">
                    <div class="mb-3 col-lg-8 col-md-8 col-12">
                        <label for="exampleInputEmail1" class="form-label">UserName</label>
                        <input type="text" value={inpval.UserName} onChange={setdata} name="UserName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-8 col-md-8 col-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={inpval.Password} onChange={setdata} name="Password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
  )
}

export default Login