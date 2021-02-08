import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            textInput: '',
        }
    };

    handleChanges = e => {
        this.setState({
            textInput: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.textInput);
        this.setState({
            textInput: '',
        })
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.textInput}
                    onChange={this.handleChanges}
                    type='text'
                    name='task'
                    className='form'
                ></input>
                <button className='addBtn'>Add Item</button>
            </form>
        )
    }
}

export default TodoForm;


