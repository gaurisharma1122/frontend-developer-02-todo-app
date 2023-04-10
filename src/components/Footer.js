import React from 'react'

const Footer = ({ handleCount, handleClearComplete, taskFilter, setTaskFilter }) => {

    return (
        <div className='footer'>
            <div className="footer-container">
                <p>{handleCount()} tasks left</p>
                <ul>
                    <li className={taskFilter === 'All' && 'active-btn'} onClick={()=> setTaskFilter('All')}>All</li>
                    <li className={taskFilter === 'Active' && 'active-btn'} onClick={()=> setTaskFilter('Active')}>Active</li>
                    <li className={taskFilter === 'Completed' && 'active-btn'} onClick={()=> setTaskFilter('Completed')}>Completed</li>
                </ul>
                <p className='clear-btn' onClick={handleClearComplete}>Clear completed</p>
            </div>
        </div>
    )
}

export default Footer
