import { PlayScreen } from "./screens/PlayScreen";

function IdeavibesWatermark() {
  async function handleShare() {
    const button = document.querySelector<HTMLButtonElement>(
      "#mctai-watermark [data-mctai-share]",
    );
    const payload = {
      title: document.title || "Ideavibes app",
      text: "Built with Ideavibes.ai",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        if (button) {
          button.textContent = "Copied";
          window.setTimeout(() => {
            button.textContent = "Share";
          }, 1600);
        }
      }
    } catch {
      if (button) {
        button.textContent = "Share";
      }
    }
  }

  return (
    <div
      id="mctai-watermark"
      className="fixed bottom-3 left-1/2 z-[2147483647] flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-400/35 bg-slate-900/85 px-2.5 py-2 text-xs font-medium leading-tight text-slate-50 shadow-[0_10px_30px_rgba(15,23,42,.25)] backdrop-blur sm:bottom-4 sm:left-auto sm:right-4 sm:translate-x-0"
    >
      <a
        href="https://ideavibes.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-50 no-underline"
      >
        Built by Ideavibes.ai
      </a>
      <button
        type="button"
        data-mctai-share
        className="border-0 border-l border-slate-400/35 bg-transparent py-0 pl-2 font-inherit text-sky-300"
        onClick={handleShare}
      >
        Share
      </button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <PlayScreen />
      <IdeavibesWatermark />
    </>
  );
}
