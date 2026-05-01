import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";

const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Figma", icon: FiFigma, color: "#F24E1E" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
];

export function TechMarquee() {
    return (
        <section className="py-24 overflow-hidden bg-transparent relative border-t border-border">
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
