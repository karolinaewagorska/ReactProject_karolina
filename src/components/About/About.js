import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Octokit } from "@octokit/rest";
import classnames from "classnames";
import styles from "./About.module.css";
import Pagination from "@material-ui/lab/Pagination";


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
            per_page: perPage,  /*eslint camelcase: ["error", {properties: "never"}]*/
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
                        <h1 className={styles.title}> ABOUT ME </h1>
                        { isError ? "Something went wrong " + errorMessage : 
                        <div className={styles.repo}>
                            <div className={styles.info}>
                                <div className={styles.bio}>
                                    <a  className={styles.name} 
                                        href="https://github.com/karolinaewagorska/" 
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {userData.login}</a>
                                    <p>{userData.bio}</p>   
                                </div>
                                <div className={styles.image}>
                                    <img className={styles.photo} src={userData.avatar_url} alt="UserPhoto" />
                                </div>
                            </div>
                            <div>
                                <p className={styles.text}>My repositories:</p>
                                <ul className={styles.repoList}>
                                    {repoList.map((repo) => (<li key={repo.id}  className={styles.repo_info} >
                                        <a className={styles.link} 
                                            href ={repo.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                            {repo.name}</a>
                                        <div className={styles.repos}>    
                                            <span className={classnames({
                                                [styles.language]: true,
                                                [styles.python]: repo.language === "Python",
                                                [styles.js]: repo.language === "JavaScript"
                                            })}>
                                                {repo.language}
                                            </span>
                                            <div className={styles.git_bio}>
                                                <span className={styles.fork}>{repo.forks_count}</span>
                                                <span className={styles.star}>{repo.stargazers_count}</span>
                                                <span className={styles.updated}>{" Updated: "+ new Date(repo.updated_at).toLocaleDateString("en-GB")}</span>
                                            </div>
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
        );
    }
}

export default About;
