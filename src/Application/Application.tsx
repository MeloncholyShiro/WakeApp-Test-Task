import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { CasinoList } from '../Components/CasinoList';
import { Layout } from '../Components/Layout';
import { Menu } from '../Components/Menu';
import { FetchCategoryByName, TCategoryNames } from '../services/casino';
import { TModifiedGamesList } from './ApplicationTypes';
import './rootStyles/index.scss';

export const Application: React.FC = () => {
    const [gamesList, setGamesList] = useState<TModifiedGamesList[]>([]);
    const [currentSection, setCurrentSection] = useState<TCategoryNames>('allGames');

    const updateCurrentSection = (newSection: TCategoryNames) => setCurrentSection(newSection);

    useEffect(() => {
        (async () => {
            const newGamesList = await FetchCategoryByName(currentSection);
            const appendIDtoNewGamesList = newGamesList.map(game => ({ ...game, id: nanoid() }));
            setGamesList(appendIDtoNewGamesList);
        })();
    }, [currentSection]);

    return (
        <Layout>
            <Menu updateCurrentSection={updateCurrentSection} currentSection={currentSection} />
            <CasinoList gamesList={gamesList} />
        </Layout>
    );
};
