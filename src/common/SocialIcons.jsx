import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../components/Navbar/styles.module.css';


const SocialIcons = () => {
    const icons = [
        { 
            id: 1,
            href: "https://www.linkedin.com/in/nghiacn/",
            icon: <FaLinkedin className={styles.icon} /> 
        },
        { 
            id: 2,
            href: "https://github.com/TigerofCaMau",
            icon: <FaGithub className={styles.icon} /> 
        },
    ];

    return (
        <div className={styles.iconsContainer}>
            {icons.map(({ id, href, icon }) => (
                <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;