import React, { Fragment } from 'react';
import { CheckedStar, UnCheckedStar } from './Stars';


const Rating = (props) => {

    let { rating } = props
    let FinalRating = [];
    
    for (let i = 0; i < rating; i++){
        FinalRating.push(<CheckedStar key={i}/>);
    }
    for (let i = rating+1; i <= 5; i++){
        FinalRating.push(<UnCheckedStar key={i}/>);
    }
    
    return (
        <Fragment>
            <div className='text-center rating-div'>
                {FinalRating}
            </div>
        </Fragment>
    );

}

export default Rating;