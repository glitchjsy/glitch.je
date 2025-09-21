import clsx from "@/clsx";
import styles from "./styles.module.css";

interface Announcement {
    text?: string;
    bgColor?: string;
    textColor?: string;
}

const announcement: Announcement = {};

export default function Header() {
    const smallContainer = true;
    return (
        <div>
            {announcement && (
                <div className={styles.announcementBar} style={{ backgroundColor: announcement?.bgColor ?? "black", color: announcement?.textColor ?? "white" }}>
                    {announcement?.text}
                </div>
            )}
            <div className={styles.header}>
                <div className={clsx(styles.container, smallContainer ? "container " + styles.smallContainer : "")}>
                    <h1 className={styles.name}>Luke Wyatt</h1>
                    <p className={styles.bio}>Web Developer & IT Technician from Jersey, Channel Islands.</p>
                </div>
            </div>
        </div>
    )
}