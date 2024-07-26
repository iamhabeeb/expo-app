export const users = [
  {
    id: "user001",
    username: "charlie",
    email: "charlie@example.com",
    fullName: "Charlie Johnson",
    bio: "Photography enthusiast",
    followers: ["user002", "user123"],
    following: ["user003", "user123"],
    posts: ["post123", "post456"],
    chats: ["chat123"],
    hasActiveStories: false,
    stories: ["story123"],
    reels: ["reel123"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//04.png",
    unreadMessages: 3,
  },
  {
    id: "user002",
    username: "alex",
    email: "alex@example.com",
    fullName: "Alex Smith",
    bio: "Tech geek and coder",
    followers: ["user001", "user003"],
    following: ["user004", "user006"],
    posts: ["post789", "post012"],
    chats: ["chat234"],
    hasActiveStories: true,
    stories: ["story234"],
    reels: ["reel234"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//02.png",
    unreadMessages: 5,
  },
  {
    id: "user003",
    username: "jessica",
    email: "jessica@example.com",
    fullName: "Jessica Brown",
    bio: "Fashion designer",
    followers: ["user002", "user005"],
    following: ["user001", "user004"],
    posts: ["post345", "post678"],
    chats: ["chat345"],
    hasActiveStories: false,
    stories: ["story345"],
    reels: ["reel345"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//03.png",
    unreadMessages: 2,
  },
  {
    id: "user004",
    username: "michael",
    email: "michael@example.com",
    fullName: "Michael Davis",
    bio: "Gamer and streamer",
    followers: ["user001", "user006"],
    following: ["user003", "user005"],
    posts: ["post901", "post234"],
    chats: ["chat456"],
    hasActiveStories: false,
    stories: ["story456"],
    reels: ["reel456"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//04.png",
    unreadMessages: 1,
  },
  {
    id: "user005",
    username: "emily",
    email: "emily@example.com",
    fullName: "Emily Wilson",
    bio: "Travel blogger",
    followers: ["user003", "user004"],
    following: ["user001", "user002"],
    posts: ["post567", "post890"],
    chats: ["chat567"],
    hasActiveStories: false,
    stories: ["story567"],
    reels: ["reel567"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//05.png",
    unreadMessages: 4,
  },
  {
    id: "user006",
    username: "john",
    email: "john@example.com",
    fullName: "John Taylor",
    bio: "Fitness trainer",
    followers: ["user004", "user005"],
    following: ["user002", "user003"],
    posts: ["post678", "post901"],
    chats: ["chat678"],
    hasActiveStories: false,
    stories: ["story678"],
    reels: ["reel678"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//02.png",
    unreadMessages: 0,
  },
  {
    id: "user007",
    username: "sarah",
    email: "sarah@example.com",
    fullName: "Sarah Miller",
    bio: "Chef and food lover",
    followers: ["user001", "user002"],
    following: ["user004", "user006"],
    posts: ["post123", "post345"],
    chats: ["chat789"],
    hasActiveStories: false,
    stories: ["story789"],
    reels: ["reel789"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//01.png",
    unreadMessages: 6,
  },
  {
    id: "user008",
    username: "david",
    email: "david@example.com",
    fullName: "David Moore",
    bio: "Music producer",
    followers: ["user003", "user007"],
    following: ["user002", "user005"],
    posts: ["post456", "post678"],
    chats: ["chat890"],
    hasActiveStories: false,
    stories: ["story890"],
    reels: ["reel890"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//04.png",
    unreadMessages: 2,
  },
  {
    id: "user009",
    username: "anna",
    email: "anna@example.com",
    fullName: "Anna Thomas",
    bio: "Artist and illustrator",
    followers: ["user006", "user008"],
    following: ["user001", "user007"],
    posts: ["post567", "post789"],
    chats: ["chat901"],
    hasActiveStories: false,
    stories: ["story901"],
    reels: ["reel901"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//03.png",
    unreadMessages: 5,
  },
  {
    id: "user010",
    username: "james",
    email: "james@example.com",
    fullName: "James Jackson",
    bio: "Entrepreneur",
    followers: ["user005", "user009"],
    following: ["user003", "user008"],
    posts: ["post012", "post345"],
    chats: ["chat012"],
    hasActiveStories: false,
    stories: ["story012"],
    reels: ["reel012"],
    notifications: {
      unSeen: ["", ""],
      seen: ["", ""],
    },
    profilePicture: "https://ui.shadcn.com/avatars//02.png",
    unreadMessages: 1,
  },
];

export type UserType = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  bio: string;
  followers: string[];
  following: string[];
  posts: string[];
  chats: string[];
  hasActiveStories: boolean;
  stories: string[];
  reels: string[];
  notifications: {
    unSeen: string[];
    seen: string[];
  };
  profilePicture: any;
  unreadMessages: number;
};

