import React from 'react';
import { Banner } from '../Banner';
import { Logotype } from '../Logotype';
import classes from './Layout.module.scss';

interface ILayoutProps {
    children?: React.ReactNode;
}

type TLayout = React.FC<ILayoutProps>;

export const Layout: TLayout = ({ children }: ILayoutProps) => {
    return (
        <>
            <div className={classes['banner-bg']}>
                <header className={classes.header}>
                    <Logotype />
                </header>
                <Banner />
            </div>
            <main>{children}</main>
        </>
    );
};
