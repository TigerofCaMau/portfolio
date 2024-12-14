// import logo from '../../assets/kevinRushLogo.png';
import SocialIcons from '../../common/SocialIcons.jsx';
import styles from './styles.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                {/* <img
                    className={styles.logo}
                    src={logo}
                    alt="logo"
                /> */}
            </div>
            <SocialIcons />
        </nav>
    );
};

export default Navbar;
