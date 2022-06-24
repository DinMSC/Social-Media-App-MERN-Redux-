import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
    return (
        <Router>
            <Container maxidth='lg'>
                <Navbar />
                <Routes>
                    <Route exact path={'/'} element={<Home />} />
                    <Route exact path={'/auth'} element={<Auth />} />
                </Routes>
                <Home />
            </Container>
        </Router>
    );
};

export default App;
