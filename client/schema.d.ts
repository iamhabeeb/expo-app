// User Type
export type User = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  bio?: string | null;
  hasActiveStories: boolean;
  unreadMessages: number;
  profilePicture?: Blob | null;
};

// Follow Type
export type Follow = {
  followerId: string;
  followingId: string;
};

// Post Type
export type Post = {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  hasLiked?: boolean;
  likeAndViewCountsDisabled: boolean;
  commentDisabled: boolean;
  isPostUnavailable: boolean;
  directReplyCount: number;
  repostCount: number;
  canReply: boolean;
  quoteCount: number;
  isReply: boolean;
  captionAvailable: boolean;
  captionCreatedAt?: string | null;
  captionEdittedAt?: string | null;
  captionEditted?: boolean;
  captionHasTranslation?: boolean;
  captionTranslationOriginalLanguage?: string | null;
  captionTranslationToEN?: string | null;
  captionPlainText?: string | null;
};

// Media Type
export type Media = {
  id: string;
  postId: string;
  size: number;
  type: string;
  originalHeight: number;
  originalWidth: number;
  sourceUrl: string;
};

// PostHashTag Type
export type PostHashTag = {
  postId: string;
  hashTag: string;
};

// PostTag Type
export type PostTag = {
  postId: string;
  tag: string;
};

// CaptionPrevVersion Type
export type CaptionPrevVersion = {
  postId: string;
  version: number;
  content: string;
};

// UserChat Type
export type UserChat = {
  userId: string;
  chatId: string;
};

// Story Type
export type Story = {
  id: string;
  userId: string;
  content: Blob;
};

// Reel Type
export type Reel = {
  id: string;
  userId: string;
  content: Blob;
};

// UserNotification Type
export type UserNotification = {
  userId: string;
  notificationId: string;
  seen: boolean;
};

// Relations Types
export type UserRelations = {
  posts: Post[];
  following: Follow[];
  followers: Follow[];
  chats: UserChat[];
  stories: Story[];
  reels: Reel[];
  notifications: UserNotification[];
};

export type PostRelations = {
  user: User;
  media: Media[];
  hashTags: PostHashTag[];
  tags: PostTag[];
  captionPrevVersions: CaptionPrevVersion[];
};
