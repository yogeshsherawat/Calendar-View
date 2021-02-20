import React, { Fragment } from 'react';
import Card from './Card';
import Rating from './Rating'

const CalendarView3 = () => {



    return (
        <Fragment>
                <div className='calendar-outer-div'>
                <div className='row '>
                    <div className='col day text-center' style={{ padding: '0px', overflow:'hidden'}}>
                        <span className='date-text'>1</span><br />
                        <Card />
                    </div>
                    <div className='col day'>
                        <span className='float-right'>2</span>
                    </div>
                    <div className='col day'>
                        <span className='float-right'>3</span>
                    </div>
                    <div className='col day'>
                        <span className='float-right'>4</span>
                    </div>
                    <div className='col day'>
                        <span className='float-right'>5</span>
                    </div>
                    <div className='col day'>
                        <span className='float-right'>6</span>
                    </div>
                    <div className='col day'>
                        <span className='float-right'>7</span>
                    </div>
               </div>
            </div>

            
        </Fragment>
    );
}


export default CalendarView3;