import { List } from '../index';

import styles from './Main.module.css';

export const Main = () => (
    <section className={styles._}>
        <input 
            id={styles.checkbox} 
            className={styles.checkbox} 
            type="checkbox" 
        />
        <label for={styles.checkbox}>Mark all as complete</label>
        <List />
    </section>
)

export default Main;