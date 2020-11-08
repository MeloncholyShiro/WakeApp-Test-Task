import React from 'react';
import { menuList } from '../../Enums/MenuList';
import { TCategoryNames } from '../../services/casino';
import { useBreakpointUp } from '../../utils/Hooks/useBreakpoint';
import classes from './Menu.module.scss';

interface IMenuProps {
    updateCurrentSection: (newSection: TCategoryNames) => void;
    currentSection: TCategoryNames;
}

type TMenu = React.FC<IMenuProps>;

export const Menu: TMenu = ({ updateCurrentSection, currentSection }: IMenuProps) => {
    const shouldMenuRender = useBreakpointUp(1250);

    if (!shouldMenuRender) {
        return null;
    }

    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>
                {menuList.map(item => {
                    return (
                        <li
                            className={classes.navigation__item}
                            style={{
                                backgroundImage: `url(${item.icon})`,
                                borderBottom: currentSection === item.name ? '2px solid #F3B233' : undefined,
                            }}
                            key={item.key}
                        >
                            <button
                                className={classes.navigation__action}
                                type="button"
                                onClick={() => updateCurrentSection(item.name)}
                            >
                                <h3 className={classes.navigation__title}>{item.displayedName}</h3>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
