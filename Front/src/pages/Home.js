import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>目錄</h1>
            <ul>
                <li><Link to="../signup">註冊</Link></li>
                <li><Link to="../signin">登入</Link></li>
                <li><Link to="../login">訪客首頁</Link></li>
                <li><Link to="../album">用戶登入頁面123</Link></li>
            </ul>
        </div>
    );
}

export default Home;