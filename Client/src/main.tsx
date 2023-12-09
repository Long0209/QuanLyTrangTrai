// Thực hiện nap các thư viện vào trong ứng Dụng
import React from 'react';
import ReactDom from 'react-dom/client';
import Router from './Routers/Router';
import { BrowserRouter } from 'react-router-dom';

// nạp file style css trong tailwind để sử dụng 
    import "tailwindcss/tailwind.css";
// Thực hiện kiểm tra giá trị thuộc tính truyền vào là không null
// Đảm bảo giá trị truyền vào không null (!=null) 
// 
// const root: HTMLElement | null
    // - root: This is the name of the
    // HTMLElement | null: This is the typeroot canHTMLElement or null.
// document.getElementById('yourElementId')!
    // The ! symbol at the end of the expression (document.getElementById('yourElementId')!.
    //  is the non-null assertion operator in TypeScript.
    const root: HTMLElement | null = document.getElementById('root')!;
// Sau Khi Thực Hiện Xong 
// 
//  Thực hiện Render ui giao diện trong react Vite
ReactDom.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </React.StrictMode>,
);


