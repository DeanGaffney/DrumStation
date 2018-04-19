import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEraser from '@fortawesome/fontawesome-free-solid/faEraser'


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
          <FontAwesomeIcon size="7x" border onClick={() => {this.handleClick()}} icon={faEraser} />
        );
    }
}

  export default ClearButton;
