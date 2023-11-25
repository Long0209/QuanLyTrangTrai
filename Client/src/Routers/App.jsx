
import React from 'react' ;
import {Routes, Route} from 'react-router-dom';

// import component and Pages
import {DefaultLayout, LoginPage} from '@/Components';

// Default Pages
import {
    Home, 
    Home2, 
    News, 
    Support, 
    Infomations, 
    PageError 
} from '@/Pages';

// admin
import { 
    AdminManagePages,
    ListAccount, 
    ListFarm, 
    AdminHome 
} from '@/Components/Admin';


function App() {
    return (
        <>
            <div className="App max-h-screen">
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
                        <Route path='login' element={<LoginPage/>}/>
                        {/* Page error */}
                        <Route path='*' element={<PageError/>}/>
                    </Route>

                    {/* Router Admin */}
                    <Route path='Admin' element={ <AdminManagePages/> }>
                        <Route index element={ <AdminHome/> }/>
                        <Route path='listAccount' element={ <ListAccount/> } />
                        <Route path='listFarm' element={ <ListFarm/> } />

                        {/* Page error */}
                        <Route path='*' element={<PageError/>}/>
                    </Route>

                    {/* Page error */}
                    <Route path='*' element={<PageError/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;