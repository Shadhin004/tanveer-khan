import CustomLayout from "@/components/layout/CustomLayout"
import Banner from "@/components/sections/Banner"
import Blog from "@/components/sections/Blog"
import Contact from "@/components/sections/Contact"
import Cooperation from "@/components/sections/Cooperation"
import Education from "@/components/sections/Education"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Project"
import Service from "@/components/sections/Service"
import Skill from "@/components/sections/Skill"
import Statistic from "@/components/sections/Statistic"

export default function HomePage2() {

    return (
      <>
        <CustomLayout headerStyle={2} footerStyle={2}>
          <Banner />
          <Statistic />
          <Cooperation />
          <Service />
          <Experience />
          <Education />
          <Projects />
          <Skill />
          <Blog />
          <Contact />
        </CustomLayout>
      </>
    )
}