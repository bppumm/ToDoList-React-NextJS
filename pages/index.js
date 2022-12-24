import TodoList from '../components/TodoList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
}
