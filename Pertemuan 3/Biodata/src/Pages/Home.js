import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="home">
                    <div className="intro">
                        <div className="container">
                            <div className="intro-sub">I AM GGPERSON</div>
                            <h1>GAME & HOLIDAY <span>ENTHUSIASM</span></h1>
                            <p>I am just an ordinary people who love play a game & travelling
                    <br />Involving with my gaming skill and technologies is a great
                    <br />feel free to know me more !
                </p>
                            <div className="social-icons">
                                <ul className="social-list-inline">
                                    <li>
                                        <a href="https://www.facebook.com/aldi.s.p.90" target="_blank"><i className="fab fa-facebook-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Appleimport?s=09" target="_blank"><i className="fab fa-twitter-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="http://line.me/ti/p/~appleimport" target="_blank"><i className="fab fa-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://id.pinterest.com/appleimport123/" target="_blank"><i className="fab fa-pinterest-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/aldisuryap" target="_blank"><i className="fab fa-github-square"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='scroll'>
                        <a className='icon-scroll' href="#about"></a>
                    </div>
                </section>
            </div >
        )
    }
}
