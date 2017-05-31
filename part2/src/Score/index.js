import React from 'react';

export default class Score extends React.Component {
    render() {
        let style = {
            fontSize: this.props.score + 12
        }

        return (
            <div style={style} id="message">{this.props.score}</div>
        )


    }
}