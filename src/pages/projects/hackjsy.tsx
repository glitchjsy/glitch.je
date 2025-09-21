import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectHackJsy() {
    return (
        <ProjectPage
            name="HackJSY"
            category="Website"
            status="Active"
            summary="Building a platform to support running Hackathon events in Jersey. Includes event details, user registration, project tracking and a judging platform."
            created="January 2025"
            technologies={[
                "react",
                "typescript",
                "chakra-ui",
                "html",
                "css"
            ]}
            links={[
                { text: "Website (in progress)", icon: <FiGlobe />, href: "https://hackjsy.com" }
            ]}
        >
            <p>I'm currently building HackJSY as a platform for Hackathon events.</p>
        </ProjectPage>
    )
}