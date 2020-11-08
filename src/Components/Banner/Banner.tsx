import React from 'react';
import classes from './Banner.module.scss';

export const Banner: React.FC = () => {
    return (
        <div className={classes.banner}>
            <h1 className={classes.banner__title}>Sign up & get Welcome Bonus</h1>
            <h2 className={classes.banner__description}>€ 100 + 55 free spins</h2>
            <button className={classes.banner__action} type="button">
                Deposit now
            </button>
        </div>
    );
};
