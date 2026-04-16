import ProjectPage from "@/components/ProjectPage";
import geyser from "@/projects/2020/geyser";

export default function ProjectGeyserMC() {
    return (
        <ProjectPage {...geyser}>
            <p>Geyser is the successor to <a href="/projects/minecraft/dragonproxy">DragonProxy</a>. I joined the team as a Project Lead in 2020 after it was acquired by CubeCraft Games (Ziax Ltd).</p>

            <p>I rarely work on the actual Geyser project, howver my notable contributes across the organisation as a whole are as follows:</p>

            <ul style={{ paddingLeft: "35px", fontSize: "15px" }}>
                <li>Work on migrating the website to Docusaurus</li>
                <li>Ported the config editor and dump viewer from the old website to the new</li>
                <li>Set up <a href="https://opencollective.com/geysermc">donations</a>.</li>
                <li>Set up <a href="https://translate.geysermc.org">Crowdin</a> for translations, originally hosted on my account. Recently moved to a Crowdin organization.</li>
                <li>Created a Discord ban/mute appeal for in Google Forms that automaticaly sends a webhook message when completed</li>
                <li>Set up and designed the old blog website</li>
                <li>Added blocks to the inventory on java edition to show unusable space (<a href="https://github.com/GeyserMC/Geyser/pull/492">#492</a>)</li>
                <li>Fixed a NullPointerException when typing in chat before connected to remote server (<a href="https://github.com/GeyserMC/Geyser/pull/487">#487</a>)</li>
                <li>Added a workaround to show the Nether fog on bedrock edition (<a href="https://github.com/GeyserMC/Geyser/pull/2663">#2663</a>)</li>
            </ul>

            <br /><br />

            <h3>Statistics (as of March 2026)</h3>

            <h4 style={{ color: "red", textDecoration: "underline" }}>Geyser only</h4>
            <div><strong>GitHub Stars:</strong> 5500+</div>
            <div><strong>Repo Forks:</strong> 800+</div>
            <div><strong>Pull Requests:</strong> 1900+</div>
            <div><strong>Total Instances:</strong> 58,000+</div>

            <br />
            <h4 style={{ color: "red", textDecoration: "underline" }}>Entire organisation</h4>
            <div><strong>Discord Members:</strong> 45,000+</div>
            <div><strong>GitHub Repos:</strong> 66</div>
            <div><strong>Total Donations:</strong> $10,543.23 <em>(08/03/26)</em></div>
        </ProjectPage>
    )
}