import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectBenchkit() {
    return (
        <ProjectPage
            name="Benchkit"
            category="Minecraft Server Plugin"
            status="Inactive"
            summary="A Blockbench & Minecraft server plugin to assist with testing skins and models."
            created="January 2021"
            openSource
            technologies={[
                "java",
                "typescript",
                "html",
                "css",
                "websocket",
                "maven"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/opencollab-incubator/benchkit" }
            ]}
        >
            <p>A <a href="https://www.blockbench.net" target="_blank">Blockbench</a> plugin and a Minecraft server plugin to facilitate with testing Minecraft: Bedrock Edition skins and entity models.</p>
            <p>Blockbench allows you to design player skins and create custom models for use in-game. This plugin allows you to sync your skin/model to the server using WebSockets at the push of a button to see your changes in real-time.</p>
        </ProjectPage>
    )
}