import { motion } from 'framer-motion';
import Button from './button';

interface NavigationProps {
    onOverviewClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOverviewClick }) => {
    return (
        <div className="cursor-pointer">
            <motion.nav
                className="flex flex-col sm:flex-row justify-center gap-2"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: 0.9 }}
            >
                <Button href="#" onClick={onOverviewClick}>Overview</Button>
                <Button href="/resume.pdf">Resume/CV</Button>
                <Button href="/#">Links</Button>
            </motion.nav>
        </div >
    );
};

export default Navigation;
