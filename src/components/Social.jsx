import React from 'react'

const icon = {
width: '44px',
height: '44px',
backgroundColor: 'black',
borderRadius: '10px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
margin: '0px 3.5px',
cursor: 'pointer'
}

const social = {
    display: 'flex'
}

const Social = () => {
    return (
        <div style={social}>
            <div style={icon}>
                <img src='/assets/images/fb.svg' alt='fb' />
            </div>
            <div style={icon}>
                <img src='/assets/images/insta.svg' alt='insta' />
            </div>
            <div style={icon}>
                <img src='/assets/images/youtube.svg' alt='youtube' />
            </div>
        </div>
    )
}

export default Social
