import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// === Paste your CDN links below ===
const bookCover = "https://ik.imagekit.io/igsnxowfs/Magzine/book-cover.jpg"; // book-cover.jpg
const bookBack = "https://ik.imagekit.io/igsnxowfs/Magzine/book-back.jpg"; // book-back.jpg
const DSC00680 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC00680.jpg"; // DSC00680.jpg
const DSC00933 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC00933.jpg"; // DSC00933.jpg
const DSC00966 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC00966.jpg"; // DSC00966.jpg
const DSC00983 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC00983.jpg"; // DSC00983.jpg
const DSC00993 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC00993.jpg"; // DSC00993.jpg
const DSC01011 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC01011.jpg"; // DSC01011.jpg
const DSC01040 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC01040.jpg"; // DSC01040.jpg
const DSC01064 = "https://ik.imagekit.io/igsnxowfs/Magzine/DSC01064.jpg"; // DSC01064.jpg
const pageFlipAudio =
  "https://ik.imagekit.io/igsnxowfs/Magzine/page-flip-01a.mp3"; // page-flip-01a.mp3

const pictures = [
  DSC00933,
  DSC00966,
  DSC00983,
  DSC00993,
  DSC01011,
  DSC01040,
  DSC01064,
];

export const pageAtom = atom(0);
export const pages = [
  // COVER
  {
    front: bookCover,
    back: DSC00680,
  },

  // SPREAD 1
  {
    front: pictures[0],
    back: pictures[1],
  },

  // SPREAD 2
  {
    front: pictures[2],
    back: pictures[3],
  },

  // SPREAD 3
  {
    front: pictures[4],
    back: pictures[5],
  },

  // LAST PAGE → BACK COVER
  {
    front: pictures[6],
    back: bookBack,
  },
];

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio(pageFlipAudio);
    audio.play();
  }, [page]);

  useEffect(() => {
    if (page > pages.length - 1) {
      setPage(0);
    }
  }, [page, pages.length]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-end flex-col">
        <div className="w-full flex flex-col items-center justify-center py-12 px-4">
          <div className="flex items-center gap-10 pointer-events-auto">
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-8 py-3 rounded-full  uppercase font-medium tracking-widest text-sm
              ${
                page === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "bg-white/10 text-white border-2 border-white/20 backdrop-blur-md"
              }`}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              Previous Page
            </button>
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-8 py-3 rounded-full  uppercase font-medium tracking-widest text-sm
              ${
                page === pages.length
                  ? "opacity-30 cursor-not-allowed"
                  : "bg-white/10 text-white border-2 border-white/20 backdrop-blur-md"
              }`}
              onClick={() => setPage((p) => Math.min(pages.length, p + 1))}
            >
              Next Page
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
