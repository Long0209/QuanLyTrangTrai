
import React from 'react' ;
import {Routes, Route} from 'react-router-dom';

// import component and Pages
import {DefaultLayout, LoginPage} from '@/Components';
import {Home, News, Test, PageError } from '@/Pages';

function App() {
    return (
        <>
            <Routes>
                {/* Router Default */}
                <Route path='/' element={<DefaultLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='news' element={<News/>}/>

                    <Route path='test' element={<Test/>}/>
                    {/* <Route path='infomaitons' element={<Infomations/>}/> */}
                    <Route path='login' element={<LoginPage/>}/>
                    {/* Page error */}
                    <Route path='*' element={<PageError/>}/>
                </Route>

                {/* Router Admin */}
                    {/* <Route path='/Admin' element={ <AdminLayout/> } >
                    <Route index element={ <AdminPage/> } />
                    <Route path='listAccount' element={ <ListAccount/> } />
                    <Route path='listFarm' element={ <ListFarm/> } /> */}

                    {/* Page error */}
                    {/* <Route path='*' element={<PageError/>}/>
                </Route> */}

                {/* Page error */}
                <Route path='*' element={<PageError/>}/>
            </Routes>
        </>
    )
}

export default App;