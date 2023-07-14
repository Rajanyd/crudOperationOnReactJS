import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { addData } from './context/ContextProvider';

const Registration = () => {

    const { uData, setUData } = useContext(addData);

    const history = useHistory("");
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        Degination: "",
        mobile: "",
        Gender: "",
        Course: "",
        imgUpload: ""
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

    const addinpdata = async (e) => {
        e.preventDefault();
        // const fileInput = document.querySelector("#fileInput");
        // // const file = new FormData();
        // file.append('file', fileInput.files[0]);

        const { name, email, Gender, Course, mobile, imgUpload, Degination } = inpval;
        // console.log(email);

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, Gender, Course, mobile, imgUpload, Degination
            })
        });

        const data = await res.json();
        console.log("data",data);

        if (res.status === 422 || !data) {
            console.log("this is user is already present");
            alert("this is user is already present");

        } else {


            history.push("/");
            setUData(data);
            alert("data added succesfully");

        }

    }

    return (
        <div classNameName="container">
            <NavLink to="/">home</NavLink>
            <form classNameName="mt-4">
                <div classNameName="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label forHtml="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label forHtml="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label forHtml="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label forHtml="exampleInputPassword1" className="form-label">Degination</label>
                        <select name="Degination" onChange={setdata}>
                            <option value="HR">HR</option>
                            <option value="Manger">Manger</option>
                            <option value="Sales">Sales</option>
                        </select>
                        {/* <input type="text" value={inpval.Degination} onChange={setdata} name="Degination" className="form-control" id="exampleInputPassword1" /> */}
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label forHtml="exampleInputPassword1" className="form-label">Gender</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Gender" onChange={setdata} value="Male" id="Gender1" />
                                <label class="form-check-label" for="Gender1">
                                Male
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Gender" onChange={setdata} value="Famale"  id="Gender2" />
                                <label class="form-check-label" for="Gender2">
                                    Famale
                                </label>
                        </div>
                        {/* <input type="text" value={inpval.Gender} onChange={setdata} name="Gender" className="form-control" id="exampleInputPassword1" /> */}
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label forHtml="exampleInputPassword1" className="form-label">Course</label>
                        <input type="text" value={inpval.Course} onChange={setdata} name="Course" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label forHtml="exampleInputPassword1" className="form-label">imgUpload</label>
                        <input type="file" name="imgUpload" value={inpval.imgUpload} onChange={setdata} classNameName="form-control" id="fileInput" cols="30" rows="5" />
                    </div>

                    <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Registration