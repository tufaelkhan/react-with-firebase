import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <div>
            <h3>Difference between state vs props.</h3>
            <p>state are mutable. it can be changed. it is work current component. state holds information about the component to other component as an component. state cannot be accessed by child component. states can be used for rendering dynamic changes with the component.</p>
            <p>props are immutable. it can not changed. it is read only data. it pass parent to childern component. it is pass to childern component in function. props work to unidirectional. props data pass in drilling. it can be litaral, boolean literal, string literal, template literal, number literal, plain object literal, array literal, JSX and variable having any kind of value.        
           </p>
            </div>
            <div>
            <h3>useState work?</h3>
            <p>useState is a react hook. useState occur some work. it is changable. it work one component not other component. it not pass the another component. it work only currenct component. it work behine the sine some work. useState hook allows to have state variables in functional components. useState pass the initial state to this function and it returns a vriable with the current state value and another function to update this value. 
             </p>
            </div>
            <div>
            <h3>useEffect work?</h3>
            <p>useEffect is a react build in hook. useEffect is a side Effect. it renders the component. useEffect the hook that runs side-effects independently of rendering. useEffect hook accepts two arguments. callback is a function that contains the side-effect logic. callback is executed right after the DOM update. dependencies is an optional array of dependencies. useEffect executes callback only if the dependencies have changed between renderings.  side Effect runs once after the initial rendering. side effect runs one after initial rendering and then only when any dependency value changes. </p>
            </div>
            <div>
            <h3>How does React work?</h3>
            <p>React is a library. library is a customizable. library is a fast component based. effiency DOM update. it devide a website some component. React virtual DOM can fast update website.react divide UI into isolated reusable pieces of code known as components. react component similarly javascript function waork. our component are made of two main ingredients: state and props. these two ingredients mean we can organise our components in a hierarchical structure that ensures a one way data flow means unidirectional way </p>
            </div>
        </div>
    );
};

export default Question;