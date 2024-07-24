import React from 'react';
import CountUp from 'react-countup';


function CounterCard() {
    //style for the text that displays
    const counterStyle = {
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: '800'
      };
    
      //style for the container that text display
    const containerStyle = {
    margin : '20px'
    };

      
  return (
    <div style={containerStyle}>
      <CountUp
            start={0}
            end={1250}
            duration={2.75}
            separator=","
            decimals={0}
            // decimal=","
            // prefix="EUR "
            // suffix=" left"
            // onEnd={() => console.log('Ended! 👏')}
            // onStart={() => console.log('Started! 💨')}

            >
            {({ countUpRef}) => (
                <div>
                    <span ref={countUpRef} style={counterStyle} />
                </div>
            )}

            
        </CountUp>
    </div>
  )
}

export default CounterCard
