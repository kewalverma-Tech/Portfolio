import { FaReact, FaPython, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobeaftereffects, SiAdobephotoshop } from "react-icons/si";

const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Figma", icon: FiFigma, color: "#F24E1E" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export function TechMarquee() {
    return (
        <section className="py-24 overflow-hidden bg-transparent relative border-t border-white/5">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div className="flex w-max group hover:pause">
                {/* Loop 1 */}
                <div className="flex space-x-24 shrink-0 animate-marquee items-center py-4">
                    {techStack.map((tech, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center group/icon cursor-pointer">
                            <tech.icon
                                size={64}
                                color={tech.color}
                                className="grayscale opacity-50 transition-all duration-500 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-110"
                            />
                        </div>
                    ))}
                    {/* Spacer for loop connection */}
                    <div className="w-24 shrink-0" />
                </div>

                {/* Loop 2 */}
                <div className="flex space-x-24 shrink-0 animate-marquee items-center py-4" aria-hidden="true">
                    {techStack.map((tech, idx) => (
                        <div key={`dup-${idx}`} className="flex flex-col items-center justify-center group/icon cursor-pointer">
                            <tech.icon
                                size={64}
                                color={tech.color}
                                className="grayscale opacity-50 transition-all duration-500 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-110"
                            />
                        </div>
                    ))}
                    <div className="w-24 shrink-0" />
                </div>
            </div>
        </section>
    );
}
