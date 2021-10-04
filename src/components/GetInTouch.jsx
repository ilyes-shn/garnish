import React from 'react'
import { useHistory } from 'react-router-dom'
import {useData} from '../Context'

const style = {
color: 'white',
fontSize: '14px',
backgroundColor: 'black',
fontFamily: 'regular',
width: '124px',
height: '41px',
lineHeight: '41px',
textAlign: 'center',
borderRadius: '21px',
}

const GetInTouch = () => {
    const [data, dispatch] = useData()
    const history = useHistory()

    const click = () => {
        dispatch({type: 'off'})
        history.push('/contact')
    }
    return (
        <div className='getTouch forced' style={{cursor: 'pointer'}} onClick={click}>
            <h3 style={style}>Get in touch</h3>
        </div>
    )
}

export default GetInTouch
