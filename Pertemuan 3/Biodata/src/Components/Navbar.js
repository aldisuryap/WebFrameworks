import React, { Component } from 'react'

export default class Navbar extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    state = {
        isTop: true
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll) {
            this.setState({ isTop: true })
        } else {
            this.setState({ isTop: false })
        }
    }

    render() {
        return (
            <div id="nav" class="fixed-top">
                <nav className={`navbar navbar-expand-lg ` + (this.state.isTop ? 'navbar-light bg-light' : '')}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto text-center">
                            <a className="nav-item nav-link " href="#home"> <i className="fas fa-home"></i><br /> <span>HOME</span></a>
                            <a className="nav-item nav-link " href="#about"><i className="fas fa-user"></i><br /> <span>ABOUT</span></a>
                            <a className="nav-item nav-link " href="#experience"><i className="fas fa-brain"></i><br /> <span>EXPERIENCE</span></a>
                            <a className="nav-item nav-link " href="#education"><i className="fas fa-chalkboard-teacher"></i><br /> <span>EDUCATION</span>
                            </a>
                            <a className="nav-item nav-link " href="#skill"><i className="fas fa-clipboard-check"></i><br /> <span>SKILLS</span></a>
                            <a className="nav-item nav-link " href="#interest"><i className="fas fa-lightbulb"></i><br /> <span>INTEREST</span></a>
                        </div>
                    </div>
                </nav >
            </div>

        )
    }
}
