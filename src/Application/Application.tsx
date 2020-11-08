import React, { useState } from 'react';
import { CasinoList } from '../Components/CasinoList/CasinoList';
import { Layout } from '../Components/Layout';
import { Menu } from '../Components/Menu';
import { TCategoryNames } from '../services/casino';
import './rootStyles/index.scss';

export const Application: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<TCategoryNames>('allGames');

    const updateCurrentSection = (newSection: TCategoryNames) => setCurrentSection(newSection);

    return (
        <Layout>
            <Menu updateCurrentSection={updateCurrentSection} currentSection={currentSection} />
            <CasinoList currentSection={currentSection} />
        </Layout>
    );
};
