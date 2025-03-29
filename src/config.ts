export const SITE = {
  website: "https://leoneljdias.github.io/",
  author: "Leonel Dias",
  profile: "https://leoneljdias.github.io/",
  desc: "A blog about web development, design and more.",
  title: "Leonel Dias",
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
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "UTC",
} as const;
