import React, { Component } from 'react'
import Widecard from '../Components/Widecard'

class Education extends Component {
    render () {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>My Education</h1>
                <Widecard title="Instrumentation System Engineer" where="King Mongkut's University of Technology North Bangkok" from="2016"to="Present" />
                <Widecard title="High School" where="Banmiwittaya School" from="2011" to="2016" />

            </div>
        )
    }

}

export default Education 