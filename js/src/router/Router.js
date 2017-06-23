import React, { Component } from 'react';
import { Router as Routes } from 'director/build/director';


window.Routes = Routes;
export default class Router extends Component {
    state = {}
    componentDidMount() {
        const {children} = this.props;
        const {Children, cloneElement} = React;

        const onRoute = (child, ...args) => {
            // console.log(this.props, 'props')
            const currentPage = cloneElement(child, {
                routeParams: args,
            })

            this.setState({ currentPage: this.props.currentRoute, })
        }

        const routes = Children.map(children, (child) => child.props.url)
            .reduce((_hash, url, index) => {
                _hash[url] = (...args) => onRoute(children[index], ...args);
                return _hash;
             }, {})
            
        this.router = Routes(routes);
        this.router.init();
        this.router.setRoute(this.props.currentRoute);
    }
    componentWillReceiveProps(nextProps) {
        const nUrl = nextProps.currentRoute;
        const pUrl = this.props.currentRoute;

        if (nUrl !== pUrl)
            this.router.setRoute(nUrl);
    }
    render() {
        const children = React.Children.toArray(this.props.children).filter((child) => {
            return child.props.url === (this.state.currentRoute || this.props.currentRoute);
        })

        return children[0] || null;
    }
}

export class Route extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

export class Link extends Component {
    click(e, route) {
        e.preventDefault();
        this.props.dispatch('UPDATE_ROUTE', {
            route,
        })
    }
    render() {
        const {currentRoute, route} = this.props;
        const classes = ['ui', 'button'];
        if (currentRoute === route) {
            classes.push('primary')
        }
        return (<a className={classes.join(' ')}
                   onClick={(e) => this.click(e, route)}
                   href={`#${route}`}>{this.props.children}</a>)
    }
}