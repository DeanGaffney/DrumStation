import React from 'react';

class GlobalClearButton extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onGlobalClearClicked();
    }

    render() {
        return (
          <button onClick={() => {this.handleClick()}}>Clear All</button>
        );
    }
}

  export default GlobalClearButton;
