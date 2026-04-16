import { Project } from "@/models/Project";
import styles from "./styles.module.css";
import ProjectStatusBadge from "../ProjectStatusBadge";
import ProjectLiveStatusBadge from "../ProjectLiveStatusBadge";

interface Props {
    url: string;
}

export default function ProjectListItem(props: Project & Props) {
    return (
        <a href={props.url} className={styles.project}>
            <p className={styles.title}>{props.name}</p>
            <p className={styles.description}>{props.summary}</p>

            <div className={styles.badges}>
                <ProjectStatusBadge status={props.status} />
                {!!props.live && <ProjectLiveStatusBadge live={props.live} />}
            </div>

            <div className={styles.footer}>
                <span>{props.category}</span>
                {props.created && (
                    <>
                        <span>&bull;</span>
                        <span>Created {props.created}</span>
                    </>
                )}
            </div>
        </a>
    )
}