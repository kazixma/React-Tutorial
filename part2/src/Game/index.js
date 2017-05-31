import React from 'react';
import Timer from '../Timer';
import Score from '../Score';
export default class Game extends React.Component {

    state = {
        click: 0,
        gameStart: false


    }

    timeStart = 0;
    timeLimit = 5000;

    render() {
        let message;
        let timer = null;
        if (this.state.gameStart) {
            message = this.state.click;
            timer = (
                <Timer timeLimit={this.timeLimit} timeStart={this.timeStart} />
            )
        } else {
            message = 'กดตรงไหนก็ได้เพื่อเล่น';

        }


        return (
            <div>
                <div className="title" id="title">Clickr</div>
                <Score score={message}/>
                {timer}
            </div>
        )

    }

    componentWillMount() {
        window.addEventListener("click", this.onClick);

    }
    onClick = () => {
        if (this.state.gameStart && this.getTimeLeft() <= 0) {
            return;
        }

        this.setState({
            click: this.state.click + 1,
        })
        if (!this.state.gameStart) {
            this.timeStart = new Date().getTime();
            this.setState({
                gameStart: true

            });

            setTimeout(()=>{
                this.props.onGameFinish(this.state.click);
            },this.timeLimit + 500);

        }



    }


    getTimeLeft() {
        let currentTime = new Date().getTime();
    
        let timeDiff = (this.timeLimit + this.timeStart) - currentTime;
    
        if (timeDiff <= 0) {
            timeDiff = 0;
        }
        return timeDiff;
    }





}