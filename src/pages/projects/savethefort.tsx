import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectSaveTheFort() {
    return (
        <ProjectPage
            name="SaveTheFort.je"
            category="Website"
            status="Inactive"
            summary="I created a simple website to support a group dedicated to improving Fort Regent and making it a valuable space for everyone."
            created="March 2025"
            openSource
            technologies={[
                "javascript",
                "html",
                "css"
            ]}
            links={[
                { text: "Website", icon: <FiGlobe />, href: "https://savethefort.je" },
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/lukeeey/savethefort" }
            ]}
        >
            <img src="/images/projects/savethefort/preview.png" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}