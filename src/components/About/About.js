import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class About extends React.Component {
    render() {
        return (
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    About
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    I need a hero <br /> I'm holding out for a hero 'til the end of the night<br />
                    He's gotta be strong <br />
                    And he's gotta be fast <br />
                    And he's gotta be fresh from the fight. <br />
                </Typography>
            </CardContent>);
    }
}

export default About;
