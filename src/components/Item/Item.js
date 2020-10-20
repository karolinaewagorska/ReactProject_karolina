import React from 'react';
import classnames from "classnames";
import styles from "./Item.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

class Item extends React.Component {

    render() {
        const { value, isDone, onClickDone, id, onClickDelete } = this.props;

        return (<div className={styles.item}>
            <GreenCheckbox 
                checked={isDone}
                onClick={() => onClickDone(id)}
                />
            <div className={
                classnames({
                    [styles.item]: true,
                    [styles.done]: isDone
                })}>  
            {value}
            </div>
            <DeleteRoundedIcon
                className={styles.deleted}
                onClick={() => onClickDelete(id)}
            />
        </div>);
    }
}

Item.propTypes = {
    value: PropTypes.string,
    isDone: PropTypes.bool
};

export default Item;
