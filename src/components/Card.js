import React, { Fragment } from 'react';
import Rating from './Rating'; 
import Avatar from './Avatar';

const Card = () => {

    return (
        <Fragment>
            <Rating rating={2} />
            <div className='text-center' style={{overflow:'hidden', height:'125px'}} >
                <Avatar />
            </div>
            <Rating rating={3}/>
        </Fragment>
    );


}

export default Card;