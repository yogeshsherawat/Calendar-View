import React, { Fragment } from 'react';

const CalendarView2 = () => {

    return (
        <Fragment>
            <div className="container calendar-outer-div" >
                

                <table>
                    <tr className='week-ul'>
                        <th className='date-li-start'>
                            
                            <span className='float-right'>1</span>

                        </th>

                        <th className='date-li'>

                            <span className='float-right'>2</span>

                        </th>

                        <th className='date-li'>

                            <span className='float-right'>3</span>

                        </th>

                        <th className='date-li'>

                            <span className='float-right'>4</span>

                        </th>

                        <th className='date-li'>

                            <span className='float-right'>5</span>
                            
                        </th>

                        <th className='date-li'>

                            <span className='float-right'>6</span>

                        </th>

                        <th className='date-li'>

                            <span className='float-right'>7</span>

                        </th>
                    </tr>
                </table>


            </div>
        </Fragment>
    );
}


export default CalendarView2;