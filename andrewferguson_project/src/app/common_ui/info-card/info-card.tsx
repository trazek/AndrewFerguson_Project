import styles from './info-card.module.css';
import Image from 'next/image';
import Link from 'next/link';



export default function InfoCard(props: any) {
    return (
        <Link href={`/${props.linkRoute}`} className={styles.cardWrapper}>
            <article className={styles.card}>
                <h3>{props.infoTitle} <span>-&gt;</span></h3>

                <Image 
                    src={props.imageSrc} 
                    priority={false}
                    alt=""  
                    width={425}
                    height={200}>    
                </Image>
                
                <p>
                    {props.infoDesc}
                </p>
            </article>
        </Link>
    );
}