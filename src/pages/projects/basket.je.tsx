import ProjectPage from "@/components/ProjectPage";
import basketJe from "@/projects/2023/basket-je";

export default function ProjectBasketje() {
    return (
        <ProjectPage {...basketJe}>
            <p>The purpose of Basket.je is to aid consumers in saving money by making it easy to compare grocery prices across various local retailers.</p>
            <p>To make this possible, I created a system for effortlessly collectng prices using your smartphone while in the shop. I have also developed a native app using React Native that is yet to be released.</p>

            <img src="/images/projects/basketje/homepage.jpg" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}