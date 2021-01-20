import React from 'react'
import Layout from './components/Layout'

import Header from './components/Header'
import Leader from './components/Leader'
import Creations from './components/Creations'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Header></Header>
      <main>
        <Leader></Leader>
        <Creations></Creations>
        <Footer></Footer>
      </main>
    </Layout>
  );
}

export default App;
