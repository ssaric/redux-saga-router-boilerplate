import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

import './home.css';
import ApplicationRoutes from '../../util/applicationRoutes';

class PageA extends Component {
    render() {
        return (
            <div className="home">
                <header className="home-header">
                    <img src={logo} className="home-logo" alt="logo" />
                    <p>
                        Edit
                        {' '}
                        <code>src/home.js</code>
                        {' '}
and save to reload.
                    </p>
                    <a
                        className="home-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <div className="home-controls">
                        <Link to={ApplicationRoutes.pageA}> Page A</Link>
                        <Link to={ApplicationRoutes.pageB}> Page B</Link>
                    </div>
                </header>
            </div>
        );
    }
}

PageA.propTypes = {};
PageA.defaultProps = {};

export default PageA;
