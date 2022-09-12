import styles from './ListItem.module.css';


export const ListItem = () => (
    <li className={styles.completed}>
        <div className={styles.view}>
        <input 
            className={styles.toggle} 
            type="checkbox" 
            checked 
        />
        <label>Taste JavaScript</label>
        <button className={styles.destroy}></button>
        </div>
        <input 
            className={styles.edit} 
            value="Create a TodoMVC template" 
        />
    </li>
)