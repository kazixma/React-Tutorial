import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {

    state = {
        click: 0,
        gameStart: false


    }

    timeStart = 0;
    timeLimit = 5000;

    render() {
        let message;
        if (this.state.gameStart) {
            message = this.state.click;
        } else {
            message = 'กดตรงไหนก็ได้เพื่อเล่น';

        }
        let timer = '';
        if (this.state.gameStart) {
            timer = `เหลือเวลาอยู่ ${this.formatTime()} sec`;

        }

        return (
            <div>
                <div className="title" id="title">Clickr</div>
                <div id="message">{message}</div>
                <div id="timer">{timer}</div>
            </div>
        )

    }

    componentWillMount() {
        window.addEventListener("click", this.onClick);

    }
    onClick = () => {


        this.setState({
            click: this.state.click + 1,
        })
        if (!this.state.gameStart) {
            this.timeStart = new Date().getTime();
            this.setState({
                gameStart: true

            });
            this.startTimer();
        }

    }

    startTimer() {
        this.interval = setInterval(() => {
            let timeDiff = this.getTimeLeft();
            if (timeDiff <= 0) {
                clearInterval(this.interval);
                timeDiff = 0;
                window.removeEventListener('click', this.onClick);
            }
            this.forceUpdate();



        }, 100)



    }
    getTimeLeft() {
        let currentTime = new Date().getTime();
        let timeDiff = (this.timeLimit + this.timeStart) - currentTime;
        if (timeDiff <= 0) {
            timeDiff = 0;
        }
        return timeDiff;
    }
    formatTime(){

        return (this.getTimeLeft() / 1000).toFixed(1);

    }


}