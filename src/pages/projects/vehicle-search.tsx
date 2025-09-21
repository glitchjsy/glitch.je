import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectVehicleSearch() {
    return (
        <ProjectPage
            name="Jersey Vehicle Search"
            category="Website"
            status="Inactive"
            summary="Web app to scan number plates and lookup the car info on gov.je"
            created="November 2023"
            openSource
            technologies={[
                "java",
                "react",
                "typescript",
                "html",
                "css"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/glitchjsy/vehicle-search" }
            ]}
        >
            <p>Currently being rewritten (slowly) in the <a href="https://github.com/glitchjsy/vehicle-search/tree/java-rewrite" target="_blank">java-rewrite</a> branch.</p>
            <img src="/images/projects/vehicle-search/preview.png" style={{ maxWidth: "300px" }} />
        </ProjectPage>
    )
}