import SocialLink from "@/components/SocialLink";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";
import ProjectCard from "@/components/ProjectCard";
import { ImageGallery } from "react-image-grid-gallery";
import { jimmiesDesigns, maryRoseDesigns } from "@/designs";
import Footer from "@/components/Footer";

export default function Index() {
    return (
        <body id="homepage-body">
            <div className="main">
                <div className="hero-section">
                    <div className={styles.container}>
                        <h1 className="name">Luke Wyatt</h1>
                        <p className="bio">Web Developer & IT Technician from Jersey, Channel Islands.</p>

                        <div className={styles.socialLinks}>
                            <SocialLink href="https://linkedin.com/in/lukejwyatt" icon={<FaLinkedin color="white" />} />
                            <SocialLink href="https://github.com/lukeeey" icon={<FaGithub color="white" />} />
                            <SocialLink href="mailto:luke@glitch.je" icon={<FaEnvelope color="white" />} />
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className={styles.container}>
                        <h2 className="about-title">About me</h2>
                        <p>
                            Hello! I'm a 22-year-old Web Developer and IT Technician based in Jersey, Channel Islands.
                        </p>
                        <p>
                            I'm a team-focused, hands-on indivdual with a strong work ethic and genuine enthusiasm for everything IT. My IT journey began at the
                            age of 12, when I (rather badly) taught myself PHP and JavaScript to create custom modifications and plugins for Minecraft. Since then,
                            my passion for programming has only grown.
                        </p>
                        <p>
                            In late 2024, I joined C5 Alliance as an IT Technician where I've gained valuable experience with backend systems and learned a great deal about working in a corporate environment.
                        </p>
                        <p>
                            Outside of work, I enjoy coding and building personal projects, as well as exploring photography, graphic design, and DJing (though I'm not very good!)
                        </p>
                        <Technologies />
                    </div>
                </div>
                <div className="projects-section">
                    <div className={styles.container}>
                        <h2 className="projects-title">Projects</h2>
                        <h3 className={styles.projectCategoryHeading}>Websites</h3>

                        <div className="projects-grid">
                            <ProjectCard
                                name="Basket.je"
                                url="/projects/basket.je"
                                imageUrl="/imagesold/projects/basketje.png"
                            />
                            <ProjectCard
                                name="Jersey Open Data"
                                url="/projects/open-data"
                                imageUrl="/imagesold/projects/opendata.png"
                            />
                            <ProjectCard
                                name="HackJSY"
                                url="/projects/hackjsy"
                                imageUrl="/imagesold/projects/hackjsy.png"
                            />
                            <ProjectCard
                                name="HappyHour.je"
                                url="/projects/happyhour.je"
                                imageUrl="/imagesold/projects/happyhour.png"
                            />
                            <ProjectCard
                                name="St James TV System"
                                url="/projects/stjames-tvs"
                                imageUrl="/imagesold/projects/stjames-tvs.png"
                            />
                            <ProjectCard
                                name="HitCount.dev"
                                url="/projects/hitcount.dev"
                                imageUrl="/imagesold/projects/hitcount.png"
                            />
                            <ProjectCard
                                name="Clip"
                                url="/projects/clip"
                                imageUrl="/imagesold/projects/clip.png"
                            />
                            <ProjectCard
                                name="SaveTheFort.je"
                                url="/projects/savethefort"
                                imageUrl="/imagesold/projects/savethefort.png"
                            />
                            <ProjectCard
                                name="QR Code Generator"
                                url="/projects/qrcode"
                                imageUrl="/imagesold/projects/qrcode.png"
                            />
                        </div>

                        {/* <div className="old-projects">
                            <h3 className={styles.projectCategoryHeading}>Miscellaneous (open source)</h3>
                            <p className={styles.projectCategorySummary}>These are Chrome Extensions, Scripts or Console Applications that I've created.</p>

                            <div className="projects-grid">
                                <ProjectCard
                                    name="Excise Duty Calculator"
                                    url="/projects/duty-calculator"
                                    imageUrl="/images/projects/dutycalc/home.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="Andium Properties Checker"
                                    url="/projects/andium-checker"
                                    imageUrl="/images/projects/andium-checker/home.png"
                                    smaller
                                />
                            </div>
                        </div> */}

                        <div className="old-projects">
                            <h3 className={styles.projectCategoryHeading}>Old Minecraft Projects</h3>
                            <p className={styles.projectCategorySummary}>I learned programming by developing for Minecraft when I was younger. Here are some of the things I created, most of them are discontinued and they are all coded in Java.</p>

                            <div className="projects-grid" style={{ marginTop: "15px" }}>
                                <ProjectCard
                                    name="Benchkit"
                                    url="/projects/minecraft/benchkit"
                                    imageUrl="/imagesold/projects/benchkit.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="Discord Relay"
                                    url="/projects/minecraft/discordrelay"
                                    imageUrl="/imagesold/projects/discordrelay.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="Geyser"
                                    url="/projects/minecraft/geyser"
                                    imageUrl="/imagesold/projects/geysermc.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="DeathView"
                                    url="/projects/minecraft/deathview"
                                    imageUrl="/imagesold/projects/deathview.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="CloudForms"
                                    url="/projects/minecraft/cloudforms"
                                    imageUrl="/imagesold/projects/cloudforms.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="DragonProxy"
                                    url="/projects/minecraft/dragonproxy"
                                    imageUrl="/imagesold/projects/dragonproxy.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="Factions MongoDB"
                                    url="/projects/minecraft/factionsmongo"
                                    imageUrl="/imagesold/projects/factionsmongo.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="PerWorldInventory"
                                    url="/projects/minecraft/perworldinventory"
                                    imageUrl="/imagesold/projects/perworldinventory.png"
                                    smaller
                                />
                                <ProjectCard
                                    name="JellyLegs"
                                    url="/projects/minecraft/jellylegs"
                                    imageUrl="/imagesold/projects/jellylegs.png"
                                    smaller
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="design-section">
                    <div className={styles.container}>
                        <h2 className="design-title">Designs</h2>
                        <p className="design-subtitle">
                            I'm not a professional designer, but I'm proud of these designs and wanted to share them.
                        </p>
                        <p className="design-subtitle">
                            I created them for <a href="https://facebook.com/StJamesSportsBar" target="_blank">St James</a> and <a href="https://facebook.com/TheMaryRoseJersey" target="_blank">The Mary Rose</a> to be used as posters, social media posts, and on-screen adverts.
                            I continue to create new adverts each week for social media.
                        </p>

                        <h3 className={styles.gallerySubheading}>St James</h3>
                        <div className={styles.jimmiesGallery}>
                            <ImageGallery imagesInfoArray={jimmiesDesigns} />
                        </div>

                        <h3 className={styles.gallerySubheading}>The Mary Rose</h3>
                        <div className={styles.maryRoseGallery}>
                            <ImageGallery imagesInfoArray={maryRoseDesigns} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </body>
    )
}

function Technologies() {
    return (
        <div className={styles.technologies}>
            <img alt="Java" width="30px" src="/imagesold/logos/java.png" />
            <img alt="HTML5" width="32px" src="/imagesold/logos/html5.png" />
            <img alt="CSS3" width="20px" src="/imagesold/logos/css3.png" />
            <img alt="JavaScript" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
            <img alt="C#" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png" />
            <img alt="TypeScript" width="30px" src="/imagesold/logos/typescript.png" />
            <img alt="React.js" width="30px" src="/imagesold/logos/react.png" />
            <img alt="Next.js" width="40px" src="/imagesold/logos/nextjs.png" />
            <img alt="VS Code" width="26px" src="/imagesold/logos/vscode.png" />
            <img alt="IntelliJ IDEA" width="30px" src="/imagesold/logos/idea.png" />
            <img alt="Node.js" width="26px" src="/imagesold/logos/nodejs.png" />
            <img alt="MySQL" width="40px" src="/imagesold/logos/mysql.png" />
            <img alt="Redis" width="26px" src="/imagesold/logos/redis.svg" />
        </div>
    )
}