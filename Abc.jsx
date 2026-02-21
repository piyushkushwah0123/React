import React, { useState } from 'react'
import axios from "axios";

const Abc = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // 🔥 changeHandler added
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        // let result = await axios.post("endpoint",{
        //     formData
        // })
        // console.log(result);

        try {
            let response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                formData
            )

            console.log("Data Sent:", response.data);
            alert("Form Submitted Successfully ✅");

            setFormData({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={changeHandler}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={changeHandler}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={changeHandler}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Abc;