export type PostType = {
  id: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  postInfo: PostInfo;
  media: MediaType[] | null;
  caption: Caption | null;
  likeCount: number;
  hashTags: string[];
  tags: string[];
  audio: null;
  hasLiked: boolean;
  likeAndViewCountsDisabled: boolean;
  commentDisabled: boolean;
};

export type PostInfo = {
  isPostUnavailable: boolean;
  directReplyCount: number;
  repostCount: number;
  canReply: boolean;
  quoteCount: number;
  isReply: boolean;
};

export type MediaType = {
  id: string;
  size: number;
  type: "image" | "video";
  original_height: number;
  original_width: number;
  sourceUrl: string;
};

export type Caption = {
  available: boolean;
  createdAt: string;
  edittedAt: string;
  editted: boolean;
  prevVersions: [] | null;
  has_translation: boolean;
  translation: { original_language: string; toEN: string } | null;
  plainText: string;
};
