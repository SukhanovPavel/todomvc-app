import { ListItem } from '../index';

import styles from './List.module.css';



export const List = () => (
    <ul className={styles.list}>
        <li className={styles.complited}>
            <ListItem />
        </li>
        <li>
            <ListItem />
        </li>
    </ul>
)

export default List;
