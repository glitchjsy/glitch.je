import { ProjectStatus } from "@/models/Project";
import styles from "./styles.module.css";

interface Props {
    status: ProjectStatus;
}

export default function ProjectStatusBadge({ status }: Props) {
    return (
        <div className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
            {status}
        </div>
    );
}