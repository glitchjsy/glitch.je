import ProjectPage from "@/components/ProjectPage";
import benchkit from "@/projects/2021/benchkit";

export default function ProjectBenchkit() {
    return (
        <ProjectPage {...benchkit}>
            <p>A <a href="https://www.blockbench.net" target="_blank">Blockbench</a> plugin and a Minecraft server plugin to facilitate with testing Minecraft: Bedrock Edition skins and entity models.</p>
            <p>Blockbench allows you to design player skins and create custom models for use in-game. This plugin allows you to sync your skin/model to the server using WebSockets at the push of a button to see your changes in real-time.</p>
        </ProjectPage>
    )
}