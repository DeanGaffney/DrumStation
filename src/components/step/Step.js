import React from 'react';

class Step extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            shouldPlayStep: false
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * Triggered when a step component is changed and updates the App.js state
     * @param {DOM Event} event 
     */
    handleInputChange(event) {
        const value = event.target.checked;

        this.setState({
            "shouldPlayStep": value
        });

        this.props.onStepSequencerChange(this.props.drumType, this.props.number, value);
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" 
                           id={"inlineCheckbox" + this.props.number} 
                           value={"option" + this.props.number} 
                           onChange={this.handleInputChange}
                           checked={this.props.shouldPlayStep}/> {this.props.number}
                </label>
            </div>
        );
    }
}

export default Step;
