import { PropsWithChildren, useEffect, useState } from "react";
import styles from "./styles.module.css";
import clsx from "@/clsx";

type ProjectCategory = "Website" | "Console Application" | "Minecraft Server Plugin" | "Java Library" | "Java Program" | "Chrome Extension" | string;

type ProjectStatus = "Active" | "Inactive" | "Maintained" | "Abandoned" | "Discontinued";

type Technology = "typescript" | "javascript" | "html" | "css" | "react" | "nextjs" | "react-native" | "mysql" | "nodejs" | "nginx" | "redis" | "maven" | "websocket" | "gradle" | "mongo" | "docusaurus" | "mapbox" | "expressjs" | "chartjs" | "chatgpt" | "java" | "chakra-ui" | "mailtrap";

interface Props {
    name: string;
    summary: string;
    category: ProjectCategory;
    openSource?: boolean;
    status: ProjectStatus;
    created?: string;
    technologies: Technology[];
    links?: Link[];
}

interface Link {
    text: string;
    icon: any;
    href: string;
}

const technologies: Record<Technology, { name: string; icon: string }> = {
    typescript: {
        name: "TypeScript",
        icon: "/imagesold/logos/typescript.png"
    },
    javascript: {
        name: "JavaScript",
        icon: "/imagesold/logos/javascript.png"
    },
    html: {
        name: "HTML5",
        icon: "/imagesold/logos/html5.png"
    },
    css: {
        name: "CSS3",
        icon: "/imagesold/logos/css3.png"
    },
    react: {
        name: "React",
        icon: "/imagesold/logos/react.png"
    },
    "react-native": {
        name: "React Native",
        icon: "/imagesold/logos/react-native.svg"
    },
    nextjs: {
        name: "Next.js",
        icon: "/imagesold/logos/nextjs.png"
    },
    mysql: {
        name: "MySQL",
        icon: "/imagesold/logos/mysql.png"
    },
    nodejs: {
        name: "Node.js",
        icon: "/imagesold/logos/nodejs.png"
    },
    nginx: {
        name: "NGINX",
        icon: "/imagesold/logos/nginx.svg"
    },
    redis: {
        name: "Redis",
        icon: "/imagesold/logos/redis.svg"
    },
    maven: {
        name: "Maven",
        icon: "/imagesold/logos/maven.jpeg"
    },
    gradle: {
        name: "Gradle",
        icon: "/imagesold/logos/gradle.png"
    },
    mongo: {
        name: "MongoDB",
        icon: "/imagesold/logos/mongo.png"
    },
    docusaurus: {
        name: "Docusaurus",
        icon: "/imagesold/logos/docusaurus.png"
    },
    mapbox: {
        name: "Mapbox",
        icon: "/imagesold/logos/mapbox.png"
    },
    expressjs: {
        name: "Express.js",
        icon: "/imagesold/logos/expressjs.png"
    },
    chartjs: {
        name: "Chart.js",
        icon: "/imagesold/logos/chartjs.png"
    },
    chatgpt: {
        name: "ChatGPT",
        icon: "/imagesold/logos/chatgpt.png"
    },
    "chakra-ui": {
        name: "Chakra UI",
        icon: "/imagesold/logos/chakraui.png"
    },
    java: {
        name: "Java",
        icon: "/imagesold/logos/java.png"
    },
    mailtrap: {
        name: "Mailtrap",
        icon: "/imagesold/logos/mailtrap.png"
    },
    websocket: {
        name: "WebSocket",
        icon: "/imagesold/logos/websocket.png"
    }
};

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < breakpoint);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
}

export default function ProjectPage({ children, ...props }: PropsWithChildren<Props>) {
    const isMobile = useIsMobile();

    return (
        <div className="main">
            {/* Navbar */}

            <div className="container">
                <div className={styles.pageGrid}>
                    {isMobile ? (
                        <div>
                            <h2 className={styles.pageTitle}>{props.name}</h2>
                            <div className={styles.pageSummaryMobile}>{props.summary}</div>
                            <ProjectSidebar {...props} />
                            <ProjectContent children={children} />
                        </div>
                    ) : (
                        <>
                            <div className="row">
                                <div className="col-8">
                                    <div className={styles.desktopHeader}>
                                        <h2 className={styles.pageTitle}>{props.name}</h2>
                                        <div>{props.summary}</div>
                                    </div>
                                    {children && <h3 className={styles.moreInfo}>Description</h3>}
                                    <ProjectContent children={children} />
                                </div>
                                <div className="col-4">
                                    <ProjectSidebar {...props} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

function ProjectContent({ children }: PropsWithChildren) {
    return (
        <div className={styles.projectContent}>
            {children}
        </div>
    )
}

function ProjectSidebar(props: Props) {
    return (
        <div className={styles.sidebar}>
            <div>
                <p className={styles.projectDetailsTitle}>Project Details</p>
            </div>
            <div className={styles.projectDetailsRow}>
                <span className={styles.projectDetailsHeading}>Category</span>
                <span className={styles.projectDetailsValue}>{props.category}</span>
            </div>
            <div className={styles.projectDetailsRow}>
                <span className={styles.projectDetailsHeading}>Status</span>
                <span className={styles.projectDetailsValue}>{props.status}</span>
            </div>
            <div className={styles.projectDetailsRow}>
                <span className={styles.projectDetailsHeading}>Source</span>
                <span className={styles.projectDetailsValue}>{props.openSource ? "Open source" : "Closed source"}</span>
            </div>
            {props.created && (
                <div className={styles.projectDetailsRow}>
                    <span className={styles.projectDetailsHeading}>Created</span>
                    <span className={styles.projectDetailsValue}>{props.created}</span>
                </div>
            )}
            <div>
                <div className={styles.projectDetailsHeading}>Technologies</div>
                <div className={clsx(styles.projectDetailsValue, styles.techFlex)}>
                    {props.technologies.map((tech) => (
                        <div key={tech} className={styles.techBadge} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <img src={technologies[tech].icon} height="18" width="18" />
                            <span>{technologies[tech].name}</span>
                        </div>
                    ))}
                </div>
            </div>
            {props.links && (
                <div>
                    <div className={styles.projectDetailsHeading} style={{ marginBottom: "5px" }}>Links</div>
                    <div className={styles.projectLinks}>
                        {props.links.map((link, i) => (
                            <a key={i} href={link.href} target="_blank">
                                {link.icon} {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}