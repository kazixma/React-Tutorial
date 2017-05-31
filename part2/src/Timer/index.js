import React from 'react';

export default class Timer extends React.Component {
    render() {

        let timer = `เหลือเวลาอยู่ ${this.formatTime(this.getTimeLeft())} sec`;

        return (
            <div id="timer">{timer}</div>
        )

    }

    componentDidMount(){

        this.startTimer();
    }



    formatTime(time) {
      
        return (time / 1000).toFixed(1);

    }

    getTimeLeft() {
        let currentTime = new Date().getTime();
        let timeDiff = (this.props.timeLimit + this.props.timeStart) - currentTime;
        if (timeDiff <= 0) {
            timeDiff = 0;
        }
        return timeDiff;
    }
    
    startTimer() {
        this.interval = setInterval(() => {
            let timeDiff = this.getTimeLeft();
            if (timeDiff <= 0) {
                clearInterval(this.interval);
                timeDiff = 0;
            }
            this.forceUpdate();

        }, 100)

    }

}