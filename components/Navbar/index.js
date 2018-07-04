import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpened: false,
            notFirstAnimation: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({
            mobileOpened: !this.state.mobileOpened,
            notFirstAnimation: true,
        });
    }
    render() {
        return (
            <React.Fragment>
                <nav
                    className={styles.Navbar}
                    {...this.props}
                >
                    <div
                        className={styles.TitleArea}
                    >
                        {this.props.title}
                    </div>
                    <div
                        className={styles.DesktopNav}
                    >
                        <ul>
                            {this.props.tabs.map((tab, key) => (
                                <li
                                    key={key}
                                    className={tab.active ? styles.ActiveLink : ''}
                                >
                                    <a
                                        href={tab.href}
                                    >
                                        {tab.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className={styles.MenuButton}
                    >
                        <button
                            onClick={this.toggleMenu}
                        >
                            Menu
                        </button>
                    </div>
                </nav>
                <div
                    className={`${styles.Popover} ${
                        this.state.mobileOpened
                            ? styles.PopOpen
                            : styles.PopClosed
                    }`}
                    {...this.props}
                    style={!this.state.notFirstAnimation ? { display: 'none' } : { ...this.props.style }}
                >
                    <div className={styles.MobileNav}>
                        <ul>
                            {this.props.tabs.map((tab, key) => (
                                <li
                                    key={key}
                                    className={tab.active ? styles.ActiveLink : ''}
                                >
                                    <a
                                        href={tab.href}
                                    >
                                        {tab.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Navbar.defaultProps = {
    title: <h1>Default Title</h1>,
    tabs: [],
};

Navbar.propTypes = {
    title: PropTypes.node,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        title: PropTypes.string,
        active: PropTypes.bool,
    })),
};

export default Navbar;
