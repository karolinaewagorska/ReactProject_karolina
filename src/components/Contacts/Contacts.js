import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Contacts extends React.Component {
    render() {
        return (
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Contacts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    London School of Economics and Political Science <br /> Houghton Street <br /> London <br /> UK <br />
                </Typography>
            </CardContent>)
    }
};

export default Contacts;
