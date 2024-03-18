import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from './components/Footer'

const index = () => {
  return (
    <div>
        <Header/>
       <section>
          <Content/>
       </section>
       <footer>
        <Footer>

        </Footer>
       </footer>
    
    </div>
  )
}

export default index