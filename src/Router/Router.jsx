import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'

function Router() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes >
    )
}

export default Router