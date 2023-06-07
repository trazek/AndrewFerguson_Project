import styles from './info-card.module.css';
import Image from 'next/image';
import Link from 'next/link';



export default function InfoCard(props: any) {
    return (
        <article className={styles.card}>
            <h3>{props.infoTitle}</h3>

            <Image 
                src={props.imageSrc} 
                alt=""  
                width={425}
                height={200}>    
            </Image>
            
            <p>
                {props.infoDesc}
            </p>

            <Link href={`/${props.linkRoute}`}>Learn more <span>-&gt;</span></Link>
        </article>
    );
}