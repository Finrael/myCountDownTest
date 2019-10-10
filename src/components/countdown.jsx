import React from 'react';
import './countdownFormat.css';

class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            timeToCountDown:0,
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
    countdown=()=>{
        let count = this.state.timeToCountDown;
        setTimeout(() => {
        return (<div>{count}</div>)
        }, 1000);
    }
    formatedTime=()=>{
        let presentation = '';
        if (this.state.displayType===0){
            presentation=this.timeToCountDown;
            return <span>{presentation}</span>
        }
    }


    render(){
        return(
          <div>
              <div className='inputTime'>
                  <input type='text' placeholder='input time to countdown in seconds' onChange={this.assignTime}/>
                  <input type='text' placeholder='input desired format' onChange={this.assignDisplay}/>
                 <input type='submit' value='Start Countdown' onClick={this.count}/>
              </div>
              <div>
                 <h2> <label className='countDown'>{this.state.timeToCountDown + "  seconds with type:"+ this.state.displayType}</label></h2>
              </div>

          </div>  
        )
    }
}
export default Countdown