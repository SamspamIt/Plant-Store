import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Landing Page/Home';
import Plants from './Navbar/Plant';
import Pots from './Navbar/Pots';
import Sale from './Navbar/Sale';
import Care from './Navbar/Care';
import Subscriptions from './Navbar/Subscriptions';
import Layout from './Components/Layout';

const App = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/plants" element={<Plants/>}/>
          <Route path="/pots" element={<Pots/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="/care" element={<Care/>}/>
          <Route path="/subscriptions" element={<Subscriptions/>}/>
        </Routes>
    </Layout>
  )
}

export default App
