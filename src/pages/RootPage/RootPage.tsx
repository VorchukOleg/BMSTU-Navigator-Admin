import cnBind from 'classnames/bind';
import styles from './RootPage.module.scss';

import { Outlet, ScrollRestoration } from 'react-router-dom';
import { AppHeader } from '../../components/AppHeader';
import { SideMenu } from '../../components/SideMenu';

const cx = cnBind.bind(styles);

export const RootPage = () => {

    const items = [
        {
            id: 1,
            title: 'Home',
            path: '/',
        },
        {
            id: 2,
            title: 'Base nodes',
            path: 'base_nodes',
        },
        {
            id: 3,
            title: 'Rooms',
            path: 'rooms',
        },
    ]

    const visible = true;

    return (
        <>
            <AppHeader className={cx('header', { visible })} />
            <div className={cx('content')}>
                <SideMenu
                    items={items}
                    className={cx('side-menu', {
                        visible,
                    })}
                />
                <div className={cx('main', { visible })}>
                    <ScrollRestoration />
                    <Outlet />
                </div>
            </div>
        </>
    );
};
