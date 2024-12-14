import { ABOUT_TEXT } from '../../constants';
import { motion } from 'framer-motion';
import Section from '../../Section';
import aboutImg from '../../assets/about.jpg';
import styles from './styles.module.css';

const About = () => {
    return (
        <Section>
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.title}
            >
                About
                <span className={styles.subTitle}> Me</span>
            </motion.h1>
            <div className={styles.content}>
                <motion.div 
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.imageContainer}
                >
                    <div className={styles.imageWrapper}>
                        <img className={styles.image} src={aboutImg} alt="About" />
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.textContainer}
                >
                    <div className={styles.textWrapper}>
                        <p className={styles.aboutText}>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;