import { useState } from 'react';

const CONTENT = [
  {
    isExpanded: false,
    category_name: "Item 1",
    question: "How do I change my billing credit card?",
    answer:
      "Be sure to use the same email address where you receive membership emails and then fill out this form. Note that you may see a temporary transaction for $1 that will go away once your card is verified as valid.",
    subcategory: [
      { id: 1, val: "Sub Cat 1" },
      { id: 3, val: "Sub Cat 3" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 2",
    question: "How do I change my billing credit card?",
    answer:
      "Be sure to use the same email address where you receive membership emails and then fill out this form. Note that you may see a temporary transaction for $1 that will go away once your card is verified as valid.",

    subcategory: [
      { id: 4, val: "Sub Cat 4" },
      { id: 5, val: "Sub Cat 5" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 3",
    question: "How do I change my billing credit card?",
    answer:
      "Be sure to use the same email address where you receive membership emails and then fill out this form. Note that you may see a temporary transaction for $1 that will go away once your card is verified as valid.",

    subcategory: [
      { id: 7, val: "Sub Cat 7" },
      { id: 9, val: "Sub Cat 9" },
    ],
  },
];
const CONTENT2 = [
  {
    isExpanded: false,
    category_name: "Item 1",
    question: "How do I change my billing credit card?",
    answer:
      "Be sure to use the same email address where you receive membership emails and then fill out this form. Note that you may see a temporary transaction for $1 that will go away once your card is verified as valid.",
    subcategory: [
      { id: 1, val: "Sub Cat 1" },
      { id: 3, val: "Sub Cat 3" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 2",
    question: "How do I change my billing credit card?",
    answer:
      "Be sure to use the same email address where you receive membership emails and then fill out this form. Note that you may see a temporary transaction for $1 that will go away once your card is verified as valid.",

    subcategory: [
      { id: 4, val: "Sub Cat 4" },
      { id: 5, val: "Sub Cat 5" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 3",
    question: "How do I change my billing credit card?",
    answer:
      "Be sure to use the same email address where you receive membership emails and then fill out this form. Note that you may see a temporary transaction for $1 that will go away once your card is verified as valid.",

    subcategory: [
      { id: 7, val: "Sub Cat 7" },
      { id: 9, val: "Sub Cat 9" },
    ],
  },
];
export const DATA = [
  {
    category: 'Same industry',
    img: require('../assets/images/2.jpg'),
    name: 'Shequita Hall',
    short: 'Your Soul Sistah',
    description:
      'She has things in common with you.  You  live in the same city, run a business in the same industry, have similar goals or be at the same business stage. ',
  },
  {
    category: '6 yrs business experience',
    img: require('../assets/images/1.jpg'),
    name: 'Ebony Lewis',
    short: 'Your Soul Sistah',
    description:
      'Someone who can share her wisdom, life advice, and resources based on her expertise. She might be your mentor in a specific area related to your goals.',
  },
  {
    category: '1 yr in business',
    img: require('../assets/images/4.jpg'),
    name: 'Jasmine Walker',
    short: 'Your Little Sis',
    description: `Someone who reminds you how much you've learned by giving you the opportunity to mentor them.`,
  },
  {
    category: 'business',
    img: require('../assets/images/11.jpg'),
    name: 'Lisa Ann',
    short: 'Your Little Sis',
    description: `Someone who reminds you how much you've learned by giving you the opportunity to mentor them.`,
  },
  {
    category: 'Lives in  Berlin',
    img: require('../assets/images/5.jpg'),
    name: 'Tiana King',
    short: 'Your Wild Card',
    description: `Someone who has a business or background that is wildly different from your own, but she can provide a fresh perspective to your challenges. `,
  },
  {
    category: 'Marketing',
    img: require('../assets/images/6.jpg'),
    name: 'Jada Davis',
    short: 'Business Support Sis',
    description: `Someone who is offering freelance services that can help you address your business goals.`,
  },
];
export const HOMEDATA = [
  {
    category: 'Same industry',
    img: require('../assets/images/2.jpg'),
    name: 'Shequita Hall',
    short: 'Skinfulness',
    description:
      'Denver, CO',
  },
  {
    category: '6 yrs business experience',
    img: require('../assets/images/1.jpg'),
    name: 'Ebony Lewis',
    short: 'Skinfulness',
    description:
      'Denver, CO',
  },
  {
    category: '1 yr in business',
    img: require('../assets/images/4.jpg'),
    name: 'Jasmine Walker',
    short: 'Skinfulness',
    description: `Denver, CO`,
  },
  {
    category: 'business',
    img: require('../assets/images/11.jpg'),
    name: 'Lisa Ann',
    short: 'Skinfulness',
    description: `Denver, CO`,
  },
  {
    category: 'Lives in  Berlin',
    img: require('../assets/images/5.jpg'),
    name: 'Tiana King',
    short: 'Skinfulness',
    description: `Denver, CO`,
  },
  {
    category: 'Marketing',
    img: require('../assets/images/6.jpg'),
    name: 'Jada Davis',
    short: 'Skinfulness',
    description: `Denver, CO`,
  },
];

export const TASKS = [
  {
    task: 'Add new products to the website.',
    category: 'WEB',
    target: 'AUG 9',
    members: [
      require('../assets/images/1.jpg'),
      require('../assets/images/2.jpg'),
      require('../assets/images/3.png'),
    ],
  },
  {
    task: 'Update Website Cart',
    category: 'WEB',
    target: 'AUG 12',
    members: [
      require('../assets/images/4.jpg'),
      require('../assets/images/5.jpg'),
      require('../assets/images/6.jpg'),
      require('../assets/images/7.jpg'),
    ],
  },
  {
    task: 'Start UjaCoin',
    category: 'App',
    target: 'AUG 25',
    members: [
      require('../assets/images/8.jpg'),
      require('../assets/images/9.jpg'),
      require('../assets/images/10.jpg'),
      require('../assets/images/11.jpg'),
    ],
  },
];
export const GROUPS = [
  {
    title: 'Lead generation',
    location: 'Virtual',
    description:
      'Nunc purus nunc sem mauris. Tristique a aenean egestas lectus pulvinar. Convallis ullamcorper dignissim in arcu sed lectus id...',
    members: [
      require('../assets/images/12.png'),
      require('../assets/images/1.jpg'),
      require('../assets/images/14.jpg'),
      require('../assets/images/15.jpg'),
    ],
  },
  {
    title: 'AFS Square',
    location: 'Virtual',
    description:
      'Nunc purus nunc sem mauris. Tristique a aenean egestas lectus pulvinar. Convallis ullamcorper dignissim in arcu sed lectus id...',
    members: [
      require('../assets/images/16.png'),
      require('../assets/images/17.png'),
      require('../assets/images/7.jpg'),
      require('../assets/images/8.jpg'),
    ],
  },
];
export const EVENTS = [
  {
    title: 'Black Girl Therapy',
    date: 'WED, AUG 12, 11:00 am',
    members: [
      require('../assets/images/1.jpg'),
      require('../assets/images/2.jpg'),
      require('../assets/images/4.jpg'),
      require('../assets/images/5.jpg'),
    ],
    img: require('../assets/images/13.png'),
  },
  {
    title: 'Happy New Year',
    date: 'WED, AUG 12, 11:00 am',
    members: [
      require('../assets/images/6.jpg'),
      require('../assets/images/7.jpg'),
      require('../assets/images/8.jpg'),
      require('../assets/images/9.jpg'),
    ],
    img: require('../assets/images/13.png'),
  },
];
export const MEETINGS = [
  {
    title: 'Sistahleads',
    date: '4 weeks  |  Jul 20—Sep 18',
    members: [
      require('../assets/images/1.jpg'),
      require('../assets/images/2.jpg'),
      require('../assets/images/4.jpg'),
      require('../assets/images/5.jpg'),
      
    ],
    desc:"In this group, you will collaborate to generate leads, organize your leads so that you can reach your sales goals.",
    img: require('../assets/images/13.png'),
  },
  {
    title: 'Sistahleads',
    date: '4 weeks  |  Jul 20—Sep 18',
    members: [
      require('../assets/images/6.jpg'),
      require('../assets/images/7.jpg'),
      require('../assets/images/8.jpg'),
      require('../assets/images/9.jpg'),
    ],
    desc:"In this group, you will collaborate to generate leads, organize your leads so that you can reach your sales goals.",
    img: require('../assets/images/13.png'),
  },
];
export const LIBRARY = [
  {
    category: 'For You',
    title: 'Salesforce Funnel',
    type: 'PDF',
    img: require('../assets/images/group.jpg'),
  },
  {
    category: 'New',
    title: 'Salesforce Funnel',
    type: 'PDF',
    img: require('../assets/images/group.jpg'),
  },
  {
    category: 'Accounting',
    title: 'Sow app document',
    type: 'doc',
    img: require('../assets/images/group.jpg'),
  },
  {
    category: 'SALES',
    title: 'Salesforce Funnel',
    type: 'PDF',
    img: require('../assets/images/group.jpg'),
  },
  {
    category: 'Strategy',
    title: 'UjaCoin app document',
    type: 'doc',
    img: require('../assets/images/group.jpg'),
  },
];
export const ASSIGNMENTS = [
  {
    type: 'GROUP',
    title: 'Round table sheet',
    due: 'No Due Date',
    img: require('../assets/images/group.jpg'),
    isClosed: false,
    desc: 'Describe how the concept of gaslighting in Ch. 1 has impacted your business success this year. We will be sharing the information in the Zoom gathering 3.',
  },
  {
    type: 'individual',
    title: 'Session 1 reflection',
    due: 'Due on AUG 20 2020, 10:59 AM',
    img: require('../assets/images/individual.png'),
    isClosed: false,
    desc: 'Describe how the concept of gaslighting in Ch. 1 has impacted your business success this year. We will be sharing the information in the Zoom gathering 3.',
  },
  {
    type: 'individual',
    title: 'Session 2 reflection',
    due: 'Due on AUG 13 2020, 10:59 AM',
    img: require('../assets/images/individual.png'),
    isClosed: false,
    desc: 'Describe how the concept of gaslighting in Ch. 1 has impacted your business success this year. We will be sharing the information in the Zoom gathering 3.',
  },
  {
    type: 'individual',
    title: 'Session 3 reflection',
    due: 'Due on AUG 13 2020, 10:59 AM',
    img: require('../assets/images/individual.png'),
    isClosed: false,
    desc: 'Describe how the concept of gaslighting in Ch. 1 has impacted your business success this year. We will be sharing the information in the Zoom gathering 3.',
  },
  {
    type: 'individual',
    title: 'Book research',
    due: 'Closed on JUL 29 2020',
    img: require('../assets/images/individual_color.png'),
    isClosed: true,
    desc: 'Describe how the concept of gaslighting in Ch. 1 has impacted your business success this year. We will be sharing the information in the Zoom gathering 3.',
  },
];
export const IMAGES = [
  {
    url: require('../assets/images/8.jpg'),
    name: "Makisha Boothe"
  },
  {
    url: require('../assets/images/9.jpg'),
    name: "Makisha Boothe"
  },
  {
    url: require('../assets/images/10.jpg'),
    name: "Makisha Boothe"
  },
  {
    url: require('../assets/images/11.jpg'),
    name: "Makisha Boothe"
  },
  {
    url: require('../assets/images/1.jpg'),
    name: "Makisha Boothe"
  },
  {
    url: require('../assets/images/12.png'),
    name: "Makisha Boothe"
  },
];

export const Meetings = [
  {title: 'Weekly Gathering', due: 'aug 2020, 11:00 AM'},
];

// export const MENU = [
//   'Home',
//   'Goals and activities',
//   'Groups',
//   'Library',
//   'Members',
//   'Coaches',
//   'Pink Table',
//   'FAQ',
//   'Providers',
//   'Funding',
//   'My Account',
//   'MessageScreen',
//   'Conversation',
// ];
export const MENU = [
  // {
  //   name:'Discussions',
  //   link:'Pink Table',
  // },
  {
    name:'Groups',
    countNo:0,
    link:'Admin Group',
  
  },
  {
    name:'Replays',
    countNo:0,
    link:'Replays1',
  },
 
  {
    name:'Funding',
    countNo:0,
    link:'AdminFunding',
  },

  {
    name:'Library',
    countNo:0,
    link:'Library',
  },
  // {
  //   name:'Launch Services',
  //   link:'Services',
  // },
  {
    name:'Oath',
    countNo:0,
    link:'Oath',
  },
  {
    name:'Share',
    countNo:0,
    link:'Share',
  },
  {
    name:'Account',
    countNo:0,
    link:'accountmenu',
    sub_menu:[
      {
        label:'Profle',
        countNo:0,
        link:"My Profile",
      },
      {
        label:'Activities',
        countNo:0,
        link:"Goals and activities",
      },
      {
        label:'Messages',
        countNo:1,
        link:"My Profile",
      },
      {
        label:'Matches',
        countNo:2,
        link:"My Profile",
      },
     
     
      {
        label:'Badges',
        countNo:0,
        link:'Rewards',
      },
    
    ]
  },
  {
    name:'Settings',
    countNo:0,
    link:'settingmenu',
    sub_menu:[
      {
        label:'Bookmarked',
        countNo:0,
        link:"Saved",
      },
      // {
      //   label:'Onboarding',
      //   countNo:0,
      //   link:"Onboarding",
      // },
      {
        label:'Notifcations',
        countNo:0,
        link:"Notification",
      },
      {
        label:'Billing',
        countNo:0,
        link:"UpdateBilling",
      },
      {
        label:'Password',
        countNo:0,
        link:'ChangePassword',
      },
      {
        label:'Help',
        countNo:0,
        link:'FAQ',
      },
      {
        label:'Privacy',
        countNo:0,
        link:'Privacy',
      },
      {
        label:'Terms',
        countNo:0,
        link:'Terms',
      },
      {
        label:'Log Out',
        countNo:0,
        logout:true
      },
      
    ]
  },
 
  // 'Goals and activities',
  // 'Groups',
  // 'Library',
  // 'Members',
  // 'Coaches',
  // 'Pink Table',
  // 'FAQ',
  // 'Providers',
  // 'Funding',
  // 'My Account',
  // 'MessageScreen',
  // 'Conversation',
];

export const MEMBERMENU = [
  'Event',
  'Discussions',
  'Network Directory',
  'AdminFunding',
  
  'FAQ',
  'Library',
  'HomePage',
  "Admin Members",
  "EventDetail",
  "My Profile",
  "Admin Group",
  "Admin Group Sistalead",
  "AdminGroup Sistalead Strategy",
  "Tech Help"
]

export const RESOURCES = [
  {
    title: 'Book-study-Chap-1.pdf',
    size: '345.33 kB',
  },
  {
    title: 'What-and-how-to-read-in-chap-1.pdf',
    size: '345.33 kB',
  },
];

export const QUESTIONS = [
  {
    title: 'Sharing in class',
    img: require('../assets/images/1.jpg'),
    question:
      'I know we are supposed to share our findings in class. How long should each person talk about it? Just want to make sure that I don’t...',
  },
  {
    title: 'Problem accessing material',
    img: require('../assets/images/2.jpg'),
    question:
      'Hi @Kristin, I have problem accessing the pdf you uploaded with this assignment. Could you please check it out and share with me anothe...',
  },
];
export const FUND_TYPE = ['All', 'Grant', 'Loan', 'RFP', 'Pitch'];
export const FUNDS = [
  {
    title: 'The Dyer Grant Program for Black- owned Businesses',
    type: 'Grant',
    isFunding: false,
    deadline: 'Deadline: March 15, 2022',
    description:
      'INDIANA MEMBERS!\nQualifying Black-owned businesses in Greater Fort Wayne with annual revenues less than $1 million can apply for grants in amounts of up to $25,000. Up to $200,000 will be available this grant cycle.',
  },
  {
    title: 'Micro Minority Business Equipment Grant',
    type: 'Grant',
    isFunding: true,
    deadline: 'Deadline: February  25, 2022',
    description:
      'Eligible minority-owned businesses and aspiring minority entrepreneurs in the Illinois Quad Cities may apply for up to $1,000 for equipment-related purchases, start-up costs, repairs to existing infrastructure, technology upgrades ...',
  },
  {
    title: 'Pitch Up:Rewarding founders with big ideas.',
    type: 'Pitch',
    isFunding: false,
    deadline: 'Deadline: Coming Soon',
    description:
      'PitchUp is an open pitch competition, highlighting and rewarding companies who are improving the future. We encourage founders to apply for the chance to compete and showcase their unique startup on a global scale.',
  },
];