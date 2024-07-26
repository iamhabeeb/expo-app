// Mock User IDs
const userIds = [
  "user001",
  "user002",
  "user003",
  "user004",
  "user005",
  "user006",
  "user007",
  "user008",
  "user009",
  "user010",
];

// Helper function to generate random ISO 8601 timestamp
const randomTimestamp = () =>
  new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString();

// Helper function to generate random future timestamp
const randomFutureTimestamp = () =>
  new Date(Date.now() + Math.floor(Math.random() * 86400000)).toISOString();

// Helper function to get random items from an array
const getRandomItems = <T>(arr: T[], count: number): T[] => {
  return arr.sort(() => 0.5 - Math.random()).slice(0, count);
};

// Mock Stories
const stories: Story[] = [
  {
    id: "story1",
    userId: "user001",
    media: "image",
    mediaUrl: "https://example.com/story1.jpg",
    caption: "Beautiful sunset!",
    timestamp: randomTimestamp(),
    expiresAt: randomFutureTimestamp(),
    views: getRandomItems(userIds, 3),
    reactions: [
      { userId: "user002", emoji: "😍" },
      { userId: "user003", emoji: "👍" },
    ],
    seen: 15,
    active: true,
    allowedViewers: userIds,
    restrictedViewers: [],
    duration: 24,
  },
  {
    id: "story2",
    userId: "user002",
    media: "video",
    mediaUrl: "https://example.com/story2.mp4",
    caption: "Check out my new dance moves!",
    timestamp: randomTimestamp(),
    expiresAt: randomFutureTimestamp(),
    views: getRandomItems(userIds, 4),
    reactions: [
      { userId: "user001", emoji: "🔥" },
      { userId: "user004", emoji: "👏" },
    ],
    seen: 20,
    active: true,
    allowedViewers: userIds.filter((id) => id !== "user005"),
    restrictedViewers: ["user005"],
    duration: 12,
  },
];

// Mock Reels
const reels: Reel[] = [
  {
    id: "reel1",
    userId: "user003",
    videoUrl: "https://example.com/reel1.mp4",
    caption: "My first cooking tutorial!",
    timestamp: randomTimestamp(),
    likes: getRandomItems(userIds, 3),
    dislikes: [],
    comments: [
      {
        id: "comment1",
        userId: "user004",
        postId: "reel1",
        content: "Great recipe!",
        timestamp: randomTimestamp(),
        likes: ["user001", "user002"],
        dislikes: [],
        replies: [
          {
            id: "reply1",
            userId: "user003",
            commentId: "comment1",
            content: "Thanks! Glad you liked it.",
            timestamp: randomTimestamp(),
            likes: ["user004"],
            dislikes: [],
          },
        ],
      },
    ],
    views: 100,
  },
  {
    id: "reel2",
    userId: "user005",
    videoUrl: "https://example.com/reel2.mp4",
    caption: "Funny cat compilation",
    timestamp: randomTimestamp(),
    likes: getRandomItems(userIds, 4),
    dislikes: [],
    comments: [],
    views: 250,
  },
];

console.log("Stories:", stories);
console.log("Reels:", reels);
