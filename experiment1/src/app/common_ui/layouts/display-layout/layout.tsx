import Link from 'next/link';
import styles from './layout.module.css';


export default function Layout(props: any) {
    return (
        <main className={styles.infoContainer}>
            
            <section className={styles.content}>
                <div><Link href="/">&lt;- 🏠 Home</Link></div>
                <br />
                {props.children}
            </section>
        </main>
    );
  };


