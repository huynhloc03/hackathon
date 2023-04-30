import React from 'react'
import {FaLocationArrow} from 'react-icons/fa'
import {FaCalendarDay} from 'react-icons/fa'
const Search = () => {
  return (
    <div className='search container section'>
        <div className="sectionContainer grid">
            <div  className="button flex">
                <div className="oneButton ">
                    <span>Economy</span>
                </div>
                <div className="oneButton">
                    <span>Business Class</span>
                </div>
                <div className="oneButton">
                    <span>Fast Class</span>
                </div>
            </div>

            <div  className="inputs flex">
                    <div className="oneInput flex">
                        <div className="inputIcon">
                            <FaLocationArrow className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder='Going to...'/>
                        </div>
                    </div>
                    <div className="oneInput flex">
                        <div className="inputIcon">
                            <FaCalendarDay className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check In</h4>
                            <input type="text" placeholder='Add date'/>
                        </div>
                    </div>

                    <div className="oneInput flex">
                        <div className="inputIcon">
                            <FaCalendarDay className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check Out</h4>
                            <input type="text" placeholder='Add date'/>
                        </div>
                    </div>

                    <button className='button buttonBlock flex'>Search Flight</button>
            </div>
        </div>
    </div>
  )
}

export default Search