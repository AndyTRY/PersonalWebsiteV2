import type { ExpCard_T } from "src/interface/ExpCard";

export const cards: ExpCard_T[] = [


    // Work Experience 
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

      imgSrces: [
        "src/assets/dashHudsonLogo.png"
      ],

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

      imgSrces: [
        "src/assets/UofTLogo.jpg"
      ],

    },

    {
      title: "STATA Developer",
      tags: ["Work Experience", "Scripting", "STATA", "Python"],
      description: "The following was a Work Study at UofT at Kidney Health Education and Research Group (Nefros). A relatively short experience where I was tasked to check on the integrity of the data collected from patient studies ",

      exprList: [
        "Wrote scripts in Python and Stata to verify data integrity in patient studies"
      ],

      imgSrces: [
        "src/assets/NefrosLogo.png"
      ],

    },




    // Projects
    {
      title: "Collaboration Ereader",
      tags: ["Project", "Web", "Svelte", "NodeJs", "MongoDB", "Typescript"],
      description: "A final project for my web-dev course at UofT: CSCC09. It is a platform where users can upload books and collaboartive interact with them",

      exprList: [
        "Implemented Epub processing, enabling users to upload and read Epubs",
        "Implemented page highlighting, enabling users to underline sections of a book",
        "Implemented real-time page highlighting with sockets, allowing users to interact in real time with highlights"
      ],

      imgSrces:  [],

    },

    {
      title: "Microservice demo",
      tags: ["Project", "Web", "Java", "Maven", "SQL", "Neo4j", "MongoDB", "Docker"],
      description: "A project form a software course at UofT: CSCC01. The premise is a backend API server for a pseudo taxi bussiness",

      exprList: [
        "Implemented routes satisifed a set of requirements between microservices",
        "Setup API gateway to route requests properly",
      ],

      imgSrces:  [],

    },

    {
      title: "PintOS",
      tags: ["Project", "OS", "C", "Docker"],
      description: "A project form an OS course at UofT: CSCC69. The project invloved adding features and extending exisiting ones in an instructional OS (an OS developed for teaching purposes by) ",

      exprList: [
        "Implemented file extension, allowing the ability to write additional data to files",
        "Implemented lazing loading for frames when virtual pages are accessed",
        "Implemented parallel file system access, improving file access latency",
      ],

      imgSrces:  [],

    },

    {
      title: "Parallel Processing Image Filters",
      tags: ["Project", "Parallel Processing", "C", "Cuda"],
      description: "Serveral projects form an parallel computing course at UofT: CSC367. Projects invovled implementing methods of optimizing image processing with parallelism techniques",

      exprList: [
        "Implemented laplacian filters for images using parallel strategies: sharded row, work queue, etc",
        "Implemented laplacian filter kernels for images with CUDA using parallel strategies on GPU",
      ],

      imgSrces:  [],

    },

    {
      title: "MiniC Compiler",
      tags: ["Project", "Compiler", "Cplusplus", "LLVM", "Antlr"],
      description: "A projects form a compilers course at UofT: CSC488. The project invloved building a compiler for the langauge MiniC (a subset of C).",

      exprList: [
        "Wrote grammar for MiniC, parsable by Antlr4",
        "Constructed AST in C using Antlr4 compiler actions",
        "Constructed symbol table and performed semantic checks",
        "Implemented code to perform conversion to LLVM IR",
        "Perfmored LLVM IR optimization techniques: memory to register promotion",
      ],

      imgSrces:  [],

    },


    {
      title: "Social Teaching Platform",
      tags: ["Project", "Web", "NodeJs", "React", "MongoDB"],
      description: "A final project from a software course at UofT: CSC01. The involved buidling a teaching plafform for teachers and students",

      exprList: [
        "Implemented instant direct messaging with sockets",
        "Implemented handling of files in the backend with multer",
        "Implemented profile and settings page",
        "Implemented profile searching",
      ],

      imgSrces:  [],

    },


    {
      title: "AI Projects",
      tags: ["Project", "AI", "Matlab", "C"],
      description: "A collection of projects from an AI course at UofT: CSCD84.",

      exprList: [
        "Implemented core functionality for A*, MiniMax, and QLearning for cat and mouse game in C.",
        "Implemented CSP algorithm to reduce the number of iterations in sudoku-solver",
        "Taught AI to navigate road collision game using Q-Learning in Matlab",
        "Implemented back-propagation algorithm in NeuralNet for digit classification in C",
      ],

      imgSrces:  [],

    },

    {
      title: "Game Project",
      tags: ["Project", "Assembly"],
      description: "A final project for a computer organization course at UofT: CSCB58",

      exprList: [
        "Implemented an obstacle collision game in Assembly",
      ],

      imgSrces:  [],

    },

    {
      title: "Digit classification",
      tags: ["Project", "C",],
      description: "Several projects from a software course at UofT: CSCC09. It involved using low level tool software tools to implement Ml algorithms",

      exprList: [
        "Digit classification with k-NN model using multiple child processes and pipes for computation",
        "Digit classification with decision-tree model"
      ],

      imgSrces:  [],

    },

    {
      title: "Image Inpainting",
      tags: ["Project", "Image Processing", "AI", "Python",],
      description: "A projects from a machine learning course at UofT: CSCC11. It involved using techniques regression to perform image inpainting.",

      exprList: [
        "Implemented image inpainting using RBF Regression to restore images courrupted with colored text",
      ],

      imgSrces:  [         
        "src/assets/Inpainting-original.png",
        "src/assets/Inpainting-corrupted.png",
        "src/assets/Inpainting-restored.png",
        "src/assets/Inpainting-original.png",
        "src/assets/Inpainting-corrupted.png",
        "src/assets/Inpainting-restored.png"
      ],

    },


    {
      title: "Product Search Aggregator",
      tags: ["Project", "Web", "Scripting", "Python", "NodeJs"],
      description: "A personal project. The purpose is a search aggregation platform where searching for a product would return resutls form sites like Amazon, Best Buy, etc in 1 place.",

      exprList: [
        "Wrote Python scripts that scraped data from select websites with Selenium and Bs4",
        "Implemented backend route that would run scripts and store scraped data",
        "Implemented simple frontend to display results",
      ],

      imgSrces:  [],

    },

    {
      title: "Personal Website",
      tags: ["Project", "Web", "Svelte", "Typescript", "AWS"],
      description: "Should I be listing the building of my personal website that your currently on as an experience? I decided why not.",

      exprList: [
        "Designed some custom svg icons using Figma",
        "Implemented website design and interactoins with Svelte",
      ],

      imgSrces:  [],

    },


    {
      title: "F1 in schools",
      tags: ["Project", "3D Modeling", "AutoCad", "CNC Routing", "3D printing"],
      description: "The following was STEM competition for high schools: F1 in schools. The goal was to build the fasting C02 racecar following a set of requirements. I was the designer as well as the manufacturer for the team",

      exprList: [
        "3D modeled miniature cars in AutoCAD while conforming to a set of tight constraints",
        "Setup and machined body of car using CNC router",
        "Setup and 3D printed other car parts such as wheels",
        "Finishing of car which involves sanding and attaching axels, bearings, wheel, and other 3D printed parts",
      ],

      imgSrces: [
        "src/assets/dashHudsonLogo.png"
      ],

    },


    

    

    




    









];