import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Jumbotron = ({
    children,
    imgSrc,
    imgAlt,
    imgRadius,
    imgStyle,
    ...props
}) => (
    <div
        className={styles.Jumbotron}
        {...props}
    >
        <div
            className={styles.JumbotronInner}
        >
            <img
                className={styles.JumbotronImage}
                src={imgSrc}
                alt={imgAlt}
                height={imgRadius}
                width={imgRadius}
                style={imgStyle}
            />
            <div>
                {children}
            </div>
        </div>
    </div>
);

Jumbotron.defaultProps = {
    children: [],
    imgStyle: {},
};

Jumbotron.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.object,
        PropTypes.array,
    ]),
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    imgRadius: PropTypes.number.isRequired,
    imgStyle: PropTypes.object,
};

export default Jumbotron;
