import { List } from '../index';

import styles from './Main.module.css';

export const Main = () => (
    <section className={styles._}>
        <input 
            id={styles.toggleall} 
            className={styles.toggleAll} 
            type="checkboox" 
        />
        <label for={styles.label}>Mark all as complete</label>
        <List />
    </section>
)