import type { ExpCard_T } from "src/interface/ExpCard";

export const cards: ExpCard_T[] = [
    {
      title: "Fullstack Developer",
      tags: ["Work Experience", "Web", "Python", "Flask",  "Vue", "Docker", "Microservices", "SQL"],
      description: "The following was a Fullstack developer role at Dash Hudson. I worked in a team responsible for maintaining and building up a set of microservices",

      exprList: [
        "Implemented Kafka for importing and exporting data between microservices",
        "Implemented Celery task for cleaning soft-deleted records",
        "Implemented a search tool in Vue, improving entry tasks for the CS team",
        "Fixed various flakey tests, improving testing coverage of projects",
        "Monitor Datadog for potential issues and present such issues to the team."
      ],

      imgSrc: "src/assets/dashHudsonLogo.png",

    },

    {
      title: "Application Developer",
      tags: ["Work Experience", "Scripting", "Perl", "Python", "Terminal", "SQL"],
      description: "The following was an Application Development role at CHASS @ UofT. I worked in a team of 2 mainly responsible for maintaining a set of data analytics and provisioning services",

      exprList: [
        "Implemented email notifications for data-importing cron jobs, helping inform admin on the status of jobs",
        "Automated data updates for specific procedures with scripts, eliminating the need for manual update steps.",
        "Performed data migration of SDA datasets to a newer system, allowing the launch of the newer system to users",
        "Use of Python, Perl, and Bash for writing and editing scripts",
      ],

      imgSrc: "src/assets/UofTLogo.jpg",

    },

    {
      title: "STATA Developer",
      tags: ["Work Experience", "Scripting", "STATA", "Python"],
      description: "The following was a Work Study at UofT at Kidney Health Education and Research Group (Nefros). A relatively short experience where I was tasked to check on the integrity of the data collected from patient studies ",

      exprList: [
        "Wrote scripts in Python and Stata to verify data integrity in patient studies"
      ],

      imgSrc: "src/assets/NefrosLogo.png",

    },

];