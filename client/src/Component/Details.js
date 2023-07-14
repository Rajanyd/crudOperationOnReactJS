import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';

const Details = () => {

    
    const history = useHistory("");
    const [getUserData, setUserData] = useState([]);
    console.log(getUserData);

    const {id} = useParams("");
    console.log(id);
    const getUser = async (e) => {

        const res = await fetch(`/getUser/${id}`, {
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
            console.log("Details of user");

        }

    }
    useEffect(() => {
        getUser();
    }, []);

    const deleteUser = async(id)=>{
        const res2 = await fetch(`/deleteUserData/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        });
        const deleteData = await res2.json();
        console.log(deleteData);
        
        if (res2.status === 422 || !deleteUser) {
            console.log("error");
        }else{
            console.log("User Deleted");
            history.push("/");
        }
    }

  return (
    <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome {getUserData.name}</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getUserData._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={()=>deleteUser(getUserData._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getUserData.name}</span></h3>
                            <h3 className="mt-3">Age: <span >{getUserData.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getUserData.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getUserData.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>{getUserData.mobile}</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>{getUserData.add}</span></p>
                            <p className="mt-3">Description: <span>{getUserData.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
  )
}

export default Details