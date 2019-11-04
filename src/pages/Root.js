/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import ApplicationRoutes from '../util/applicationRoutes';
import PageA from './PageA';
import PageB from './PageB';
import Home from './home/Home';


class Root extends Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Route
                    exact
                    path={ApplicationRoutes.home}
                    component={Home}
                />
                <Route
                    path={ApplicationRoutes.pageA}
                    component={PageA}
                />
                <Route
                    path={ApplicationRoutes.pageB}
                    component={PageB}
                />
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

Root.propTypes = {
    history: PropTypes.object.isRequired,
};
Root.defaultProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
