import styles from "./styles.module.css";

interface Props {
    count: string;
    lastChecked: string;
    source: string;
}

export function DownloadCount({ count, lastChecked, source }: Props) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>Total Downloads</div>
            <div className={styles.count}>{count}</div>
            <div className={styles.source}>As of {lastChecked} <a href={source} target="_blank">(source)</a></div>
        </div>
    )
}