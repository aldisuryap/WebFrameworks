import React, { Component } from 'react';
import Fortnite from '../Assets/kisspng-fortnite-battle-royale-playerunknown-s-battlegroun-fortnite-floss-5b14c4384fcbe3.4061049115280876083269.png';
import Pubg from '../Assets/kisspng-playerunknown-s-battlegrounds-video-games-logo-for-pubg-tencent-gaming-bud-5b7c902c65e522.0203267815348900284174.png';
import myPhoto from '../Assets/IMG_8558.JPG';

export default class About extends Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div className="container">
                        <h2 className="text-center">
                            ABOUT
                        </h2>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="objek">
                                    <h3>OBJECTIVE</h3>
                                    <p>
                                        Saya hanya manusia biasa yang masih mempunyai kesempatan untuk belajar dan
                                        meningkatkan skill pada diri saya, serta terlibat dalam kelompok yang percaya dalam
                                        mendapatkan keunggulan kompetitif dan memberikan kembali kepada masyarakat. Saya
                                        saat ini memperluas pengalaman solid saya dalam bidan pemrograman baik HTML maupun
                                        JAVA. Saya juga fokus pada hobi saya yaitu bermain game yang bisa saja berguna
                                        untuk dimasa yang akan datang. Sebagai seorang individu, saya percaya diri, sabar,
                                        lucu, dan mempunyai semangat tersendiri. I’m a forward thinker, which others may
                                        find inspiring when working as a team. Thank You, and stay classy
                                    </p>
                                </div>
                                <div className="info">
                                    <h3>WHAT GAME I PLAY ?</h3><br /><br />
                                    <div className="row text-center">
                                        <div className="col">
                                            <img src={Fortnite} height="250"></img>
                                            <br /><br /><br />
                                            <a className="fortnite" href="https://www.epicgames.com/fortnite/en-US/home" target="_blank"
                                                role="button">Let's join, ASAP !</a>
                                        </div>
                                        <div className="col">
                                            <img src={Pubg} height="250"></img>
                                            <br /><br /><br />
                                            <a className="pubg" href="https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/"
                                                target="_blank" role="button">Let's join, ASAP !</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col biography text-center">
                                <img src={myPhoto} width="345"></img>
                                <ul className="list-unstyled text-left">
                                    <li><strong>Name : </strong>Aldi Surya Pranata</li>
                                    <li><strong>Date of birth : </strong>28 June 1999</li>
                                    <li><strong>Address : </strong>30A Manyar Street, Surabaya</li>
                                    <li><strong>Nationality : </strong>Indonesian</li>
                                    <li><strong>Email : </strong>appleimport123@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
