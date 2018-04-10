import React from 'react';

class CueButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cue: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({cue: !this.props.cue}, () => {
            this.props.onCueClicked(!this.props.cue);
        });
    }

    render() {
        return (
          <button onClick={() => {this.handleClick()}}>Cue</button>
        );
    }
}

  export default CueButton;
