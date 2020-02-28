import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section id="experience">
                    <div className="container">
                        <h2 className="text-center">
                            EXPERIENCE
                </h2>
                        <div id="myExp">
                            <h4>Basketball Player</h4>
                            <div className="row pb-3">
                                <div className="col">
                                    <p className="text-left lead"><b>SMPN 3 SIDOARJO</b></p>
                                </div>

                                <div className="col">
                                    <p className="text-right pr-5 lead">Januari 2013 - Februari 2014</p>
                                </div>
                            </div>
                            <div className="icon1">
                                <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                <a href="#"><i className="fas fa-band-aid"></i></a>
                            </div>
                            <p className="myStory">Saya mulai ikut club basket
                        sejak saya menginjak umur 14 tahun pada masa SMP</p> <br /><br />

                            <h4>Nature Lover Club</h4>
                            <div className="row pb-3">
                                <div className="col">
                                    <p className="text-left lead"><b>SMAN 4 SIDOARJO</b></p>
                                </div>
                                <div className="col">
                                    <p className="text-right pr-5 lead">Juni 2014 - Maret 2015</p>
                                </div>
                            </div>
                            <div className="icon2">
                                <a href="#a"><i className="fas fa-tree"></i></a>
                                <a href="#b"><i className="fab fa-pagelines"></i></a>
                                <a href="#c"><i className="fas fa-leaf"></i></a>
                            </div>
                            <p className="myStory">Saya mulai ikut club pecinta
                        alam saya menginjak umur 15 tahun pada masa SMA</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
