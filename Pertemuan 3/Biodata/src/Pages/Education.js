import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section id="education">
                    <div className="container">
                        <h2 className="text-center">EDUCATION</h2>
                        <div id="myEdu">
                            <h4>State Polytechnic of Malang</h4>
                            <div className="row pb-3">
                                <div className="col">
                                    <p className="text-left lead oke"><b>Bachelor's Degree</b></p>
                                </div>

                                <div className="col">
                                    <p className="text-right pr-5 lead">September 2017 - Present</p>
                                </div>
                            </div>
                            <p className="myDept">Teknologi Informasi - Teknik Informatika <br /> <span>GPA : 4.00</span></p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
