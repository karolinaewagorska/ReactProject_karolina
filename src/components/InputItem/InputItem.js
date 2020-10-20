import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./InputItem.module.css";

class InputItem extends React.Component {
    
    state = {
        inputValue: "",
        error: false,
        errorMessage: "",
        items: []
    };

    onButtonClick = () => {
        if (this.state.inputValue !== "") {
            if (this.props.items.find((item) => this.state.inputValue === item.value)) {
                this.setState({
                error: true,
                errorMessage: "Something went wrong..." 
                });
            } else {
                this.setState({
                inputValue: "",
                error: false,
                errorMessage: ""
            });
            this.props.onClickAdd(this.state.inputValue);
            }
        } else {
            this.setState({
                error: true,
                errorMessage: "Something went wrong..."
            });
        }
    }

    render() {

        return (<div className={styles.field}>
            <TextField
                label="Add New Task"
                id="margin-dense"
                margin="dense"
                fullWidth
                variant="outlined"
                value={this.state.inputValue}
                error={this.state.error}
                helperText={this.state.errorMessage}
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
