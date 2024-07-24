type Post = {
  id: string;
  content: {
    id: string;
    media: string;
    caption: string;
    uri: string;
    seen: number;
    createdAt: string;
    expiresAt: string;
    active: boolean;
  };
  allowedViewers: string[];
  restrictedViewers: string[];
  createdAt: string;
  updatedAt: string;
};
