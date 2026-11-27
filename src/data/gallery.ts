export type GalleryPhoto = {
  src: string;
  alt: string;
  caption?: string;
  captionPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

type GalleryCollection = {
  slug: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
};

// Shared by the Gallery page and each project's memories section.
export const galleryCollections: GalleryCollection[] = [
  {
    slug: "golden-promise",
    title: "Golden Promise",
    description: "Building our wedding marketplace",
    photos: [
      { src: "/golden-promise/group.jpg", alt: "Our Golden Promise team" },
      { src: "/golden-promise/presentation-demo.jpg", alt: "Practise Day" },
      { src: "/golden-promise/final-presentation.jpg", alt: "Final project presentation" },
      { src: "/golden-promise/working-together.jpg", alt: "Support together until the end" },
      { src: "/golden-promise/memories1.jpg", alt: "a member in working mode" },
      { src: "/golden-promise/memories2.jpg", alt: "happy moment under chair" },
      { src: "/golden-promise/memories3.jpg", alt: "last day of working" },
    ],
  },
  {
    slug: "taxi-meik-swe",
    title: "Taxi Meik Swe",
    description: "One Project One Week",
    photos: [
      { src: "/opow/firstrunnerup.jpg", alt: "First runner-up at One Project One Week" },
      { src: "/opow/working.jpg", alt: "Working on the project" },
      { src: "/opow/pitchingQ&A.jpg", alt: "Pitching and answering questions" },
      { src: "/opow/birthdaylunchduringevent.jpg", alt: "Birthday lunch during the event" },
      { src: "/opow/afterpitch.jpg", alt: "After the project pitch" },
      { src: "/opow/withmentor.jpg", alt: "With our mentor" },
      { src: "/opow/giterrorintea.jpg", alt: "A Git error during the event" },
    ],
  },
  {
    slug: "aura-ai",
    title: "AURA AI",
    description: "Let’s Tech Hackathon",
    photos: [
      { src: "/auraai/firstday.jpg", alt: "First day at the hackathon" },
      { src: "/auraai/working.jpg", alt: "Working on AURA with the team" },
      { src: "/auraai/lunch.jpg", alt: "A lunch break during the hackathon" },
      { src: "/auraai/webuilt.jpg", alt: "What we built at the hackathon" },
      { src: "/auraai/visioncoder.jpg", alt: "A moment with Vision Coders" },
      { src: "/auraai/visioncoders.jpg", alt: "The Vision Coders team" },
      { src: "/auraai/2teamsinoneframe.jpg", alt: "Two teams in one frame" },
      { src: "/auraai/metrogroup.jpg", alt: "Our Metro group at the hackathon" },
      { src: "/auraai/uswithjudge.jpg", alt: "Our team with the judge" },
    ],
  },
];
