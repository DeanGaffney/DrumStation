import React from 'react';

class PlayButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isPlaying: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({isPlaying: !this.props.isPlaying}, () => {
            this.props.onPlayClicked(!this.props.isPlaying);
        });
    }

    render() {
        return (
          <button onClick={() => {this.handleClick()}}>{(this.props.isPlaying) ?  "Stop" : "Play"}</button>
        );
    }
}

export default PlayButton;
