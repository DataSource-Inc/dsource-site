export interface InsightSection {
  heading: string;
  body?: string;
  image?: string;
}

export interface Insight {
  title: string;
  slug: string;
  icon: string;
  excerpt: string;
  sections: InsightSection[];
}

export const insights: Insight[] = [
  {
    title:
      "Breaking down how Trusted Workforce will improve productivity for Personnel Security offices",
    slug: "trusted-workforce-productivity",
    icon: "/insights/icon-1.svg",
    excerpt:
      "Getting rid of periodic reinvestigations is a clearly huge time savings for Personnel Security offices \u2013 and besides, the long time period between investigations was just too long and really ineffective for ensuring the suitability of the federal workforce on a continual basis.",
    sections: [
      {
        heading: "Moving Beyond Periodic Reinvestigations",
        body: "Getting rid of periodic reinvestigations is a clearly huge time savings for Personnel Security offices \u2013 and besides, the long time period between investigations was just too long (5 years) and thus, really ineffective for ensuring the suitability of the federal workforce on a continual basis.",
      },
      {
        heading: "Continuous Evaluation and the Increased Agency Workload",
        body: "Of course, we\u2019re replacing periodic reinvestigations with CE/CV, which will be an ongoing process: Background Investigation Service Providers (DCSA being by far the largest) are the ones doing the continual monitoring for relevant events and information, but the individual (hiring) agencies must process them, determine what to do about them, communicate with the Subject and others, and report their actions; it will be a lot of work, and when an agency implements CE/CV for their low-risk workers (TW 2.0), the increase in work may be overwhelming. Another question: will CE/CV really gather all the information of concern that was gathered in the reinvestigation process? We know that CE/CV information will be timelier, but will its scope be as broad? Think of the various people who were proactively contacted and interviewed during a reinvestigation.",
      },
      {
        heading: "Increasing Productivity Through Technology",
        body: "The obvious answer to how agencies can effectively deal with an increased workload without a proportional increase in personnel is to increase productivity. And the way to do that is with better technology \u2013 increased automation and more automated interfaces. Because Personnel Security is a critical component of both Human Resources and Security, the agency background investigation/clearance system can be integrated with organizational HR and Security systems as part of an enterprise approach, which typically produces notable productivity increases. Of course, the Agency\u2019s Personnel Security system needs to interface with all DCSA systems and there are a variety of third-party system API\u2019s that can benefit Personnel Security. To help agencies be successful with Trusted Workforce, there are also several API\u2019s that DCSA can implement and make available that will save agencies quite a bit of time. In short, effective use of technology can solve the workload challenge.",
      },
      {
        heading: "Addressing Potential Information Gaps",
        body: "About the potential gaps in information: we are optimistic that the PAC\u2019s long-term plan will be effective. We understand that there is a plan to implement an annual questionnaire and review process that will include reaching out to the Subject\u2019s supervisor to check for potential issues, including issues that are regularly addressed as part of insider threat awareness. Especially considering that there is to be a greater in-office presence, this ought to go a long way in covering potential gaps in information. Routine, day-in, day-out in-person interaction and supervision, and a new evaluation process involving Personnel Security seems promising as a supplement to CE/CV.",
      },
    ],
  },
  {
    title:
      "How Personnel Security is at the hub of key operational processes for Federal Agencies",
    slug: "personnel-security-hub",
    icon: "/insights/icon-2.svg",
    excerpt:
      "Personnel Security is a fundamental component of both Human Resources/Human Capital and Security. It has to spring into action for hiring, terminations, new contracts, and reports of financial issues, arrests, or other concerns.",
    sections: [
      {
        heading: "The Role of Personnel Security",
        body: "Personnel Security is a fundamental component of both Human Resources/Human Capital and Security. Just for starts, it has to spring into action if someone is hired or terminated, if there is a new contract or contractor or if a contractor is assigned to a different contract, or if there is a report of a financial issue or an arrest or criminal behavior or failure to pay taxes or a divorce or international travel, or if someone is detailed to another agency.",
      },
      {
        heading: "Personnel Security Ecosystem",
        image: "/ps-ecosystem.png",
      },
      {
        heading: "Day-to-Day Information Sharing",
        body: "Personnel Security needs to coordinate with other groups about PIV cards, physical access, and system access, and must communicate with applicants and employees and contractors as well as Human Resources, ER/LR, CORs, DCSA, ODNI, agency management, and others.",
      },
      {
        heading: "Continuous Oversight",
        body: "Essentially, Personnel Security offices need to continually be aware of and track every relevant fact about every worker based on national suitability and clearance standards. They are very busy, and our hats are off to them!",
      },
      {
        heading: "Supporting the Work with ABIS",
        body: "Our promise is to keep making ABIS better and better to make the lives of personnel security workers easier.",
      },
    ],
  },
  {
    title: "The benefits of Integration",
    slug: "benefits-of-integration",
    icon: "/insights/icon-3.svg",
    excerpt:
      "The degree to which your background investigation/clearance case management application is integrated with HR and Security systems greatly impacts the agency\u2019s ability to function like a well-oiled machine.",
    sections: [
      {
        heading: "System Integration and Operational Efficiency",
        body: "Personnel Security is an essential function of both Human Resources and Security departments. The degree to which your background investigation/clearance case management application is integrated with those systems greatly impacts the agency\u2019s ability to function \u201Clike a well-oiled machine,\u201D which is what we all strive for.",
      },
      {
        heading: "Trusted Workforce and the Role of Automation",
        body: "Trusted Workforce will create more work for agencies, but an enterprise approach with significant automation can make it a net positive in terms of both effectiveness and time/$$ spent.",
      },
    ],
  },
  {
    title: "How Personnel Security is always evolving",
    slug: "personnel-security-evolving",
    icon: "/insights/icon-4.svg",
    excerpt:
      "We\u2019ve been in Personnel Security for 25 years and have seen how it is always changing and evolving, from paper forms to eQIP, eDelivery, ODNI metrics reporting, and now Trusted Workforce.",
    sections: [
      {
        heading: "A Long History in Personnel Security",
        body: "We\u2019ve been in Personnel Security for 25 years and have seen how it is always changing and evolving. 20+ years ago, we moved from paper forms to eQIP for collecting information from federal employee applicants and contractors. A few years later brought the advent of eDelivery, then ODNI metrics reporting. Now for the last 10+ years, the Trusted Workforce initiative has been in progress.",
      },
      {
        heading: "Constant Change and Ongoing Challenges",
        body: "There is always something going on in Personnel Security, and we imagine that this will always be the case because the government has to do its best to ensure the suitability and safety of the federal workforce. Cracks in the system will appear that need to be addressed; technology will improve and offer increased accuracy and productivity and so need to be utilized; organizational changes will keep happening that will affect personnel-related processes; and on and on.",
      },
      {
        heading: "Keeping up with Evolving Requirements",
        body: "The systems that agencies use to process background investigations and clearances will need to keep up with these changes to enable Personnel Security to do their job effectively and keep the government humming along. We recognize this fact and proactively plan for adaptability when we design new features and capabilities for ABIS so it does not turn into the proverbial \u201Cpatchwork quilt\u201D that is difficult to change.",
      },
    ],
  },
];
