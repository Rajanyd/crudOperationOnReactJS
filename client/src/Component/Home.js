import React, { useEffect,useContext, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useHistory } from 'react-router-dom'
import { addData } from './context/ContextProvider';
import { updateData } from './context/ContextProvider';


const Home = () => {
    

    const [getUserData, setUserData] = useState([]);
    console.log(getUserData);

    const userpdata = async (e) => {

        const res = await fetch("/getdata", {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },

        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            // history.push("/")
            setUserData(data)
            console.log("data added");

        }

    }

    useEffect(() => {
        userpdata();
    }, []);

    const {uData, setUData} = useContext(addData);
    const [upData, setUpData] = useContext(updateData);

    const deleteUser = async (id) => {
        const res2 = await fetch(`/deleteUserData/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });
        const deleteData = await res2.json();
        console.log(deleteData);

        if (res2.status === 422 || !deleteUser) {
            console.log("error");
        } else {
            console.log("User Deleted");
            userpdata();
        }
    }

    return (
        <>
        {
            uData ?
            <>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> User Added Successfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
        }
        {
            upData ?
            <>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> User Updated Successfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
        }
            

            <div className='mt-5'>
                <div className='container'>
                    <div className='mt-2 mb-2 add-btn'>
                        <NavLink to="/Registration"><button className='btn btn-primary'>Add Data</button></NavLink>

                    </div>


                    <table class="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">id</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getUserData.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className='d-flex justify-content-between'>
                                                    <NavLink to={`view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'><CreateIcon /></button></NavLink>
                                                    <button onClick={() => deleteUser(element._id)} className='btn btn-danger'><DeleteIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home