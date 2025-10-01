import ProjectPage from "@/components/ProjectPage";

export default function ProjectStJamesAdmin() {
    return (
        <ProjectPage
            name="St James TV System"
            category="Website & Android App"
            status="Active"
            summary=""
            created="December 2024"
            technologies={[
                "java",
                "websocket",
                "javascript",
                "react",
                "chakra-ui"
            ]}
        >
            <p>I built a system for local night club <a href="https://facebook.com/StJamesSportsBar" target="_blank">St James</a> & it's sister bar <a href="https://facebook.com/TheMaryRoseJersey" target="_blank">The Mary Rose</a> that allows them to control adverts or slideshows on each TV individually.</p>
            <p>This is done via an Android app that runs on a Fire TV stick and a web interface to administer everything.</p>

            <img src="/images/projects/stjames-tvs/screen-admin.png" style={{ maxWidth: "100%" }} />

            <p>Currently, The Mary Rose uses it as the primary method of displaying adverts, with one Fire TV stick that is connected to all TVs.</p>
            <p>St James has a different method of displaying adverts, however this is used occassionally upstairs to show adverts while downstairs shows karaoke.</p>

            <br/>
            <h3>Demo video:</h3>
            
            <video controls playsInline preload="metadata" style={{ maxWidth: "100%" }}>
                <source src="/images/projects/stjames-tvs/demo-video.mp4" type="video/mp4" />
                Your browser does not support the <code>video</code> element. You can <a href="/images/projects/stjames-tvs/demo-video.mp4">download the video</a> instead.
            </video>
        </ProjectPage>
    )
}