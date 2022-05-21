import React from 'react'
import CountUp from 'react-countup';
const Info = () => {
    
  return (
      <div class="">
        <div class="mb-10">
            <CountUp
                start={0}
                end={81}
                duration={4}
                >
                {({ countUpRef}) => (
                    <div>
                    <span class="text-red-500" ref={countUpRef} />
                    % of US Adults would be interested in technology that can sense elderly falls
                    </div>
                )}
            </CountUp>
        </div>
        <div class="mb-10">
        <CountUp
            start={0}
            end={13}
            duration={4}
            prefix=" "
            suffix=" "
            >
            {({ countUpRef}) => (
                <div>
                    Every
                <span class="text-red-500" ref={countUpRef} />
                seconds an older adult is sent to the ER after a fall
                </div>
            )}
        </CountUp>
        </div>
        <div class="mb-10">
        <CountUp
            start={0}
            end={50}
            duration={4}
            suffix=" "
            >
            {({ countUpRef}) => (
                <div>
                    In 2015, the total medical costs for falls totaled more than $
                <span class="text-red-500" ref={countUpRef} />
                billion
                </div>
            )}
        </CountUp>
        </div>
      
      </div>
    
  )
}

export default Info