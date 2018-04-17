import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay'
import faStop from '@fortawesome/fontawesome-free-solid/faStop'

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
          <button onClick={() => {this.handleClick()}}>
          <FontAwesomeIcon icon={(this.props.isPlaying) ? faStop : faPlay}/>
          </button>
        );
    }
}

export default PlayButton;
