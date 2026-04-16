import { DownloadCount } from "@/components/DownloadCount";
import ProjectPage from "@/components/ProjectPage";
import perworldinventory from "@/projects/2021/perworldinventory";

export default function ProjectPerWorldInventory() {
    return (
        <ProjectPage {...perworldinventory}>
            <p>This plugin is a ported from the PocketMine-MP plugin <a href="https://github.com/BlockHorizons/PerWorldInventory" target="_blank">PerWorldInventory</a> by BlockHorizons, by request on the CloudburstMC forums.</p>
            <p>The plugin allows you to have a separate inventory for each world as well as share the inventories of multiple worlds by configuring it in the config.yml file.</p>

            <DownloadCount
                count="1900+"
                lastChecked="April 2026"
                source="https://cloudburstmc.org/resources/perworldinventory.659"
            />
        </ProjectPage>
    )
}