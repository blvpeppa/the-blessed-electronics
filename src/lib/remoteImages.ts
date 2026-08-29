/**
 * Real photography from Unsplash.  Keep the source pages in imageCredits so the
 * business can verify the origin/licence of the visuals.
 */
export const electronicsImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1769467701183-002c2137a438?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    credit: "https://unsplash.com/s/photos/man-listening-to-music",
  },
  phone: {
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/smartphone",
  },
  phoneAlt: {
    src: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/smartphone",
  },
  laptop: {
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/laptop",
  },
  laptopAlt: {
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/laptop",
  },
  tablet: {
    src: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/tablet",
  },
  headphones: {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/headphones",
  },
  tv: {
    src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=82",
    credit: "https://unsplash.com/s/photos/smart-tv",
  },
  router: {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/router",
  },
  canal: {
    src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=82",
    credit: "https://unsplash.com/s/photos/smart-tv",
  },
  power: {
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=82",
    credit: "https://unsplash.com/s/photos/power-bank",
  },
};

export const imageCredits = Object.values(electronicsImages).map(({ src, credit }) => ({ src, credit }));
