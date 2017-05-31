import React from 'react';

export default class HighScore extends React.Component {
    render() {
        let table = [];
        for (let i = 0; i < this.props.highscore.length; i++) {
            table.push((
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{this.props.highscore[i].name}</td>
                    <td>{this.props.highscore[i].score}</td>
                </tr>

            ))

        }
        return (

            <div>
                <h1> HighScore</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>ชื่อ</th>
                            <th>คะแนน</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}

                    </tbody>
                </table>
                <button onClick={this.props.onPlayAgain}>Play Again</button>

            </div>

        )

    }


}