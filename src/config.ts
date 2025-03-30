export const SITE = {
  website: "https://leoneljdias.github.io",
  author: "Leonel Dias",
  profile: "https://leoneljdias.github.io",
  desc: "A software engineer who loves to write about web development, technology, and life",
  title: "leoneljdias",
  ogImage: "me.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://leoneljdias.github.io",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Lisbon", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
