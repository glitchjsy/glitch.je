import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectClip() {
    return (
        <ProjectPage
            name="Clip"
            category="Website"
            status="Inactive"
            summary="Effortlessly copy & paste between multiple devices."
            created="December 2024"
            openSource
            technologies={[
                "java",
                "react",
                "javascript",
                "chakra-ui",
                "html",
                "css"
            ]}
            links={[
                { text: "Website", icon: <FiGlobe />, href: "https://clip.gltch.je" },
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/glitchjsy/clip" }
            ]}
        >
            <p>I originally built Clip for use at work, where we often connect to remote systems that don’t support direct copy-paste between them.</p>
            <p>The backend is a simple <a href="https://javalin.io/" target="_blank">Javalin</a> server while the frontend is a React app.</p>
        </ProjectPage>
    )
}