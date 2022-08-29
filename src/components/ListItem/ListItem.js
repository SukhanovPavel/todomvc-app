import styles from './ListItem.module.css';


export const ListItem = () => <>
    <div className={styles.view}>
        <input className={styles.toggle} type="checkbox" checked />
        <label>Taste JavaScript</label>
        <button className={styles.destroy}></button>
    </div>
    <input className={styles.edit} value="Create a TodoMVC template" />

    <div className={styles.view}>
        <input className={styles.toggle} type="checkbox" />
        <label>Buy a unicorn</label>
        <button className={styles.destroy}></button>
    </div>
    <input className={styles.edit} value="Rule the web" />
</>

export default ListItem;