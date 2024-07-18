export type PostB = {
  user: {
    id: string;
    username: string;
    profilePicture: string;
    isVerified: boolean;
    hasActiveStories: boolean;
    friendshipStatus: {
      blocking: null;
      relationship: "followed" | "following";
      muting: boolean;
    };
  };
  createdAt: string;
  updatedAt: string;
  postInfo: PostInfo;
  carouselMedia: CarouselMedia[] | null;
  image: ImageType[] | null;
  video: Video[] | null;
  caption: Caption | null;
  likeCount: number;
  hashTags: string[];
  tags: string[]; //userids
  audio: null;
  captionIsEdited: boolean;
  mediaType: number;
  hasLiked: boolean;
  likeAndViewCountsDisabled: boolean;
  commentDisabled: boolean;
};

type PostInfo = {
  isPostUnavailable: boolean;
  directReplyCount: number;
  repostCount: number;
  canReply: boolean;
  quoteCount: number;
  isReply: boolean;
};

type CarouselMedia = {
  accessibility_caption: string;
  image: ImageType | null;
  video: Video | null;
  id: string;
};

type Video = {
  size: number;
  type: string;
  original_height: number;
  original_width: number;
  sourceUrl: string;
};

type Caption = {
  has_translation: boolean;
  translation: { original_language: string; toEN: string } | null;
  plainText: string;
};
