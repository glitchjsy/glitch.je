import styles from "./styles.module.css";

interface Props {
    name: string;
    url: string;
    imageUrl: string;
    smaller?: boolean;
}

export default function ProjectCard(props: Props) {
    return (
        <a href={props.url} target="_blank" className={`${styles.project} ${props.smaller ? styles.smaller : ""}`}>
            <div className={styles.viewMore}>
                <p>Click to view more</p>
            </div>
            <p className={styles.title}>{props.name}</p>
            <img className={styles.image} src={props.imageUrl} />
        </a>
    )
}