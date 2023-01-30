import React from 'react'
import './hero.css'
import Typewriter from 'typewriter-effect'
const Hero = () => {
    return (
        <section className='hero'>
            <div className="main-content">
                <p className='sponsor'>
                <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(80)
                                .typeString("AICTE Sponsored International conference on")
                                .start()
                        }}
                    />
                </p>

                <h1 className='title'>
                    Applications of AI, ML, DL, Big Data on recent societial Issues (ICARSI'23)
                </h1>
                <p className='date'>
                    21<sup>st</sup> and 22<sup>nd</sup> April 2023.
                </p>
                <p className='dept'>
                    By Department Of Computer Science Engineering
                </p>
            </div>
        </section>
    )
}
export default Hero