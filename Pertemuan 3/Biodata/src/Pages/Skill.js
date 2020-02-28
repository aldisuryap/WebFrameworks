import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div>
                <section id="skill">
                    <div className="container">
                        <h2 className="text-center">SKILLS & HOBBIES</h2>
                        <div className="row">
                            <div className="col">
                                <h5 className="text-center">Programming Languages & Tools</h5>
                                <ul className="icon">
                                    <li>
                                        <a href="#d"><i className="fab fa-js"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fab fa-html5"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fab fa-angular"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fab fa-java"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fab fa-react"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fab fa-php"></i></a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col">
                                <h5 className="text-center">Hobbies | Daily Activities</h5>
                                <ul className="icon">
                                    <li>
                                        <a href="#d"><i className="fas fa-gamepad"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fas fa-headset"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fas fa-bed"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fas fa-mountain"></i></a>
                                    </li>
                                    <li>
                                        <a href="#d"><i className="fas fa-utensils"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
