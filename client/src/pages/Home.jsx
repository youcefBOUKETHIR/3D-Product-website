import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
import { useSnapshot } from 'valtio';
import { motion, AnimatePresence } from 'framer-motion';
import state from '../store';


const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro &&(
                <motion.section className='home'{...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img 
                            src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                            />
                    </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden'/> DO IT.
                        </h1>
                    </motion.div>
                
                <motion.div>
                    <p className='max-w-md font-normal text-gray-600 text-base'>
                        Create your unique and execlusive shirt with our brand-new 3D customization tool. 
                        <strong>Unleash your imagination</strong> {""} and define your own style.
                    </p>
                </motion.div>

                </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home