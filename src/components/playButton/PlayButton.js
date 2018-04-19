import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay'
import faPause from '@fortawesome/fontawesome-free-solid/faPause'

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
          <FontAwesomeIcon size="7x" border onClick={() => {this.handleClick()}} icon={(this.props.isPlaying) ? faPause : faPlay}/>
        );
    }
}

export default PlayButton;
