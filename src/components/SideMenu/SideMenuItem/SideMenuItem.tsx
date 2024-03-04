import type { NavLinkProps } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import cnBind from 'classnames/bind';
import { Ripple } from 'primereact/ripple';

import styles from './SideMenuItem.module.scss';


const cx = cnBind.bind(styles);

export interface SideMenuItemProps
    extends Omit<NavLinkProps, 'to' | 'className' | 'id'> {
    id: number;
    disabled?: boolean;
    path?: string;
    title: string;
    active?: boolean;
    // ? icon from https://primereact.org/icons/
    icon?: (() => JSX.Element) | string;
    className?: string;
    items?: SideMenuItemProps[];
    isActive?: boolean;
}

const Icon = ({ icon: Icon }: Pick<SideMenuItemProps, 'icon'>) => {
    switch (typeof Icon) {
        case 'string':
            return <i className={cn('pi', Icon, cx('icon'))} />;
        case 'function':
            return <Icon />;
        default:
            return null;
    }
};

export const SideMenuItem = ({
    className,
    path,
    title,
    disabled,
    icon,
    onClick,
    id,
    items,
    isActive: isActiveProp,
    ...props
}: SideMenuItemProps) => {

    return (
        <NavLink
            id={`${id}`}
            className={({ isActive }) =>
                cn(
                    'p-ripple',
                    cx('item', className, {
                        active: isActiveProp || (!!path && isActive),
                        disabled,
                    }),
                )
            }
            {...props}
            to={path ?? '#'}
            replace={!path}
            aria-disabled={disabled}
            onClick={(e) => {
                if (disabled) {
                    e.preventDefault();
                } else {
                    onClick?.(e);
                }
            }}
        >
            <Icon icon={icon} />
            <span>{title}</span>
            <Ripple />
        </NavLink>
    );
};
