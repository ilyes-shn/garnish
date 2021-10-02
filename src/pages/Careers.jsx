import React from 'react'
import Accordion from '../components/Accordion'
import Layout from '../components/Layout'
import '../styles/careers.scss'

const data = {
    one: {
        title: 'Photography Assistent'
    },
    two: {
        title: 'Director of Photography'
    },
    three: {
        title: 'Scenographer'
    }
}

const Careers = () => {
    return (
        <Layout>
            <div className='careers'>
                <h1>Careers</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</h2>
                <div className='accordions'>
                    <Accordion title={data.one.title} />
                    <Accordion title={data.two.title} />
                    <Accordion title={data.three.title} />

                </div>
            </div>
        </Layout>
    )
}

export default Careers
