import React, { useState } from 'react';
import BlogMahasiswa from '../Container/BlogMahasiswa/BlogMahasiswa';
import BlogPost from '../Container/BlogPost/BlogPost';

export default function Home() {
    const [isHome, setIsHome] = useState(true);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2" id="sidebar">
                    <ul className="list-group mt-3">
                        <li
                            className={"list-group-item " + (isHome ? "active" : "")}
                            onClick={e => setIsHome(true)}>
                            Artikel
                        </li>
                        <li
                            className={"list-group-item " + (!isHome ? "active" : "")}
                            onClick={e => setIsHome(false)}>
                            Mahasiswa
                        </li>
                    </ul>
                </div>
                <div className="col-10" id="content">
                    {isHome && <BlogPost />}
                    {!isHome && <BlogMahasiswa />}
                </div>
            </div>
        </div>
    );
}