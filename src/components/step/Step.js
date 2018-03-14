import React from 'react';

class Step extends React.Component {
    render() {
        return (
            <div class="form-check form-check-inline">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" id={"inlineCheckbox" + this.props.number} value={"option" + this.props.number} /> {this.props.number}
                </label>
            </div>
        );
    }
}

export default Step;
