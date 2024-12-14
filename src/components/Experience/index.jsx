import { EXPERIENCE } from '../../constants';
import { motion } from 'framer-motion';
import Section from '../../Section';
import ExperienceCard from '../../common/ExperienceCard';
import styles from './styles.module.css';

const Experience = () => {
    return (
        <Section>
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.title}
            >
                Experience
            </motion.h1>
            <div>
                {EXPERIENCE.map(({ id, year, role, company, description, technologies }) => (
                    <ExperienceCard
                        key={id}
                        year={year}
                        role={role}
                        company={company}
                        description={description}
                        technologies={technologies}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Experience;