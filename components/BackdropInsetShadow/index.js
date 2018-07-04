import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const BackdropInsetShadow = ({ children, className, ...props }) => (
    <div
        {...props}
        className={`${styles.BackdropInsetShadow} ${className}`}
    >
        {children}
    </div>
);

BackdropInsetShadow.defaultProps = {
    children: [],
    className: '',
};

BackdropInsetShadow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.object,
        PropTypes.array,
    ]),
    className: PropTypes.string,
};

export default BackdropInsetShadow;
