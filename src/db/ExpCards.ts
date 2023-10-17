import { ExperienceType, type ExpCard_T } from "src/interface/ExpCard";
import { MediaType} from "src/interface/MediaTypes"; 
import type {Image, SketchFabModel, Video} from "src/interface/MediaTypes"

export const cards: ExpCard_T[] = [


    // Work Experience 
    {
      title: "Fullstack Developer",
      experienceType: ExperienceType.WorkExperience,
      fields: ["Web", "Microservices"],
      tags: ["Python", "Flask", "Vue", "S3", "Docker", "SQL"],
      description: "The following was a Fullstack developer role at Dash Hudson. I worked in a team responsible for maintaining and building up a set of microservices",

      exprList: [
        "Implemented Kafka for importing and exporting data between microservices",
        "Implemented Celery task for cleaning soft-deleted records",
        "Implemented a search tool in Vue, improving entry tasks for the CS team",
        "Fixed various flakey tests, improving testing coverage of projects",
        "Monitor Datadog for potential issues and present such issues to the team."
      ],

      mediaSources: [
        {
          type: MediaType.Image,
          caption: null,
          imageUrl: "src/assets/dashHudsonLogo.png"
        } as Image
      ],

    },

    {
      title: "Application Developer",
      experienceType: ExperienceType.WorkExperience,
      fields: ["Scripting"],
      tags: ["Unix", "Perl", "Python", "Terminal", "SQL", "CronJob"],
      description: "The following was an Application Development role at CHASS @ UofT. I worked in a team of 2 mainly responsible for maintaining a set of data analytics and provisioning services",

      exprList: [
        "Implemented email notifications for data-importing cron jobs, helping inform admin on the status of jobs",
        "Automated data updates for specific procedures with scripts, eliminating the need for manual update steps.",
        "Performed data migration of SDA datasets to a newer system, allowing the launch of the newer system to users",
        "Use of Python, Perl, and Bash for writing and editing scripts",
      ],

      mediaSources: [
        {
          type: MediaType.Image,
          caption: null,
          imageUrl: "src/assets/UofTLogo.jpg"
        } as Image
      ],

    },

    {
      title: "STATA Developer",
      experienceType: ExperienceType.WorkExperience,
      fields: ["Scripting"],
      tags: ["STATA", "Python"],
      description: "The following was a Work Study at UofT at Kidney Health Education and Research Group (Nefros). A relatively short experience where I was tasked to check on the integrity of the data collected from patient studies ",

      exprList: [
        "Wrote scripts in Python and Stata to verify data integrity in patient studies"
      ],

      mediaSources: [
        {
          type: MediaType.Image,
          caption: null,
          imageUrl: "src/assets/NefrosLogo.png"
        } as Image
      ],

    },




    // Projects
    {
      title: "Collaboration Ereader",
      experienceType: ExperienceType.Project,
      fields: ["Web"],
      tags: ["Svelte", "NodeJs", "MongoDB", "Typescript"],
      description: "A final project for my web-dev course at UofT: CSCC09. It is a platform where users can upload books and collaboartive interact with them",

      exprList: [
        "Implemented Epub processing, enabling users to upload and read Epubs",
        "Implemented page highlighting, enabling users to underline sections of a book",
        "Implemented real-time page highlighting with sockets, allowing users to interact in real time with highlights"
      ],

      mediaSources:  [],

    },

    {
      title: "Media Tracker",
      experienceType: ExperienceType.Project,
      fields: ["Web"],
      tags: [".NET", "SQL", "GraphQL", "Redis", "Oauth2"],
      description: "A personal team project of 2. The idea is to show analytics based on usage for soical media users",

      exprList: [
        "Implemented 3rd party sign-in and resource authorization following Oauth2",
        "Implemented token-based authentication using JWT",
        "Implemented fetching of authorized YouTube resources"
      ],

      mediaSources:  [],

    },

    {
      title: "Microservice demo",
      experienceType: ExperienceType.Project,
      fields: ["Web", "Microservices"],
      tags: ["Java", "Maven", "SQL", "Neo4j", "MongoDB", "Docker"],
      description: "A project form a software course at UofT: CSCC01. The premise is a backend API server for a pseudo taxi bussiness",

      exprList: [
        "Implemented routes satisifed a set of requirements between microservices",
        "Setup API gateway to route requests properly",
      ],

      mediaSources:  [],

    },

    {
      title: "PintOS",
      experienceType: ExperienceType.Project,
      fields : ["OS"],
      tags: ["C", "Docker"],
      description: "A project form an OS course at UofT: CSCC69. The project invloved adding features and extending exisiting ones in an instructional OS (an OS developed for teaching purposes by) ",

      exprList: [
        "Implemented file extension, allowing the ability to write additional data to files",
        "Implemented lazing loading for frames when virtual pages are accessed",
        "Implemented parallel file system access, improving file access latency",
      ],

      mediaSources:  [],

    },

    {
      title: "Image Filters",
      experienceType: ExperienceType.Project,
      fields: ["Parallel Processing", "Images"],
      tags: ["C", "CUDA", "PThreads", "OMP", "SciNet"],
      description: 
      `Project(s) from an parallel computing course at UofT: CSC367. 
      The projects invovled building a edge-detection filter for images. 
      The main idea was to investigate and compare the performance between different parallelism approaches`
      ,

      exprList: [
        "Implemented laplacian filters for images using parallel strategies: sharded row, work queue, etc",
        "Implemented laplacian filter kernels for images with CUDA using parallel strategies on GPU",
      ],

      mediaSources:  [         
        {
          type: MediaType.Image,
          caption: "Original Image",
          imageUrl: "src/assets/images/landscape.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Image after filter (1)",
          imageUrl: "src/assets/images/landscape2.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Image after filter (2)",
          imageUrl: "src/assets/images/landscape3.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Some performance metrics (CPU)",
          imageUrl: "src/assets/images/image-filter-graph1.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Some performance metrics (GPU)",
          imageUrl: "src/assets/images/image-filter-gpu-table.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Original Image",
          imageUrl: "src/assets/images/flower.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Image after filter (1)",
          imageUrl: "src/assets/images/flower2.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Image after filter (2)",
          imageUrl: "src/assets/images/flower3.png"
        } as Image,


      ],

    },

    {
      title: "MiniC Compiler",
      experienceType: ExperienceType.Project,
      fields: ["Compiler"],
      tags: ["C++", "LLVM", "Antlr"],
      description: "A projects form a compilers course at UofT: CSC488. The project invloved building a compiler for the langauge MiniC (a subset of C).",

      exprList: [
        "Wrote grammar for MiniC, parsable by Antlr4",
        "Constructed AST in C using Antlr4 compiler actions",
        "Constructed symbol table and performed semantic checks",
        "Implemented code to perform conversion to LLVM IR",
        "Perfmored LLVM IR optimization techniques: memory to register promotion",
      ],

      mediaSources:  [],

    },


    {
      title: "Social Teaching Platform",
      experienceType: ExperienceType.Project,
      fields: ["Web"],
      tags: ["NodeJs", "React", "MongoDB"],
      description: "A final project from a software course at UofT: CSC01. The involved buidling a teaching plafform for teachers and students",

      exprList: [
        "Implemented instant direct messaging with sockets",
        "Implemented handling of files in the backend with multer",
        "Implemented profile and settings page",
        "Implemented profile searching",
      ],

      mediaSources:  [],

    },


    {
      title: "AI Projects",
      experienceType: ExperienceType.Project,
      fields: ["AI"],
      tags: ["Matlab", "C"],
      description: "A collection of projects from an AI course at UofT: CSCD84.",

      exprList: [
        "Implemented core functionality for A*, MiniMax, and QLearning for cat and mouse game in C.",
        "Implemented CSP algorithm to reduce the number of iterations in sudoku-solver",
        "Taught AI to navigate road collision game using Q-Learning in Matlab",
        "Implemented back-propagation algorithm in NeuralNet for digit classification in C",
      ],

      mediaSources:  [
        {
          type: MediaType.Video,
          caption: "Trained AI in simulated road game with minimal obstancles",
          videoUrl: "src/assets/videos/QlearningLowObstacles.mp4",
          mimeType: "mp4"
        } as Video,
        {
          type: MediaType.Video,
          caption: "Trained AI in simulated road game with many obstancles",
          videoUrl: "src/assets/videos/QlearningHighObstacles.mp4",
          mimeType: "mp4"
        } as Video,
      ],


    },

    {
      title: "Game Project",
      experienceType: ExperienceType.Project,
      fields: [],
      tags: ["Assembly", "MARS"],
      description: "A final project for a computer organization course at UofT: CSCB58",

      exprList: [
        "Implemented an obstacle collision game in Assembly",
        "Optimized repainting to only updated objects"
      ],

      mediaSources:  [
        {
          type: MediaType.Video,
          caption: "Small showcase. Rendered with MARS MIPS simulator",
          videoUrl: "src/assets/videos/AssemblyGame.mp4",
          mimeType: "mp4"
        } as Video,
      ],

    },

    {
      title: "Digit classification",
      experienceType: ExperienceType.Project,
      fields: ["Parallel Processing", "AI"],
      tags: ["C", "Unix"],
      description: 
      `Several projects from a software course at UofT: CSCC09.
      The projects invovled building a digit classifier in C.
      The main focus was the use of software tools & Unix system calls: fork, pipe, etc.
      `
      ,

      exprList: [
        "Digit classification with k-NN model using multiple child processes and pipes for computation",
        "Digit classification with decision-tree model"
      ],

      mediaSources:  [],

    },

    {
      title: "Image Inpainting",
      experienceType: ExperienceType.Project,
      fields: ["Images", "AI"],
      tags: ["Python", "Numpy", "Jupyter"],
      description: "A projects from a machine learning course at UofT: CSCC11. It involved using techniques such as regression to perform image inpainting.",

      exprList: [
        "Implemented image inpainting using RBF Regression to restore images courrupted with colored text",
      ],

      mediaSources:  [         
        {
          type: MediaType.Image,
          caption: "Original Image",
          imageUrl: "src/assets/images/Inpainting-original.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Corrupted Image",
          imageUrl: "src/assets/images/Inpainting-corrupted.png"
        } as Image,

        {
          type: MediaType.Image,
          caption: "Restored image",
          imageUrl: "src/assets/images/Inpainting-restored.png"
        } as Image,

      ],

    },


    {
      title: "Product Aggregator",
      experienceType: ExperienceType.Project,
      fields: ["Web", "Scripting"],
      tags: ["Python", "NodeJs"],
      description: "A personal project. The purpose is a search aggregation platform where searching for a product would return resutls form sites like Amazon, Best Buy, etc all aggregated in one place",

      exprList: [
        "Wrote Python scripts that scraped data from select websites with Selenium and Bs4",
        "Implemented backend route that would run scripts and store scraped data",
        "Implemented simple frontend to display results",
      ],

      mediaSources:  [],

    },

    {
      title: "Personal Website",
      experienceType: ExperienceType.Project,
      fields: ["Web"],
      tags: ["Svelte", "Typescript", "S3", "Figma"],
      description: "Check out this website and some of the features! It was bulit using the Svelte framework",

      exprList: [
        "Designed some custom svg icons using Figma",
        "Implemented website design and interactoins with Svelte",
        "Static website hosted on S3 Bucket"
      ],

      mediaSources:  [],

    },


    {
      title: "F1 in schools",
      experienceType: ExperienceType.Project,
      fields: ["3D Modeling"],
      tags: ["AutoCad", "CNC Routing", "3D Printing"],
      description: "The following was STEM competition for high schools: F1 in schools. The goal was to build the fasting C02 racecar following a set of requirements. I was the designer as well as the manufacturer for the team",

      exprList: [
        "3D modeled miniature cars in AutoCAD while conforming to a set of tight constraints",
        "Setup and machined body of car using CNC router",
        "Setup and 3D printed other car parts such as wheels",
        "Finishing of car which involves sanding and attaching axels, bearings, wheel, and other 3D printed parts",
      ],

      mediaSources: [
        {
          type: MediaType.SketchFabModel,
          caption: "Recreation of Infinitude (SketchFab)",
          embedHTML: `<iframe title="Infinitude Recreate" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="174" height="174" src="https://sketchfab.com/models/25a2169d42ec4c0cae11d4d1d455ba1f/embed?ui_theme=dark"> </iframe>`
        } as SketchFabModel,

        {
          type: MediaType.SketchFabModel,
          caption: "Recreation of FastPayce (SketchFab)",
          embedHTML: `<div class="sketchfab-embed-wrapper"> <iframe title="FastPayce_Recreate" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="174" height="174" src="https://sketchfab.com/models/e25927736a8b4f2db7391399b779f2a4/embed?ui_theme=dark"> </iframe> </div>`
        } as SketchFabModel,

        {
          type: MediaType.SketchFabModel,
          caption: "Team's inital car",
          embedHTML: `<div class="sketchfab-embed-wrapper"> <iframe title="Kairos" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="174" height="174" src="https://sketchfab.com/models/0fc723b2229840adb17a0e6b77f43ad2/embed?ui_theme=dark"> </iframe> </div>`
        } as SketchFabModel,
        
      ],

    },


];

export const workExperienceCards: ExpCard_T[] = cards.filter(card => card.experienceType == ExperienceType.WorkExperience);
export const projectCards: ExpCard_T[] = cards.filter(card => card.experienceType == ExperienceType.Project);