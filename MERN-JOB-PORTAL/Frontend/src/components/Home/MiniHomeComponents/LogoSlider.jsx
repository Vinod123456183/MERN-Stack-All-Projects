import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const logos = [
  // Your logos array unchanged...
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Walmart",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Walmart_logo_%282025%3B_Stacked_alt%29.svg/995px-Walmart_logo_%282025%3B_Stacked_alt%29.svg.png?20250323114221",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Airbnb",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Dropbox",
    url: "https://cdn-icons-png.flaticon.com/512/873/873339.png",
  },
  {
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "FedEx",
    url: "https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg",
  },
  {
    name: "HubSpot",
    url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png",
  },
  {
    name: "Slack",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  },
  {
    name: "Spotify",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "LinkedIn",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
];

const LogoSlider = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const scrollAmount = 250;

  // Scroll handler for buttons
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Pause auto-scroll when user scrolls manually (with debounce)
  useEffect(() => {
    if (!scrollRef.current) return;

    let timeout;
    const onUserScroll = () => {
      setIsUserScrolling(true);
      clearInterval(intervalRef.current);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, 3000); // Resume auto scroll after 3s inactivity
    };

    const el = scrollRef.current;
    el.addEventListener("wheel", onUserScroll, { passive: true });
    el.addEventListener("touchstart", onUserScroll, { passive: true });
    el.addEventListener("scroll", onUserScroll, { passive: true });

    return () => {
      el.removeEventListener("wheel", onUserScroll);
      el.removeEventListener("touchstart", onUserScroll);
      el.removeEventListener("scroll", onUserScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isUserScrolling) return;

    intervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        // Instantly jump back to start without animation after smooth scroll ends
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setTimeout(() => {
          if (scrollRef.current) scrollRef.current.scrollLeft = 0;
        }, 500); // matches smooth scroll duration approx
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [isUserScrolling]);

  return (
    <div className="relative py-10 ">
      {/* Scrollable logos */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // hide scrollbar for Firefox/IE
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="min-w-[140px] h-[100px] bg-whit rounded-xl shadow-sm border border-gray-500  flex items-center justify-center hover:shadow-md transition"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-7 max-w-[110px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Arrows (desktop only) */}
      {/* <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-[90%] justify-between ">
        <button
          onClick={() => scroll("left")}
          className="bg-white border border-gray-300 hover:bg-gray-100 rounded-full p-2 shadow"
          aria-label="Scroll Left"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white border border-gray-300 hover:bg-gray-100 rounded-full p-2 shadow"
          aria-label="Scroll Right"
        >
          <FaArrowRight />
        </button>
      </div> */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
