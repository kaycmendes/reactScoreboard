import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {

    static propTypes = {
        handleChange : PropTypes.func,
        handleSubmit: PropTypes.func,
    }

    inputRef = React.createRef();

    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.inputRef.current.value);
        e.currentTarget.reset();
    }
    
    render() {
        console.log(this.state.value)
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                    type='text'
                    ref={this.inputRef}
                    placeholder='Enter a player name'
                />
                <input
                    type='submit'
                    value="Add value"
                    onChange = {this.handleChange}
                   
                />
            </form>
        )
    }
}

export default AddPlayer