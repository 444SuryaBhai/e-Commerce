import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className='descrptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews(122)
                </div>
            </div>
            <div className="descriptionbox-descripton">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nam optio possimus velit sint cum repudiandae, recusandae
                    autem, rerum quos in doloremque. Consectetur reiciendis accusantium
                    rerum est placeat asperiores ad autem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum dolore commodi, doloremque praesentium reprehenderit
                    at nihil veniam amet, recusandae aut nobis delectus
                    explicabo voluptate iste. Natus adipisci odit quia non!</p>
            </div>
        </div>
    )
}
