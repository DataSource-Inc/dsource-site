export interface Customer {
  name: string;
  abbreviation: string;
  logo: string;
  about: string;
}

export const customers: Customer[] = [
  {
    name: "Internal Revenue Service",
    abbreviation: "IRS",
    logo: "/irs-logo.png",
    about:
      "DataSource has supported the IRS for 25 years, beginning with ABIS implementation, and then continual enhancements based on evolving customer needs, government directives and initiatives, and opportunities to implement new interfaces in support of IRS\u2019s enterprise. IRS\u2019s ABIS system has almost 50 interface transaction types, including with its HR systems, Contracts system, ER/LR (Employee Relations/Labor Relations) system, PDS system through which system access and computer/equipment and desk space assignment are handled, and of course, DCSA systems.\n\nABIS also interfaces with \u201CTax Check\u201D at the IRS for initial vetting of new employees and contractors plus all active contractors once a year. When the IRS gave up its delegated authority in 2008, we worked closely with OPM and the IRS to develop a comprehensive process using eDelivery and assisted with the eDelivery design.\n\nAt any given time, there are 200-300 people in IRS Personnel Security, who are responsible for the processing of about 6,000 cases per month. ABIS\u2019s application security functionality supports the manner in which the IRS manages, assigns, and approves work for its Personnel Security workforce as they have a greater-than-usual degree of variety in the tasks and roles that individuals can be assigned and permitted to perform.",
  },
  {
    name: "Library of Congress",
    abbreviation: "LOC",
    logo: "/loc-logo.png",
    about:
      "LOC is doing an exceptional job of integrating Personnel Security processes with related HR onboarding applications and Physical Security (both badging and facility access) systems, as well as systems that assign computers and other equipment, allocate desk space, and create network credentials, and of course, all DCSA systems including:\n\neDelivery (SAC\u2019s, completed records, RSI\u2019s, delayed replies, electronic file releases (EFR\u2019s) and Rap Back hits), eApp mass initiation, PIPS, Daily Status File, OF79a Adjudications, CVS File Creation, DCSA Rapback Enrollment/Unenrollment/Verification and Enrollment Errors, DCSA Continuous Vetting Enrollment/Unenrollment and Enrollment Errors, and CV Adjudication Results.\n\nThis enterprise approach is greatly enhancing productivity and minimizing human error at LOC.",
  },
  {
    name: "Small Business Administration",
    abbreviation: "SBA",
    logo: "/sba-logo.png",
    about:
      "The SBA was an early adopter of Trusted Workforce. DataSource worked with SBA to provide all the functionality needed in ABIS to accomplish:\n\nRapBack enrollment/unenrollment/maintenance, Processing of RapBack hits received via eDelivery, CV enrollment, CV unenrollment, Processing of CV cases for federal employees and contractors, Transmitting CV adjudication results back to DCSA, and Reporting of enrollment statistics.\n\nWe continue to work with DCSA to achieve the maximum level of productivity for our customers through optimized integration and interfaces so that they can effectively handle the new workload related to Trusted Workforce initiatives.",
  },
  {
    name: "U.S. International Trade Commission",
    abbreviation: "USITC",
    logo: "/usitc-logo.png",
    about:
      "USITC needed a streamlined process for vetting visitors who come to demonstrate their products at USITC offices. We created a process allowing any USITC employee to enter visitor information for automatic transmission to ABIS, triggering a process for appropriate security checks, followed by transmission of information to Physical Security to let them know whether or not to allow the visitor entry to USITC offices. This is an example of how ABIS enables users to configure unique processes based on case type.",
  },
  {
    name: "Consumer Financial Protection Bureau",
    abbreviation: "CFPB",
    logo: "/cfpb-logo.png",
    about:
      "CFPB was seeking a way to reduce the exposure of PII data initially provided by Subjects to kick off the background investigation process. DataSource created a secure and efficient method of gathering information from applicants and receiving it in ABIS that effectively reduces PII exposure, minimizes human error and allows flexibility in the type of data collected. This process speeds up case processing times, and eliminates exposure of PII to CORs and other individuals who do not need to have access to PII data, thus fulfilling the government\u2019s obligation to protect the PII of the public.",
  },
];
