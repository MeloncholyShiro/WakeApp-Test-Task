import React from 'react';
import logotype from './Images/logotype.svg';
import classes from './Logotype.module.scss';

// TODO: React-Router Link

export const Logotype: React.FC = () => {
    return <img className={classes.logotype} src={logotype} alt="Room casino logotype" />;
};
