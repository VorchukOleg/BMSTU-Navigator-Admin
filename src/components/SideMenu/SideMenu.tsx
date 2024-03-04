import cnBind from 'classnames/bind';
import type { SideMenuItemProps } from './SideMenuItem';
import { SideMenuItem } from './SideMenuItem';
import styles from './SideMenu.module.scss';
import { HTMLElementProps } from '../../types/HTMLElementProps.types';

const cx = cnBind.bind(styles);

export interface SideMenuProps extends HTMLElementProps {
    items: SideMenuItemProps[];
}

const SideMenuInner = ({
    className,
    items,
    ...props
}: SideMenuProps) => {
    return (
        <aside {...props} className={cx('side-menu', className)}>
            <nav>
                <ul className={cx('layout-menu')}>
                    {items.map((props) => (
                        <li key={props.id}>
                            <SideMenuItem {...props} />
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export const SideMenu = (props: SideMenuProps) => {
    return (
        <SideMenuInner {...props} />
    );
};
