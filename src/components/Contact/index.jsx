import { CONTACT } from '../../constants';
import { motion } from 'framer-motion';
import Section from '../../Section';
import styles from './styles.module.css';

const Contact = () => {
    return (
        <Section>
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.title}
            >
                Get in Touch
            </motion.h1>
            <div className={styles.textCenter}>
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="my-4"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className={styles.paragraph}
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <a href={`mailto:${CONTACT.email}`} className={styles.link}>
                    {CONTACT.email}
                </a>
            </div>
        </Section>
    );
};

export default Contact;