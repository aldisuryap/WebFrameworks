import React, { Component } from 'react'

export default class StatefullComponent extends Component {
    state = {
        username: "",
        password: "",
        remember: false
    };

    changeSubmit = (value, name) => {
        this.setState({ ...this.state, [name]: value })
    };

    login = e => {
        console.log(this.state);
        this.setState({
            username: "",
            password: "",
            remember: false
        })
    }

    render() {
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
                                        value={this.state.username}
                                        onChange={event => this.changeSubmit(event.target.value, "username")}
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
                                        value={this.state.password}
                                        onChange={event => this.changeSubmit(event.target.value, "password")}
                                    ></input>
                                </div>
                            </div>
                            <button
                                className="btn btn-large btn-success mt-3"
                                style={{ width: "100%", height: "40px" }}
                                onClick={this.login}>
                                LOGIN
                        </button>
                            <div>
                                <input type="checkbox"
                                    id="remember"
                                    name="remember"
                                    checked={this.state.remember}
                                    onChange={event => this.changeSubmit(!this.state.remember, "remember")}
                                ></input>
                                <label className="pl-2 mt-3">Remember me</label>
                            </div>
                            <div className="btn btn-large btn-danger mt-3" style={{ width: "40%", height: "40px" }}>
                                CANCEL
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
