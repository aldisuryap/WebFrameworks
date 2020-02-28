import React, { useState } from 'react'
import './HelloComponent.css';
const Form1 = () => {

    const [input, setInput] = useState({
        username: "",
        password: "",
        remember: false
    });

    function changeSubmit(value, name) {
        setInput({ ...input, [name]: value });
    }

    function submit(e) {
        console.log(input);
    }
    return (
        <div>
            <h2 className="text-center mt-4 mb-5">Form Login</h2>
            <div className="d-flex justify-content-center">
                <div className="box">
                    <div className="text-center">
                        <h1>Tugas Pertemuan Ketiga</h1>
                        <div className="row mb-4 mt-5">
                            <div className="col-4">
                                <label>Username</label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    id="username"
                                    value={input.username}
                                    onChange={event => changeSubmit(event.target.value, "username")}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Password</label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="password"
                                    id="password"
                                    value={input.password}
                                    onChange={event => changeSubmit(event.target.value, "password")}
                                ></input>
                            </div>
                        </div>
                        <button
                            className="btn btn-large btn-success mt-3"
                            style={{ width: "100%", height: "40px" }}
                            onClick={submit}>
                            LOGIN
                        </button>
                        <div>
                            <input type="checkbox"
                                id="remember"
                                name="remember"
                                checked={input.remember}
                                onChange={event => changeSubmit(!input.remember, "remember")}
                            ></input>
                            <label className="pl-2 mt-3">Remember me</label>
                        </div>
                        <div className="btn btn-large btn-danger mt-3" style={{ width: "40%", height: "40px" }}>
                            CANCEL
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Form1;

