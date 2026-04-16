import SocialLink from "@/components/SocialLink";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";
import ProjectCard from "@/components/ProjectCard";
import { ImageGallery } from "react-image-grid-gallery";
import { jimmiesDesigns, maryRoseDesigns } from "@/designs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectListItem from "@/components/ProjectListItem";
import happyhourJe from "@/projects/2025/happyhour-je";
import savethefortJe from "@/projects/2025/savethefort-je";
import qrcodeGenerator from "@/projects/2024/qrcode-generator";
import stjamesWebsite from "@/projects/2026/stjames-website";
import maryroseWebsite from "@/projects/2026/maryrose-website";
import hitcountDev from "@/projects/2025/hitcount-dev";
import clip from "@/projects/2024/clip";
import nightclubTvSystem from "@/projects/2024/nightclub-tv-system";
import opendataJe from "@/projects/2023/opendata-je";
import dutyCalculator from "@/projects/2023/duty-calculator";
import andiumChecker from "@/projects/2023/andium-checker";
import benchkit from "@/projects/2021/benchkit";
import cloudforms from "@/projects/2021/cloudforms";
import discordrelay from "@/projects/2021/discordrelay";
import factionsmongo from "@/projects/2021/factionsmongo";
import jellylegs from "@/projects/2021/jellylegs";
import perworldinventory from "@/projects/2021/perworldinventory";
import geyser from "@/projects/2020/geyser";
import deathview from "@/projects/2020/deathview";
import dragonproxy from "@/projects/2019/dragonproxy";

export default function Index() {
    return (
        <body id="homepage-body">
            {/* <Navbar transparent /> */}

            <div className="main">
                <div className="hero-section">
                    <div className={styles.container}>
                        <h1 className="name">Luke Wyatt</h1>
                        <p className="bio">Web Developer from Jersey, Channel Islands.</p>

                        <div className={styles.socialLinks}>
                            <SocialLink href="https://linkedin.com/in/lukejwyatt" icon={<FaLinkedin color="white" />} />
                            <SocialLink href="https://github.com/lukeeey" icon={<FaGithub color="white" />} />
                            <SocialLink href="mailto:luke@glitch.je" icon={<FaEnvelope color="white" />} />
                        </div>
                    </div>
                </div>
                <div id="about" className="about-section">
                    <div className={styles.container}>
                        <h2 className="about-title">About me</h2>
                        <p>
                            Hello! I'm a 23-year-old Web Developer & Junior Consultant at C5 Alliance based in Jersey, Channel Islands.
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
                            In February of 2025, I moved to become a Junior Applications Consultant at C5 Alliance.
                        </p>
                        <p>
                            Outside of work, I enjoy coding and building personal projects, as well as exploring photography, graphic design, and DJing (though I'm not very good!)
                        </p>
                        <Technologies />
                    </div>
                </div>
                <div id="projects" className="projects-section">
                    <div className={styles.container}>
                        <h2 className="projects-title">Projects</h2>
                        <p className={styles.projectsSubtitle}>
                            This section contains a large number of projects, big and small, that I have worked on over the years. Click a project for more information.
                        </p>
                        <h3 className={styles.projectCategoryHeading}>Featured</h3>
                        <p className={styles.projectCategorySubheading}>
                            This is some of the work I'm most proud of.
                        </p>

                        <div className="projects-grid">
                            <ProjectCard
                                name="ThreatHub"
                                url="/projects/threathub"
                                imageUrl="/imagesold/projects/threathub.png"
                            />
                            <ProjectCard
                                name="Basket.je"
                                url="/projects/basket.je"
                                imageUrl="/imagesold/projects/basketje.png"
                            />
                            <ProjectCard
                                name="Jersey Open Data"
                                url="/projects/opendata.je"
                                imageUrl="/imagesold/projects/opendata.png"
                            />
                            <ProjectCard
                                name="Nightclub TV System"
                                url="/projects/nightclub-advert-system"
                                imageUrl="/imagesold/projects/stjames-tvs.png"
                            />
                            <ProjectCard
                                name="St James Website"
                                url="/projects/stjames"
                                imageUrl="/imagesold/projects/stjames-website.png"
                            />
                            <ProjectCard
                                name="The Mary Rose Website"
                                url="/projects/themaryrose"
                                imageUrl="/imagesold/projects/maryrose-website.png"
                            />
                        </div>

                        <div style={{ marginTop: "40px" }}>
                            <h3 className={styles.projectCategoryHeading}>Previous Projects</h3>
                            <p className={styles.projectCategorySubheading}></p>
                        </div>

                        <div className={styles.minorProjectsGrid}>
                            <ProjectListItem
                                {...savethefortJe}
                                url="/projects/savethefort.je"
                            />
                            <ProjectListItem
                                {...clip}
                                url="/projects/clip"
                            />
                            <ProjectListItem
                                {...happyhourJe}
                                url="/projects/happyhour.je"
                            />
                        </div>

                        <div style={{ marginTop: "40px" }}>
                            <h3 className={styles.projectCategoryHeading}>Playground</h3>
                            <p className={styles.projectCategorySubheading}>
                                These are small projects that I created either as a proof-of-concept, as practice, or to solve a specfic problem.
                            </p>
                        </div>

                        <div className={styles.minorProjectsGrid}>
                            <ProjectListItem
                                {...qrcodeGenerator}
                                url="/projects/qrcode-generator"
                            />
                            <ProjectListItem
                                {...dutyCalculator}
                                url="/projects/duty-calculator"
                            />
                            <ProjectListItem
                                {...andiumChecker}
                                url="/projects/andium-checker"
                            />
                        </div>

                        <div style={{ marginTop: "40px" }}>
                            <h3 className={styles.projectCategoryHeading}>Minecraft</h3>
                            <p className={styles.projectCategorySubheading}>
                                I learned programming by developing for Minecraft when I was younger. Here are some of the things I created, most of them are discontinued and they are all coded in Java.
                                I still update some of them on occasion.
                            </p>
                        </div>

                        <div className={styles.minorProjectsGrid}>
                            <ProjectListItem
                                {...discordrelay}
                                url="/projects/minecraft/discordrelay"
                            />
                            <ProjectListItem
                                {...jellylegs}
                                url="/projects/minecraft/jellylegs"
                            />
                            <ProjectListItem
                                {...perworldinventory}
                                url="/projects/minecraft/perworldinventory"
                            />
                            <ProjectListItem
                                {...deathview}
                                url="/projects/minecraft/deathview"
                            />
                            <ProjectListItem
                                {...benchkit}
                                url="/projects/minecraft/benchkit"
                            />
                            <ProjectListItem
                                {...cloudforms}
                                url="/projects/minecraft/cloudforms"
                            />
                            <ProjectListItem
                                {...factionsmongo}
                                url="/projects/minecraft/factionsmongo"
                            />
                            <ProjectListItem
                                {...geyser}
                                url="/projects/minecraft/geyser"
                            />
                            <ProjectListItem
                                {...dragonproxy}
                                url="/projects/minecraft/dragonproxy"
                            />
                        </div>
                    </div>
                </div>

                <div id="design" className="design-section">
                    <div className={styles.container}>
                        <h2 className="design-title">Designs</h2>
                        <p className="design-subtitle">
                            I created these designs for <a href="https://facebook.com/StJamesSportsBar" target="_blank">St James</a> and <a href="https://facebook.com/TheMaryRoseJersey" target="_blank">The Mary Rose</a> to be used as posters, social media posts, and on-screen adverts.
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
        </body >
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