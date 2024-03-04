import cnBind from 'classnames/bind';
import styles from './AppHeader.module.scss';
import { HTMLElementProps } from '../../types/HTMLElementProps.types';


const cx = cnBind.bind(styles);

export type AppHeaderProps = HTMLElementProps;

export const AppHeader = ({ className, ...props }: AppHeaderProps) => {

    return (
        <header {...props} className={cx('header', className)}>
            navigator.admin.panel
        </header>
    );
};
