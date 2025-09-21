import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectHitCount() {
    return (
        <ProjectPage
            name="HitCount.dev"
            category="Website"
            status="Inactive"
            summary="A website that enables developers to track the number of people viewing their projects on GitHub."
            created="February 2025"
            openSource
            technologies={[
                "java",
                "javascript",
                "html",
                "css"
            ]}
            links={[
                { text: "Website", icon: <FiGlobe />, href: "https://hitcount.dev" },
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/lukeeey/hitcount" }
            ]}
        >

        </ProjectPage>
    )
}