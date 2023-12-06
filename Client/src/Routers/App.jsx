
import React from 'react' ;
import {Routes, Route} from 'react-router-dom';

// import component and Pages
import {
    DefaultLayout, 
    LoginPages
} from '@/Components';

// Default Pages
import {
    Home2, 
    News, 
    Support, 
    Infomations, 
    PageError 
} from '@/Pages';

// admin
import { 
    AdminMasterPages,
    AdminHome
} from '@/Pages/Private/Admin';

import { Button_1, Chart_1 } from "@/Components"
import {GetEspData} from "@/Api";


function App() {
    return (
        <div className="App-wrap">
            <Routes>
                {/* Router Default */}
                <Route path='/' element={<DefaultLayout/>}>
                    <Route index element={<Home2/>}/>
                    <Route path='home' element={<Home2/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='supports' element={<Support/>}/>

                    <Route path='infomations' element={<Infomations/>}/>

                    {/* <Route path='home2' element={<Home2/>}/> */}
                    {/* rouer Login */}
                    <Route path='login' element={<LoginPages/>}/>
                    {/* Page error */}
                    <Route path='*' element={<PageError/>}/>
                </Route>

                {/* Router Admin */}
                <Route path='Admin' element={ <AdminMasterPages/> }>
                    <Route index element={ <AdminHome/> }/>
                    <Route path='Chart_1' element={ <Chart_1/> }/>
                    <Route path='Home' element={ <AdminHome/> }/>
                    <Route path='Home2' element={ <Home2/> }/>
                    <Route path='GetEspData' element={ <GetEspData/> }/>

                    {/* Page error */}
                    <Route path='*' element={<PageError/>}/>
                </Route>

                {/* Page error */}
                <Route path='*' element={<PageError/>}/>
            </Routes>
        </div>
    )
}

export default App;