import { Counter } from '~/components/Counter';
import styles from '~/app/page.module.css';

export default function Sample() {
  return (
    <main className={styles.main}>
      <Counter />
    </main>
  );
}
