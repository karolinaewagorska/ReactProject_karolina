import React from 'react';
import TextField from "@material-ui/core/TextField";
import styles from "./InputItem.module.css";
import Button from "@material-ui/core/Button";

class InputItem extends React.Component {
    state = {
        inputValue: "",
        error: false
    };

    onButtonClick = () => {
        this.setState({
            inputValue: ""
        });

        this.props.onClickAdd(this.state.inputValue);
    }

    render() {
        const { onClickAdd } = this.props;

        return (<div>
            <TextField
                label="Add New Task:"
                id="margin-dense"
                margin="dense"
                fullWidth
                variant="outlined"
                value={this.state.inputValue}
                error={this.props.error}
                onChange={(event) => this.setState({ inputValue: event.target.value })}
            />   
            <Button 
                variant="contained"
                fullWidth
                onClick={this.onButtonClick}
            >
                Add Task
            </Button>
        </div>);
    }
}

export default InputItem;
