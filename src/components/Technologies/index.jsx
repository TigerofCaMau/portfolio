import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import TechnologyIcon from '../../common/TechnologyIcon';
import Section from '../../Section';
import styles from './styles.module.css';

const Technologies = () => {
    return (
        <Section>
            <motion.h1
                whileInView={{ y: 0, opacity:1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className={styles.title}
            >
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className={styles.iconsContainer}
            >
                <TechnologyIcon
                    icon={IoLogoJavascript}
                    customClass={styles.iconJavascript}
                    duration={1}
                />
                <TechnologyIcon
                    icon={FaReact}
                    customClass={styles.iconReact}
                    duration={1.5}
                />
                <TechnologyIcon
                    icon={RiNextjsFill }
                    customClass={styles.iconNextjs}
                    duration={2}
                />
                <TechnologyIcon
                    icon={SiTailwindcss}
                    customClass={styles.iconTailwind}
                    duration={2.5}
                />
                <TechnologyIcon
                    icon={FaBootstrap}
                    customClass={styles.iconBootstrap}
                    duration={3}
                />
                <TechnologyIcon
                    icon={FaGithub}
                    customClass={styles.iconGithub}
                    duration={3.5}
                />
            </motion.div>
        </Section>
    );
};

export default Technologies;