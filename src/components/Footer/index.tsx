import styles from "./styles.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={styles.grayBar}>
                <p>Created by Luke.</p>
                <span style={{ float: "right" }}>Source code available <a href="https://github.com/glitchjsy/glitch.je" target="_blank">on GitHub</a></span>
            </div>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <p className={styles.glitch}>glitch.je</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}