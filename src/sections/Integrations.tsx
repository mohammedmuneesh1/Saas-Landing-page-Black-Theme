import Tag from "@/components/Tag";

import figmaIcon from "@/assets/images/figma-logo.svg"
import notionIcon from "@/assets/images/notion-logo.svg"
import slackIcon from "@/assets/images/slack-logo.svg"
import relumeIcon from "@/assets/images/relume-logo.svg"
import framerIcon from "@/assets/images/framer-logo.svg"
import githubIcon from "@/assets/images/github-logo.svg"
import IntegrationColumn from "@/components/IntegrationColumn";


const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export default function Integrations() {
    return(
    <section className="custom-layout py-24 overflow-hidden">
        <div className="grid lg:grid-cols-2 lg:gap-16  items-center " >

        {/*TEXT-LOGO + HEADING + PARAGRAPH START */}
    <div className="flex flex-col gap-6   sm:items-center ">
        <Tag>Integrations</Tag>
        <h2 className="text-6xl font-medium mt-6 ">
            Plays well with <span className="text-lime-400">Others</span>
        </h2>
        <p className="text-white/50 mt-4 text-lg">
            Layers seamlessly connects with your favourite tools, making  it easy
             to plug into any workflow
             and collaborate platforms.
        </p>
        </div>
      {/*TEXT-LOGO + HEADING + PARAGRAPH END */}

      {/* INTEGRATIONS START */}
<div className="mt-8 h-[400px] overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
<IntegrationColumn
integrations={integrations}
/> 
<IntegrationColumn
integrations={integrations?.slice()?.reverse()}
className="md:flex hidden"
reverse
/> 
</div>
{/* INTEGRATIONS END */}
        </div>



    </section>
        );
}
