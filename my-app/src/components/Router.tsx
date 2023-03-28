import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import FeedPage from '../pages/FeedPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import SignupPage from '../pages/SignupPage';
import PublicProfilePage from '../pages/PublicProfilePage';

function Router(){
    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/feed' element={<FeedPage/>}/>
            <Route path='/profile' element={<ProfilePage />}/>
            <Route path='/:username' element={<PublicProfilePage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/signup' element={<SignupPage />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    )
}

export default Router;