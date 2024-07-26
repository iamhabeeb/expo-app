import { PostB } from "./th";

// Example 1: Text-only post
export const threadposts: PostB[] = [
  {
    id: "01",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user003",
      username: "bookworm_diaries",
      profilePicture: "profile_pic_url",
      isVerified: false,
      hasActiveStories: true,
      friendshipStatus: {
        blocking: null,
        relationship: "following",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 8,
      repostCount: 3,
      canReply: true,
      quoteCount: 2,
      isReply: false,
    },
    carouselMedia: null,
    image: null,
    video: null,
    caption: {
      has_translation: false,
      translation: null,
      plainText:
        "Just finished 'The Midnight Library' by Matt Haig and I'm in awe. A beautiful exploration of life's choices and the roads not taken. What's your favorite book that made you ponder life's big questions? 🤔📖",
    },
    likeCount: 89,
    hashTags: ["BookRecommendations", "ReadersOfInstagram"],
    tags: [],
    audio: null,
    captionIsEdited: false,
    mediaType: 1,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "02",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user006",
      username: "urban_gardener",
      profilePicture: "profile_pic_url",
      isVerified: true,
      hasActiveStories: false,
      friendshipStatus: {
        blocking: null,
        relationship: "followed",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 15,
      repostCount: 7,
      canReply: true,
      quoteCount: 3,
      isReply: false,
    },
    carouselMedia: null,
    image: [
      {
        size: 2300081,
        type: "image/jpeg",
        original_height: 1350,
        original_width: 1080,
        sourceUrl: "../assets/stories_images/04.png",
      },
    ],
    video: null,
    caption: {
      has_translation: false,
      translation: null,
      plainText:
        "My balcony garden is thriving! 🌿 From seed to salad in just 6 weeks. Who says you need a backyard to grow your own food? 🥗",
    },
    likeCount: 523,
    hashTags: ["UrbanGardening", "GrowYourOwn"],
    tags: [],
    audio: null,
    captionIsEdited: true,
    mediaType: 2,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "03",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user003",
      username: "wanderlust_photographer",
      profilePicture: "profile_pic_url",
      isVerified: true,
      hasActiveStories: true,
      friendshipStatus: {
        blocking: null,
        relationship: "following",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 42,
      repostCount: 18,
      canReply: true,
      quoteCount: 9,
      isReply: false,
    },
    carouselMedia: [
      {
        accessibility_caption: "Sunrise over Machu Picchu",
        image: {
          size: 3072000,
          type: "image/jpeg",
          original_height: 1080,
          original_width: 1080,
          sourceUrl: "../assets/stories_images/03.png",
        },
        video: null,
        id: "carousel1",
      },
      {
        accessibility_caption: "Close-up of ancient Incan stonework",
        image: {
          size: 2560000,
          type: "image/jpeg",
          original_height: 1080,
          original_width: 1080,
          sourceUrl: "../assets/stories_images/03.png",
        },
        video: null,
        id: "carousel2",
      },
      {
        accessibility_caption: "Video of mist rolling over Machu Picchu",
        image: null,
        video: {
          size: 15360000,
          type: "video/mp4",
          original_height: 1920,
          original_width: 1080,
          sourceUrl: "../assets/videos/rc02.mp4",
        },
        id: "carousel3",
      },
    ],
    image: null,
    video: null,
    caption: {
      has_translation: true,
      translation: {
        original_language: "es",
        toEN: "Machu Picchu: where history whispers and nature sings. Swipe to see the intricate stonework and watch the mesmerizing mist dance around the ancient city. A dream come true for any photographer! 😍📸",
      },
      plainText:
        "Machu Picchu: donde la historia susurra y la naturaleza canta. Desliza para ver el intrincado trabajo en piedra y observa la hipnotizante niebla bailar alrededor de la antigua ciudad. ¡Un sueño hecho realidad para cualquier fotógrafo! 😍📸",
    },
    likeCount: 2876,
    hashTags: ["MachuPicchu", "TravelPhotography"],
    tags: ["user888", "user999"],
    audio: null,
    captionIsEdited: false,
    mediaType: 3,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "04",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user009",
      username: "tech_unboxed",
      profilePicture: "profile_pic_url",
      isVerified: false,
      hasActiveStories: true,
      friendshipStatus: {
        blocking: null,
        relationship: "followed",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 87,
      repostCount: 34,
      canReply: true,
      quoteCount: 15,
      isReply: false,
    },
    carouselMedia: null,
    image: null,
    video: [
      {
        size: 51200000,
        type: "video/mp4",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "../assets/videos/rc02.mp4",
      },
    ],
    caption: {
      has_translation: false,
      translation: null,
      plainText:
        "Unboxing the latest smartphone! 📱✨ Is this the future of mobile tech? Watch till the end for my first impressions and a surprise feature reveal! 😮 What feature would you love to see in your next phone?",
    },
    likeCount: 12453,
    hashTags: ["TechUnboxing", "SmartphoneReview"],
    tags: ["user999"],
    audio: null,
    captionIsEdited: true,
    mediaType: 4,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "05",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user003",
      username: "foodie_explorer",
      profilePicture: "profile_pic_url",
      isVerified: true,
      hasActiveStories: false,
      friendshipStatus: {
        blocking: null,
        relationship: "followed",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 21,
      repostCount: 10,
      canReply: true,
      quoteCount: 5,
      isReply: false,
    },
    carouselMedia: [
      {
        accessibility_caption: "Delicious pizza with fresh basil",
        image: {
          size: 2300081,
          type: "image/jpeg",
          original_height: 1080,
          original_width: 1080,
          sourceUrl: "../assets/stories_images/07.png",
        },
        video: null,
        id: "carousel4",
      },
      {
        accessibility_caption:
          "Colorful salad with a variety of fresh vegetables",
        image: {
          size: 2300081,
          type: "image/jpeg",
          original_height: 1080,
          original_width: 1080,
          sourceUrl: "../assets/stories_images/06.png",
        },
        video: null,
        id: "carousel5",
      },
      {
        accessibility_caption: "Close-up of a gourmet burger with fries",
        image: {
          size: 2300081,
          type: "image/jpeg",
          original_height: 1080,
          original_width: 1080,
          sourceUrl: "../assets/stories_images/03.png",
        },
        video: null,
        id: "carousel6",
      },
    ],
    image: null,
    video: null,
    caption: {
      has_translation: false,
      translation: null,
      plainText:
        "A day of deliciousness! 🍕🥗🍔 Exploring new eateries and savoring every bite. What's your go-to comfort food?",
    },
    likeCount: 673,
    hashTags: ["Foodie", "Gourmet"],
    tags: ["user555", "user666"],
    audio: null,
    captionIsEdited: false,
    mediaType: 3,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "06",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user005",
      username: "fitness_freak",
      profilePicture: "profile_pic_url",
      isVerified: false,
      hasActiveStories: true,
      friendshipStatus: {
        blocking: null,
        relationship: "followed",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 45,
      repostCount: 20,
      canReply: true,
      quoteCount: 10,
      isReply: false,
    },
    carouselMedia: null,
    image: null,
    video: [
      {
        size: 40960000,
        type: "video/mp4",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "../assets/videos/rc02.mp4",
      },
    ],
    caption: {
      has_translation: true,
      translation: {
        original_language: "fr",
        toEN: "Morning workout routine to kickstart your day! Follow along and let's get moving. 💪",
      },
      plainText:
        "Routine d'entraînement matinale pour bien commencer la journée ! Suivez-moi et bougeons ensemble. 💪",
    },
    likeCount: 2456,
    hashTags: ["FitnessJourney", "WorkoutMotivation"],
    tags: ["user222", "user333"],
    audio: null,
    captionIsEdited: false,
    mediaType: 4,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "07",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user003",
      username: "travel_junkie",
      profilePicture: "profile_pic_url",
      isVerified: true,
      hasActiveStories: true,
      friendshipStatus: {
        blocking: null,
        relationship: "followed",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 65,
      repostCount: 28,
      canReply: true,
      quoteCount: 12,
      isReply: false,
    },
    carouselMedia: null,
    image: null,
    video: [
      {
        size: 51200000,
        type: "video/mp4",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "../assets/videos/rc02.mp4",
      },
      {
        size: 51200000,
        type: "video/mp4",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "../assets/videos/rc02.mp4",
      },
    ],
    caption: {
      has_translation: false,
      translation: null,
      plainText:
        "Exploring the vibrant streets of Tokyo! 🏙️ From the bustling markets to serene temples, every corner is a new adventure. Check out my vlogs for a glimpse into the excitement! 🎥",
    },
    likeCount: 3987,
    hashTags: ["TokyoTravel", "VlogLife"],
    tags: ["user444", "user555"],
    audio: null,
    captionIsEdited: false,
    mediaType: 4,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "08",
    createdAt: "2024-07-17T13:40:00Z",
    updatedAt: "2024-07-17T13:40:00Z",
    user: {
      id: "user004",
      username: "artistic_soul",
      profilePicture: "profile_pic_url",
      isVerified: false,
      hasActiveStories: false,
      friendshipStatus: {
        blocking: null,
        relationship: "followed",
        muting: false,
      },
    },
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 33,
      repostCount: 14,
      canReply: true,
      quoteCount: 6,
      isReply: false,
    },
    carouselMedia: null,
    image: [
      {
        size: 3072000,
        type: "image/jpeg",
        original_height: 1350,
        original_width: 1080,
        sourceUrl: "../assets/stories_images/05.png",
      },
    ],
    video: [
      {
        size: 61440000,
        type: "video/mp4",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "../assets/videos/rc02.mp4",
      },
    ],
    caption: {
      has_translation: false,
      translation: null,
      plainText:
        "A sneak peek into my latest painting process! 🎨 Swipe to see the final piece and a timelapse of my work. Art is truly a journey of the soul. 🖌️",
    },
    likeCount: 1125,
    hashTags: ["ArtProcess", "Painting"],
    tags: ["user666", "user777"],
    audio: null,
    captionIsEdited: true,
    mediaType: 2,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
];
