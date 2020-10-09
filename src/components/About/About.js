import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Octokit } from "@octokit/rest";
import classnames from "classnames";
import styles from "./About.module.css";
import Pagination from "@material-ui/lab/Pagination";
import { userInfo } from "os";

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        userData: [],
        isError: false,
        errorMessage: "",
        currentPage: 1,
        perPage: 4
    }

    componentDidMount() {
        this.requestRepolist(this.state.perPage, this.state.currentPage);

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

    requestRepolist = (perPage, selectedPage) => {
        octokit.repos.listForUser({
            username: "karolinaewagorska",
            perPage: perPage,
            page: selectedPage
        }).then(({data}) => {
            this.setState({
                repoList: data,
                isLoading: false,
                currentPage: selectedPage
            });
        }).catch((error) => {
            this.setState({
                isLoading: false,
                isError: true,
                errorMessage: error
            });
        });
    }

    render() {
        const { isLoading, repoList, userData, isError, errorMessage, currentPage, perPage } = this.state;
        const switchPage = (event, page) => {
            this.requestRepolist(perPage, page);
        };

        return (
            <div className={styles.wrap}>
                    { isLoading  ? <CircularProgress className={styles.preload} /> :
                    <div>
                        <h1 className={styles.title}> About me </h1>
                        { isError ? "Something went wrong " + errorMessage : 
                        <div className={styles.repo}>
                            <div>
                                <p> {userData.login} </p>
                                <p>{userData.bio}</p>
                                <div className={styles.image}>
                                    <img src={userData.avatar_url} alt="Photo" />
                                </div>
                            </div>
                            <div>
                                <p>My repositories:</p>
                                <ul>
                                    {repoList.map((repo) => (<li key={repo.id}  className={styles.repolist} >
                                        <a className={styles.link} 
                                            href ={repo.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                            {repo.name}</a>
                                        <div className={styles.repo_info}>
                                            <span className={classnames({
                                                [styles.language]: true,
                                                [styles.python]: repo.language === "Python",
                                                [styles.js]: repo.language === "JavaScript"
                                            })}>
                                                {repo.language}
                                            </span>
                                        </div>
                                    </li>))}
                                </ul>
                            </div>
                            <Pagination 
                                onChange={switchPage}
                                page={currentPage}
                                count={Math.ceil(userData.public_repos/perPage)}
                                variant="outlined"
                                shape="rounded"
                                color="primary" />
                        </div>
                        }
                    </div>
                    }
            </div>
        )
    };
}

export default About;
