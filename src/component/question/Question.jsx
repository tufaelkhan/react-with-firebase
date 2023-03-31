import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <div>
            <h3>Difference between state vs props.</h3>
            <p>state are mutable. it can be changed. it is work single component.</p>
            <p>props are immutable. it can not changed. it is read only data. it pass parent to childern component. it is pass to childern component in function. props work to unidirectional. props data pass in drilling. it can be litaral, boolean literal, string literal, template literal, number literal, plain object literal, array literal, JSX and variable having any kind of value. {        
            }</p>
            </div>
            <div>
            <h3>useState work?</h3>
            <p>useState is a react hook. useState occur some work. it is changable. it work one component not other component. it not pass the another component. it work only currenct component. it work behine the sine some work </p>
            </div>
            <div>
            <h3>useEffect work?</h3>
            </div>
            <div>
            <h3>How does React work?</h3>
            </div>
        </div>
    );
};

export default Question;