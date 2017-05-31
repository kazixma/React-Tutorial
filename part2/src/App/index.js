import React from 'react';
import Game from '../Game';
import HighscoreStorage from '../Highscore/storage'
import Highscore from '../Highscore'
export default class App extends React.Component {
    state = {
        page: 'game',
    }
    highscore = new HighscoreStorage();
    render() {
        switch (this.state.page) {
            case 'game':
                return <Game onGameFinish={this.onGameFinish} />
            case 'highscore':
                return <Highscore highscore={this.highscore.highscore} onPlayAgain={this.onPlayAgain} />
            default:
                return <div>Error.</div>

        }

    }

    onPlayAgain = () => {
        this.setState({ page: 'game' })


    }

    onGameFinish = (score) => {
        let name = prompt(`Game ended! Your score is ${score}`);
        if (name) {
            this.highscore.add(name, score);
        }

        this.setState({
            page: 'highscore',
        })




    }
}