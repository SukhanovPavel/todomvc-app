import { Header, Main, Footer } from '../../components/index';
import styles from './Page.module.css';

export const Page =  () => (
<section className={styles.todoapp}>
    <Header />
    <Main />
    <Footer />
</section>
)