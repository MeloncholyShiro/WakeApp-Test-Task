import React from 'react';
import { TModifiedGamesList } from '../../Application/ApplicationTypes';
import classes from './CasinoList.module.scss';

interface ICasinoListProps {
    gamesList: TModifiedGamesList[];
}

export const CasinoList: React.FC<ICasinoListProps> = ({ gamesList }: ICasinoListProps) => {
    return (
        <section className={classes.games}>
            <ul className={classes.games__list}>
                {gamesList.map(item => {
                    return (
                        <li className={classes.games__item} key={item.id}>
                            <button className={classes.games__action} type="button">
                                <img
                                    src={`https://aws-origin.image-tech-storage.com/gameRes/sq/200/${item.item_title}.jpg`}
                                    alt={`${item.application_name} by ${item.game_provider}`}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
