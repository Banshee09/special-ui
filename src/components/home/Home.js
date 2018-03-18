import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div id="main">
            <div className="jumbotron">
                <div className="container">
                    <h1>Every Cent Counts</h1>
                    <p>
                        The system is designed to compare the prices of products in different stores,
                        which was implemented to demostrated the study outcome of latest JavaScript frameworks.
                    </p>
                    <p><Link className="btn-lg btn-primary" to={"/categories"}>Explore</Link></p>
                </div>
            </div>

            <p>
                It consists of two projects <a href="https://github.com/Banshee09/special-api"> special-api </a>
                and<a href="https://github.com/Banshee09/special-ui"> special-ui</a>, which are avaiable in Git Hub.
                The main techonology used in this system is shown in the table below. For more details about my skills and experiecne,
                please refer to <Link to={"/about"}>About Me</Link> page.
            </p>
            <br/>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Key Tech</th>
                            <th>Deployment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="info">
                            <td>Frontend</td>
                            <td>React, Redux, Bootstrap</td>
                            <td>AWS S3</td>
                        </tr>
                        <tr>
                            <td>Backend</td>
                            <td>Node, Express, Mongoose</td>
                            <td>AWS Elastic Beanstalk</td>
                        </tr>
                        <tr className="info">
                            <td>Database</td>
                            <td>NoSQL - MongoDB</td>
                            <td>MongoDB Atlas</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Home;