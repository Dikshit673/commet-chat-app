type SubListItemType = {
  id: string;
  title: string;
};
type ListItemType = {
  id: string;
  title: string;
  subList: SubListItemType[];
};

type FooterDataType = {
  id: string;
  title: string;
  list: ListItemType[];
}[];

export const FooterData: FooterDataType = [
  {
    id: 'a1',
    title: 'plateform',
    list: [
      {
        id: 'b1',
        title: 'features',
        subList: [
          {
            id: 'c1',
            title: 'chat & messaging',
          },
          {
            id: 'c2',
            title: 'voice & video calls',
          },
          {
            id: 'c3',
            title: 'security & compliance',
          },
          {
            id: 'c4',
            title: 'extensions',
          },
          {
            id: 'c5',
            title: 'feature at a glance',
          },
          {
            id: 'c6',
            title: 'webhooks & bots',
          },
          {
            id: 'c7',
            title: 'moderation',
          },
          {
            id: 'c8',
            title: 'Analytics & insights',
          },
        ],
      },
      {
        id: 'b2',
        title: 'implementations',
        subList: [
          {
            id: 'c1',
            title: 'Widgets',
          },
          {
            id: 'c2',
            title: 'UI kits',
          },
          {
            id: 'c3',
            title: 'SDKs & APIs',
          },
        ],
      },
      {
        id: 'b3',
        title: 'technologies',
        subList: [
          {
            id: 'c1',
            title: 'React chat SDK & API',
          },
          {
            id: 'c2',
            title: 'Angularchat SDK & API',
          },
          {
            id: 'c3',
            title: 'Vue chat SDK & API',
          },
          {
            id: 'c4',
            title: 'IOS chat SDK & API',
          },
          {
            id: 'c5',
            title: 'Android Kotlin chat SDK & API',
          },
          {
            id: 'c6',
            title: 'Android Java chat SDK & API',
          },
          {
            id: 'c7',
            title: 'React Native chat SDK & API',
          },
          {
            id: 'c8',
            title: 'Ionic/Capacitor chat SDK & API',
          },
          {
            id: 'c9',
            title: 'Wordpress chat SDK & API',
          },
          {
            id: 'c10',
            title: 'Larvel/PHP chat SDK & API',
          },
          {
            id: 'c11',
            title: 'Flutter chat SDK & API',
          },
          {
            id: 'c12',
            title: 'Next.js chat SDK & API',
          },
        ],
      },
    ],
  },
  {
    id: 'a2',
    title: 'Solutions',
    list: [
      {
        id: 'b1',
        title: 'by use case',
        subList: [
          {
            id: 'c1',
            title: 'Social Community',
          },
          {
            id: 'c2',
            title: 'Marketplace',
          },
          {
            id: 'c3',
            title: 'Healthcare',
          },
          {
            id: 'c4',
            title: 'Education',
          },
          {
            id: 'c5',
            title: 'Virtual Events',
          },
          {
            id: 'c6',
            title: 'on demand service',
          },
          {
            id: 'c7',
            title: 'Dating Apps',
          },
          {
            id: 'c8',
            title: 'Gaming',
          },
        ],
      },
      {
        id: 'b2',
        title: 'by organization type',
        subList: [
          {
            id: 'c1',
            title: 'Enterprise',
          },
          {
            id: 'c2',
            title: 'Startups',
          },
        ],
      },
    ],
  },
  {
    id: 'a3',
    title: 'Developers',
    list: [
      {
        id: 'b1',
        title: 'Technologies documentation',
        subList: [
          {
            id: 'c1',
            title: 'React',
          },
          {
            id: 'c2',
            title: 'Angular',
          },
          {
            id: 'c3',
            title: 'Vue',
          },
          {
            id: 'c4',
            title: 'IOS',
          },
          {
            id: 'c5',
            title: 'Android Kotlin',
          },
          {
            id: 'c6',
            title: 'Android Java',
          },
          {
            id: 'c7',
            title: 'React Native',
          },
          {
            id: 'c8',
            title: 'Ionic/Capacitor',
          },
          {
            id: 'c9',
            title: 'Wordpress',
          },
          {
            id: 'c10',
            title: 'Larvel/PHP',
          },
          {
            id: 'c11',
            title: 'Flutter',
          },
          {
            id: 'c12',
            title: 'Next.js',
          },
        ],
      },
      {
        id: 'b2',
        title: 'documentation',
        subList: [
          {
            id: 'c1',
            title: 'documentation',
          },
          {
            id: 'c2',
            title: 'product updates',
          },
          {
            id: 'c3',
            title: 'tutorials',
          },
          {
            id: 'c4',
            title: 'open-source apps',
          },
          {
            id: 'c5',
            title: 'product status',
          },
          {
            id: 'c6',
            title: 'glossary',
          },
        ],
      },
    ],
  },
  {
    id: 'a4',
    title: 'Company',
    list: [
      {
        id: 'b1',
        title: 'Resources',
        subList: [
          {
            id: 'c1',
            title: 'Customer Stories',
          },
          {
            id: 'c2',
            title: 'Blog',
          },
          {
            id: 'c3',
            title: 'Give feedback',
          },
          {
            id: 'c4',
            title: 'Community Forum',
          },
          {
            id: 'c5',
            title: 'Help Center',
          },
          {
            id: 'c6',
            title: 'Partners',
          },
        ],
      },
      {
        id: 'b2',
        title: 'competitors',
        subList: [
          {
            id: 'c1',
            title: 'SendBird',
          },
          {
            id: 'c2',
            title: 'GetStream',
          },
          {
            id: 'c3',
            title: 'Applozic',
          },
          {
            id: 'c4',
            title: 'Twilio',
          },
          {
            id: 'c5',
            title: 'PubNub',
          },
        ],
      },
      {
        id: 'b3',
        title: 'company',
        subList: [
          {
            id: 'c1',
            title: 'about us',
          },
          {
            id: 'c2',
            title: 'careers',
          },
          {
            id: 'c3',
            title: 'parteners',
          },
          {
            id: 'c4',
            title: 'pricing',
          },
          {
            id: 'c5',
            title: 'chat with us',
          },
        ],
      },
    ],
  },
];
