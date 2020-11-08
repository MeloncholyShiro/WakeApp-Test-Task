import { nanoid } from 'nanoid';
import allGames from '../Components/Menu/Images/all-games.svg';
import cardGames from '../Components/Menu/Images/card-games.svg';
import liveCasino from '../Components/Menu/Images/live-casino.svg';
import roulette from '../Components/Menu/Images/roulette.svg';
import slotGames from '../Components/Menu/Images/slot-games.svg';
import tableGames from '../Components/Menu/Images/table-games.svg';
import topGames from '../Components/Menu/Images/top-games.svg';

export const icons = { allGames, topGames, liveCasino, slotGames, roulette, tableGames, cardGames } as const;

interface IMenuListItem {
    readonly key: string;
    readonly name: keyof typeof icons;
    readonly displayedName: string;
    readonly icon: string;
}

const fillMenuList = () => {
    const filledMenuList: IMenuListItem[] = [];
    for (const [nameOfItem, pathToIcon] of Object.entries(icons)) {
        const camelCaseToUpperCaseWords = nameOfItem
            .split(/(?=[A-Z])/)
            .map(item => item.toUpperCase())
            .join(' ');
        const menuItem: IMenuListItem = {
            key: nanoid(),
            name: nameOfItem as keyof typeof icons,
            displayedName: camelCaseToUpperCaseWords,
            icon: pathToIcon,
        };
        filledMenuList.push(menuItem);
    }

    return filledMenuList;
};

export const menuList: readonly IMenuListItem[] = fillMenuList();
