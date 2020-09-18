import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Octokit } from "@octokit/rest";
import styles from "./About.module.css";


const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        userData: [],
        isError: false,
        errorMessage: ""
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: "karolinaewagorska"
        }).then(({data}) => {
            this.setState({
                repoList: data,
                isLoading: false});
        }).catch((error) => {
            this.setState({
                isLoading: false,
                isError: true,
                errorMessage: error
            });
        });
        octokit.users.getByUsername({
          username: "karolinaewagorska"
        }).then(({data}) => {
            this.setState({
                userData: data,
                isLoading: false});
        }).catch((error) => {
            this.setState({
                isLoading: false,
                isError: true,
                errorMessage: error
            });
        });
    }

    render() {
        const { isLoading, repoList, userData, isError, errorMessage } = this.state;
        return (
            <CardContent>
                <div className={styles.wrap}>
                    { isLoading  ? <CircularProgress className={styles.preload} /> :
                    <div>
                        <h1 className={styles.title}> About me </h1>
                        { isError ? "Somtehing went wrong " + errorMessage : 
                        <div className={styles.repo}>
                            <div>
                                <p> User: {userData.login} </p>
                            </div>
                            <div>
                                <p>My repositories:</p>
                                <ol>
                                    {repoList.map((repo) => (<li key={repo.id}  className={styles.repolist} >
                                        <a href ={repo.html_url} target="_blank">{repo.name}</a>
                                    </li>))}
                                </ol>
                            </div>
                        </div>
                        }
                    </div>
                    }
                </div>
            </CardContent>);
    }
}

export default About;
