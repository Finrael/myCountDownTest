import React from 'react';
import './countdownFormat.css';
import Countdown from 'react-countdown-now';

class CountdownWithLibrary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            timeToCountDown:3,
            format:'',
            numberCountdown:0,
            displayType:0,
            formatedTime:'',
        }
    }
    assignTime=(e)=>{
        this.setState({timeToCountDown:e.target.value});
    }
    assignDisplay=(e)=>{
        this.setState({displayType:e.target.value});
    }
    count = ()=>{
        let count = this.state.timeToCountDown;
        while (count>0){
            console.log(count, 'format type', this.state.displayType);
            count--;
        }
    }

    render(){
        return(
          <div>
              <div className='inputTime'>
               <label>On format select 0 for miliseconds and anything else for seconds</label>
                  <input type='text' placeholder='input time to countdown in seconds' onChange={this.assignTime}/>
                  <input type='text' placeholder='input desired format' onChange={this.assignDisplay}/>
              </div>   
            {
            this.state.displayType===0 ?<Countdown date={Date.now() + (this.state.timeToCountDown * 1000)} precision={1} intervalDelay={0} renderer={props => <div>{props.total}</div>} /> :  <Countdown date={Date.now() + (this.state.timeToCountDown * 1000)}/>
          }
          </div>  
        )
    }
}
export default CountdownWithLibrary