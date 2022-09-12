import styles from './Header.module.css';

export const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.h1}>todos</h1>
        <input 
            className={styles.input} 
            placeholder="What needs to be done?" 
            autofocus 
        />
    </header>
);