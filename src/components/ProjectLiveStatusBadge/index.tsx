import styles from "./styles.module.css";

interface Props {
    live: boolean;
}

export default function ProjectLiveStatusBadge({ live }: Props) {
    return (
        <div className={`${styles.badge} ${live ? styles.live : styles.notLive}`}>
            {live ? "Live" : "Not Live"}
        </div>
    );
}