import React from 'react';

class ClearButton extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClearClicked(this.props.drumType);
    }

    render() {
        return (
          <button onClick={() => {this.handleClick()}}>Clear</button>
        );
    }
}

  export default ClearButton;
