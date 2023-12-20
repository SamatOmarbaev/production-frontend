import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <nav className={classNames(styles.Navbar, {}, [className])}>
    <div className={classNames(styles.links, {}, [])}>
      /
    </div>
  </nav>
);

export default Navbar;
