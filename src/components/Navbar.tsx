import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className:string}) {
  const social = [
    {
      Link: "https://linkedin.com/in/exeis10",
      Label: "Linkdin",
      Icon: SiLinkedin,
    },

    {
      Link: "https://facebook.com/eXeis-ixt",
      Label: "Facebook",
      Icon: SiFacebook,
    },

    {
      Link: "https://github.com/eXeis-ixt",
      Label: "GitHub",
      Icon: SiGithub,
    },
  ];

  return (
    <nav className={cn(" py-10 flex justify-between items-center", className)}>
      <h1 className=" text-2xl font-bold underline underline-offset-8 decoration-green-400 -rotate-2">
        Fahad Bhuiyan
      </h1>

      <div className=" flex items-center gap-5">
        {social.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className=" w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

// export default Navbar;
