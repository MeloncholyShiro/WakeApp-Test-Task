import React from 'react';
import { TCategoryNames } from '../../services/casino';
import classes from './CasinoList.module.scss';

interface ICasinoListProps {
    currentSection: TCategoryNames;
}

export const CasinoList: React.FC<ICasinoListProps> = ({ currentSection }: ICasinoListProps) => {
    const jopa = 'EuropeanRoulettePro';

    return (
        <section className={classes.games}>
            <ul className={classes.games__list}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                    return (
                        <li className={classes.games__item}>
                            <button className={classes.games__action} type="button">
                                <img
                                    src={`https://aws-origin.image-tech-storage.com/gameRes/sq/200/${jopa}.jpg`}
                                    alt={jopa}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
