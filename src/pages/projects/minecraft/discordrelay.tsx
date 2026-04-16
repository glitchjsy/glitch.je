import { DownloadCount } from "@/components/DownloadCount";
import ProjectPage from "@/components/ProjectPage";
import discordrelay from "@/projects/2021/discordrelay";

export default function ProjectDiscordRelay() {
    return (
        <ProjectPage {...discordrelay}>
            <img src="https://user-images.githubusercontent.com/32024335/111518790-53ea6080-874e-11eb-9490-bfc2aeb7713c.png" style={{ maxWidth: "100%" }} />
            <br /><br />

            <strong style={{ fontSize: "20px" }}>Features:</strong>
            <ul style={{ paddingLeft: "20px" }}>
                <li>Two-way chat between Discord and Minecraft</li>
                <li>Display messages in Discord (optionally in embeds) for common events like player joins or deaths</li>
                <li>Role ping protection from Minecraft</li>
                <li>Simple Developer API for creating new Discord commands</li>
                <li>Built-in <code>!playerlist</code>, <code>!serverinfo</code> and <code>!playerinfo &lt;name&gt;</code> Discord commands!</li>
                <li>Built-in <code>/discord</code> in-game command so players can see info about your Discord server</li>
                <li>Automatic updating of the relay channel topic in Discord!</li>
            </ul>

            <br />

            <DownloadCount
                count="5300+"
                lastChecked="April 2026"
                source="https://cloudburstmc.org/resources/discordrelay.667"
            />

            <br />
            <p>Read more on <a href="https://github.com/lukeeey/DiscordRelay" target="_blank">GitHub</a>.</p>
        </ProjectPage>
    )
}