
import styles from './Footer.module.css';

export const Footer = () => <>
    <footer className={styles.footer}>
        <span className={styles.todoCount}><strong>0</strong> item left</span>
        <ul className={styles.filters}>
            <li>
                <a className={styles.selected} href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <button className={styles.clearCompleted}>Clear completed</button>
    </footer>
</>

export default Footer;