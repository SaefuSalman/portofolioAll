import React from "react";
// import { ReactSVG } from "react-svg";
import OdooSvg from "../assets/svg/odoo-vector-logo.svg";
import Postgresql from "../assets/svg/Postgresql_elephant.svg"
import XmlSvg from "../assets/svg/xml-svgrepo-com.svg"
import { HiOutlineDesktopComputer, HiCode } from "react-icons/hi";

function Projects(){
    const body = [
        {
            id: 1,
            img: "odoo 14",
            heading: "RPX Logistik",
            subheading: "Odoo 14",
            tentang: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quidem. Rerum expedita voluptates, earum laborum cumque consectetur nesciunt aut, libero voluptatum fuga iusto inventore aperiam, maxime minima alias doloribus praesentium.",
            liveDemo: "#",
            technology: [
                OdooSvg,
                Postgresql,
                XmlSvg
            ]
        },
        {
            id: 2,
            img: "odoo 13",
            heading: "Sistem Rumah Sakit",
            subheading: "Odoo 13 | 15",
            tentang: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quidem. Rerum expedita voluptates, earum laborum cumque consectetur nesciunt aut, libero voluptatum fuga iusto inventore aperiam, maxime minima alias doloribus praesentium.",
            liveDemo: "#",
            technology: [
                OdooSvg,
                Postgresql,
                XmlSvg
            ]
        }
    ]

    return(
        <section>
            <div className="flex flex-col" id="projects">
                <div className="flex flex-col mt-10 lg:gap-16 lg:mt-16">
                    {body.map((project, index)=>{
                    console.log(index, 'ppp')
                    return (
                        <div key={index} className="flex flex-col-reverse gap-3 lg:px-4  lg:justify-start lg:items-start border-b-2 last:border-b-0 border-third/50">
                            <div>
                                <article className="lg:grid lg:grid-cols-2 lg:gap-3 justify-center" >
                                    <div>
                                        <h2 className="text-primary text-left text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 2xl:text-7xl">
                                            {project.heading}
                                        </h2>
                                        <p>
                                            {project.subheading}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-third text-left text-base md:text-lg mt-3 2xl:mt-6 2xl:text-3xl">
                                        {project.tentang}
                                        </p>
                                        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:items-center mt-9 lg:mt-5 2xl:mt-8">
                                            <div className="flex gap-5">
                                                <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer"
                                                >
                                                <HiCode className="w-7 h-7 lg:w-9 lg:h-9 2xl:w-12 2xl:h-12 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                                                </a>
                                                <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer"
                                                >
                                                <HiOutlineDesktopComputer className="w-7 h-7 lg:w-9 lg:h-9 2xl:w-12 2xl:h-12 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                                                </a>
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                                {project.technology?.map((item, index) => (
                                                <img
                                                    src={item}
                                                    key={index}
                                                    className="w-8 h-8 lg:w-10 lg:h-10"
                                                    alt="odoo"
                                                />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-10 text-left gap-5 lg:mb-12 xl:mb-0"></div>
                                </article>
                                <div className="flex flex-col mx-auto justify-center items-center mt-12 lg:mt-0 mb-6 lg:mb-12">
                                    <img src={project.img} className="px-3 md:px-20 xl:px-0" alt="img"/>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        
    )

}

export default Projects