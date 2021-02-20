import React, { Fragment } from 'react';

const CalendarView = ()=>{

        return (
            <Fragment>
                <div className="container outer-div" >
                    <ul className='week-ul'>
                        <li className="date-li-start">
                            1
                        </li>
                        <li className="date-li float-right">
                            2
                        </li>
                        <li className="date-li">
                            <span className='float-right'>3</span>
                        </li>
                        <li className="date-li">
                            4
                        </li>
                        <li className="date-li">
                            5
                        </li>
                        <li className="date-li">
                            6
                        </li>
                        <li className="date-li">
                            7
                        </li>
                    
                    </ul>
                </div>
            </Fragment>
        );
    }


export default CalendarView;