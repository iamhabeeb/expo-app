// User
type User = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  bio: string;
  is_verified: boolean;
  followers: string[];
  following: string[];
  posts: string[];
  chats: string[];
  stories: string[];
  reels: string[];
  notifications: {
    unSeen: string[];
    seen: string[];
  };
  profilePicture: any;
  unreadMessages: number;
};
// Post
type Post = {
  id: string;
  userId: string;
  media?: {
    caption?: string;
    images?: [string, string, string, string, string];
    video?: "";
  };
  tags: string[];
  timestamp: string; // ISO 8601 format
  likes: string[]; // Array of user IDs
  dislikes: string[];
  comments: Comment[];
  location?: string;
  reports?: string[];
};

type Report = {
  id: string;
  sender: string;
  reason: "post" | "user" | "technical";
  against: string;
  content: {
    media?: string[];
    description: string;
  };
};

// Comment
type Comment = {
  id: string;
  userId: string;
  postId: string;
  content: string;
  timestamp: string; // ISO 8601 format
  likes: string[]; // Array of user IDs
  dislikes: string[]; // Array of user IDs
  replies: Reply[];
};

// Reply (sub-comment)
type Reply = {
  id: string;
  userId: string;
  commentId: string;
  content: string;
  timestamp: string; // ISO 8601 format
  dislikes: string[]; // Array of user IDs
  likes: string[]; // Array of user IDs
};

// Story
type Story = {
  id: string;
  userId: string;
  media: "image" | "video" | "voicenote";
  mediaUrl: string;
  caption: string;
  timestamp: string; // ISO 8601 format
  expiresAt: string; // ISO 8601 format
  views: string[]; // Array of user IDs
  reactions: Reaction[];
  seen: number;
  active: boolean;
  allowedViewers: string[]; // Array of user IDs
  restrictedViewers: string[]; // Array of user IDs
  duration: 0.5 | 3 | 12 | 24; //30mins | 3hrs | 12hrs | 24hrs
};

// Reaction (for stories)
type Reaction = {
  userId: string;
  emoji: string;
};

// Reel
type Reel = {
  id: string;
  userId: string;
  videoUrl: string;
  caption: string;
  timestamp: string; // ISO 8601 format
  likes: string[]; // Array of user IDs
  dislikes: string[];
  comments: {
    id: string;
    userId: string;
    postId: string;
    content: string;
    timestamp: string; // ISO 8601 format
    likes: string[]; // Array of user IDs
    dislikes: string[]; // Array of user IDs
    replies: Reply[];
  }[];
  views: number;
};

// Message
type Message = {
  id: string;
  senderId: string;
  type: string;
  content:
    | string
    | {
        uri: string;
        size: number;
        type: string;
      };
  timestamp: string;
  read: boolean;
};

// Chat (Direct Message or Group Chat)
type Chat = {
  id: string;
  participants: string[]; // Array of user IDs
  messages: Message[];
  lastMessage: Message;
  unreadCount: { [userId: string]: number };
};

type ImageType = {
  size: number;
  type: string;
  original_height: number;
  original_width: number;
  sourceUrl: string;
};
