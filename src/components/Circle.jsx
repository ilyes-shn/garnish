import React from 'react'

const styles = {
    position: 'absolute',
    top: 110,
    left: 0,
    zIndex: '-10',
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between'
}

const Circle = () => {
    return (
        <div style={styles} className='circles'>
            <img height='400' src="/assets/images/Drop_web.svg" alt="circles" />
            <div style={{display: 'flex', flexDirection: 'column', transform: 'translateY(-150px)'}}>
              <img height='300' src="/assets/images/circles_web.svg" alt="circles" />
                <img height='100' style={{marginTop: '50px', transform: 'translate(150px, 150px)'}} src="/assets/images/Shape 2_web.svg" alt="circles" />
            </div>
        </div>
    )
}

export default Circle
