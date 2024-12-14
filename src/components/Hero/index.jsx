import { HERO_CONTENT } from '../../constants';
import { motion } from 'framer-motion';
import Section from '../../Section';
import profilePic from '../../assets/nathanNguyen.jpg';
import styles from './styles.module.css';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

const Hero = () => {
    return (
        <Section>
            <div className={styles.contentContainer}>
                <div className={styles.heroLeft}>
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className={styles.title}
                    >
                        Nathan Nguyen
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className={styles.subtitle}
                    >
                        Frontend Developer
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className={styles.description}
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>
                <div className={styles.heroRight}>
                    <div className={styles.imageWrapper}>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Nathan Nguyen"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;