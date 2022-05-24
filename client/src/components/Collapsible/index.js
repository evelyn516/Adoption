import React, { useState } from "react";

const Collapsible = ({ open, children }) => {
    const [isOpen, setIsOpen] = useState(open);
  
    const handleFilterOpening = () => {
      setIsOpen((prev) => !prev);
    };


  return (
    <div className='collapsible'>
            <button className='seeMore' onClick={handleFilterOpening}>
              {!isOpen  ? 'See More' : 'See Less' }</button>
                
              <div>
                {isOpen && 
                <div className="about">
                  {children}
                </div>}
              </div>
    </div>
  )
}

    

export default Collapsible;
