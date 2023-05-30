import * as React from 'react'
import { Features, Footer, Header, Hero, Technology } from './sections'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Technology />
      </main>
      <Footer />
    </>
  )
}

export default App
