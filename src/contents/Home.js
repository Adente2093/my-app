import React, { Component } from 'react'
import Social from '../Components/Social'
import profilepic from '../img/pat3.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img hrc="img/pat3.jpg" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Sudarat Treesamarnruk' , 'I am Junior Engineer']} speed={80} eraseDelay={500} className="typingeffect" />
                <Social />
            </div>
        )
    }
}

export default Home