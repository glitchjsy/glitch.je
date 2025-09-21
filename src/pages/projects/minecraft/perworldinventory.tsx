import ProjectPage from "@/components/ProjectPage";
import { FiDownload, FiGithub } from "react-icons/fi";

export default function ProjectPerWorldInventory() {
    return (
        <ProjectPage
            name="PerWorldInventory"
            category="Minecraft Server Plugin"
            status="Discontinued"
            summary="A Nukkit plugin that lets you have separate or shared inventories between worlds."
            created="February 2021"
            openSource
            technologies={[
                "java",
                "maven"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/lukeeey/PerWorldInventory" },
                { text: "Download on CloudburstMC", icon: <FiDownload />, href: "https://cloudburstmc.org/resources/perworldinventory.659" }
            ]}
        >
            <p>This plugin is a ported from the PocketMine-MP plugin <a href="https://github.com/BlockHorizons/PerWorldInventory" target="_blank">PerWorldInventory</a> by BlockHorizons, by request on the CloudburstMC forums.</p>
            <p>The plugin allows you to have a separate inventory for each world as well as share the inventories of multiple worlds by configuring it in the config.yml file.</p>

            <p><strong>Downloads:</strong> 1500+ (<a href="https://cloudburstmc.org/resources/perworldinventory.659" target="_blank">source</a>)</p>
        </ProjectPage>
    )
}