import clsx from "@/clsx";
import styles from "./styles.module.css";

export default function Footer({ smallContainer }: { smallContainer?: boolean }) {
    return (
        <footer>
            <div className={styles.grayBar}>
                <div className={clsx(styles.container, smallContainer ? "container " + styles.smallContainer : "")}>
                    <p>Created by Luke.</p>
                    <span style={{ float: "right" }}>Source code available <a href="https://github.com/glitchjsy/glitch.je" target="_blank">on GitHub</a></span>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={clsx(styles.container, smallContainer ? "container " + styles.smallContainer : "")}>
                    <div className={styles.title}>
                        <a href="/" className={styles.glitch}>glitch.je</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}