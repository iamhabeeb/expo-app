import { posts } from "@/db/schema";
import { PostType } from "./th";

export const postData: PostType[] = [
  {
    id: "post123456",
    user: "user123",
    createdAt: "2024-07-18T14:30:00Z",
    updatedAt: "2024-07-18T14:30:00Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 12,
      repostCount: 3,
      canReply: true,
      quoteCount: 1,
      isReply: false,
    },
    media: [
      {
        id: "media789012",
        size: 2048576, // 2MB
        type: "image",
        original_height: 1080,
        original_width: 1920,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/06.png",
      },
      {
        id: "media789013",
        size: 5242880, // 5MB
        type: "video",
        original_height: 1080,
        original_width: 1920,
        sourceUrl: "https://example.com/videos/waves_crashing.mp4",
      },
      {
        id: "dhufhdfuieur",
        size: 5242880, // 5MB
        type: "video",
        original_height: 1080,
        original_width: 1920,
        sourceUrl: "https://example.com/videos/waves_crashing.mp4",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-18T14:30:00Z",
      edittedAt: "2024-07-18T14:35:00Z",
      editted: true,
      prevVersions: null,
      has_translation: true,
      translation: {
        original_language: "es",
        toEN: "Beautiful sunset at the beach! 🌅 #SummerVibes",
      },
      plainText: "¡Hermosa puesta de sol en la playa! 🌅 #VibranesDeVerano",
    },
    likeCount: 256,
    hashTags: ["SummerVibes", "BeachLife", "Sunset"],
    tags: ["@beachresort", "@friendname"],
    audio: null,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post123457",
    user: "user123",
    createdAt: "2024-07-18T12:15:00Z",
    updatedAt: "2024-07-18T12:15:00Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 8,
      repostCount: 1,
      canReply: true,
      quoteCount: 0,
      isReply: false,
    },
    media: [
      {
        id: "media789014",
        size: 1572864, // 1.5MB
        type: "image",
        original_height: 1080,
        original_width: 1080,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/05.png",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-18T12:15:00Z",
      edittedAt: "2024-07-18T12:15:00Z",
      editted: false,
      prevVersions: null,
      has_translation: false,
      translation: null,
      plainText: "Homemade pasta perfection! 🍝 #FoodieLife",
    },
    likeCount: 189,
    hashTags: ["FoodieLife", "Pasta", "Homemade"],
    tags: ["@italianrestaurant"],
    audio: null,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post123458",
    user: "user003",
    createdAt: "2024-07-18T08:45:00Z",
    updatedAt: "2024-07-18T08:45:00Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 25,
      repostCount: 5,
      canReply: true,
      quoteCount: 2,
      isReply: false,
    },
    media: [
      {
        id: "media789015",
        size: 10485760, // 10MB
        type: "video",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "https://example.com/videos/workout_routine.mp4",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-18T08:45:00Z",
      edittedAt: "2024-07-18T08:45:00Z",
      editted: false,
      prevVersions: null,
      has_translation: false,
      translation: null,
      plainText:
        "Morning workout routine to kickstart your day! 💪 #FitnessMotivation",
    },
    likeCount: 532,
    hashTags: ["FitnessMotivation", "MorningWorkout", "HealthyLifestyle"],
    tags: [],
    audio: null,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post123459",
    user: "user002",
    createdAt: "2024-07-17T20:00:00Z",
    updatedAt: "2024-07-17T20:00:00Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 42,
      repostCount: 15,
      canReply: true,
      quoteCount: 5,
      isReply: false,
    },
    media: [
      {
        id: "media789016",
        size: 3145728, // 3MB
        type: "image",
        original_height: 1080,
        original_width: 1920,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/03.png",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-17T20:00:00Z",
      edittedAt: "2024-07-17T20:05:00Z",
      editted: true,
      prevVersions: [],
      has_translation: false,
      translation: null,
      plainText:
        "Just got my hands on the latest smartphone! Unboxing video coming soon. 📱 #TechReview",
    },
    likeCount: 1024,
    hashTags: ["TechReview", "Smartphone", "Gadgets"],
    tags: ["@techbrand"],
    audio: null,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post123460",
    user: "user006",
    createdAt: "2024-07-17T16:30:00Z",
    updatedAt: "2024-07-17T16:30:00Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 56,
      repostCount: 8,
      canReply: true,
      quoteCount: 3,
      isReply: false,
    },
    media: [
      {
        id: "media789017",
        size: 1048576, // 1MB
        type: "image",
        original_height: 1080,
        original_width: 1080,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/08.png",
      },
      {
        id: "media789018",
        size: 2097152, // 2MB
        type: "image",
        original_height: 1080,
        original_width: 1080,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/03.png",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-17T16:30:00Z",
      edittedAt: "2024-07-17T16:30:00Z",
      editted: false,
      prevVersions: null,
      has_translation: true,
      translation: {
        original_language: "fr",
        toEN: "Double the cuteness, double the fun! 🐶🐱 #AdoptDontShop",
      },
      plainText:
        "Double dose de mignonnerie, double dose de plaisir ! 🐶🐱 #AdopterPasAcheter",
    },
    likeCount: 2048,
    hashTags: ["AdoptDontShop", "PetsOfInstagram", "CutePets"],
    tags: ["@localanimalshelter"],
    audio: null,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post987654",
    user: "user009",
    createdAt: "2024-07-17T09:23:15Z",
    updatedAt: "2024-07-17T09:23:15Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 7,
      repostCount: 2,
      canReply: true,
      quoteCount: 1,
      isReply: false,
    },
    media: null,
    caption: {
      available: true,
      createdAt: "2024-07-17T09:23:15Z",
      edittedAt: "2024-07-17T09:23:15Z",
      editted: false,
      prevVersions: null,
      has_translation: false,
      translation: null,
      plainText:
        "Just finished 'The Midnight Library' by Matt Haig. A beautiful exploration of life's choices and regrets. What's your favorite book that made you reflect on life? 📚 #BookRecommendations",
    },
    likeCount: 89,
    hashTags: ["BookRecommendations", "ReadMore", "TheMidnightLibrary"],
    tags: [],
    audio: null,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post876543",
    user: "user001",
    createdAt: "2024-07-16T14:52:30Z",
    updatedAt: "2024-07-16T15:10:45Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 23,
      repostCount: 5,
      canReply: true,
      quoteCount: 2,
      isReply: false,
    },
    media: [
      {
        id: "media654321",
        size: 3145728, // 3MB
        type: "image",
        original_height: 1080,
        original_width: 1920,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/05.png",
      },
      {
        id: "media654322",
        size: 15728640, // 15MB
        type: "video",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "https://example.com/videos/street_performer.mp4",
      },
      {
        id: "media654323",
        size: 2097152, // 2MB
        type: "image",
        original_height: 1080,
        original_width: 1080,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/07.png",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-16T14:52:30Z",
      edittedAt: "2024-07-16T15:10:45Z",
      editted: true,
      prevVersions: [],
      has_translation: false,
      translation: null,
      plainText:
        "A day in the vibrant heart of the city! From stunning murals to talented street performers and mouthwatering food truck delights. Urban life at its finest! 🏙️🎨🎵🌮 #CityLife #StreetArt #LocalCulture",
    },
    likeCount: 567,
    hashTags: ["CityLife", "StreetArt", "LocalCulture", "FoodTrucks"],
    tags: ["@cityartscouncil", "@foodieadventures"],
    audio: null,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post765432",
    user: "user006",
    createdAt: "2024-07-15T07:30:00Z",
    updatedAt: "2024-07-15T07:30:00Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 42,
      repostCount: 18,
      canReply: true,
      quoteCount: 7,
      isReply: false,
    },
    media: [
      {
        id: "media543210",
        size: 4194304, // 4MB
        type: "image",
        original_height: 1080,
        original_width: 1920,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/05.png",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-15T07:30:00Z",
      edittedAt: "2024-07-15T07:30:00Z",
      editted: false,
      prevVersions: null,
      has_translation: true,
      translation: {
        original_language: "es",
        toEN: "Together, we collected over 500 pounds of plastic from our local beach this morning. Every small action counts. Join us next weekend for another cleanup! 🌊🌍 #SaveOurOceans",
      },
      plainText:
        "Juntos, recolectamos más de 200 kilos de plástico de nuestra playa local esta mañana. Cada pequeña acción cuenta. ¡Únete a nosotros el próximo fin de semana para otra limpieza! 🌊🌍 #SalvemosNuestrosOcéanos",
    },
    likeCount: 1205,
    hashTags: ["SalvemosNuestrosOcéanos", "PlasticPollution", "BeachCleanup"],
    tags: ["@local_eco_group", "@city_volunteers"],
    audio: null,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post654321",
    user: "user008",
    createdAt: "2024-07-14T19:45:22Z",
    updatedAt: "2024-07-14T20:15:10Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 31,
      repostCount: 4,
      canReply: true,
      quoteCount: 1,
      isReply: false,
    },
    media: [
      {
        id: "media432109",
        size: 20971520, // 20MB
        type: "video",
        original_height: 1920,
        original_width: 1080,
        sourceUrl: "https://example.com/videos/furniture_makeover.mp4",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-14T19:45:22Z",
      edittedAt: "2024-07-14T20:15:10Z",
      editted: true,
      prevVersions: [],
      has_translation: false,
      translation: null,
      plainText:
        "Weekend project complete! Turned this old dresser into a stunning statement piece. Swipe for the before and after. 🎨🔨 #FurnitureFlip #DIY\n\nEdit: Wow, thanks for all the love! For those asking, I used chalk paint in 'Midnight Blue' and replaced the handles with vintage brass ones I found at a flea market.",
    },
    likeCount: 723,
    hashTags: ["FurnitureFlip", "DIY", "UpcycledFurniture", "HomeDecor"],
    tags: [],
    audio: null,
    hasLiked: true,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
  {
    id: "post543210",
    user: "user003",
    createdAt: "2024-07-13T05:15:00Z",
    updatedAt: "2024-07-13T05:15:00Z",
    postInfo: {
      isPostUnavailable: false,
      directReplyCount: 15,
      repostCount: 8,
      canReply: true,
      quoteCount: 3,
      isReply: false,
    },
    media: [
      {
        id: "media321098",
        size: 1048576, // 1MB
        type: "image",
        original_height: 1080,
        original_width: 1080,
        sourceUrl:
          "https://rylrfqafxnyqkktzpdcr.supabase.co/storage/v1/object/public/buck/assets/01.png",
      },
    ],
    caption: {
      available: true,
      createdAt: "2024-07-13T05:15:00Z",
      edittedAt: "2024-07-13T05:15:00Z",
      editted: false,
      prevVersions: null,
      has_translation: false,
      translation: null,
      plainText:
        "Start your day with intention. A few minutes of morning meditation can set the tone for a peaceful and productive day ahead. How do you practice mindfulness? 🧘‍♀️🌅 #MorningMeditation #Mindfulness #WellnessJourney",
    },
    likeCount: 456,
    hashTags: ["MorningMeditation", "Mindfulness", "WellnessJourney"],
    tags: [],
    audio: null,
    hasLiked: false,
    likeAndViewCountsDisabled: false,
    commentDisabled: false,
  },
];

const pstType = typeof posts.$inferInsert;
