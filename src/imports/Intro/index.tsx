import svgPaths from "./svg-xu8ci4vrh2";
import { imgHereTechnologyMeetsPassion } from "./svg-rtbju";

function Group() {
  return (
    <div className="absolute h-[417px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-986px_-79px] mask-size-[1440px_840px] top-0 w-[428px]" style={{ maskImage: `url("${imgHereTechnologyMeetsPassion}")` }}>
      <div className="absolute inset-[-0.96%_-0.93%_-1.2%_-0.93%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 436 426">
          <g id="Group 1">
            <g filter="url(#filter0_d_1_197)" id="Rectangle 3">
              <path d={svgPaths.pc69d500} fill="var(--fill-0, #86981D)" />
            </g>
            <ellipse cx="218" cy="212.5" id="Ellipse 1" rx="214" ry="208.5" stroke="var(--stroke-0, #86981D)" strokeWidth="8" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="97" id="filter0_d_1_197" width="367" x="36" y="329">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_197" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_197" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <div className="contents relative size-full" data-name="INTRO">
      <div className="[word-break:break-word] absolute font-['Iceland:Regular',sans-serif] h-[355px] leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-76px] mask-size-[1440px_840px] not-italic text-[128px] text-white top-0 w-[827px] whitespace-pre-wrap" style={{ maskImage: `url("${imgHereTechnologyMeetsPassion}")` }}>
        <p className="leading-[normal] mb-0">{`HERE `}</p>
        <p className="leading-[normal]">TECHNOLOGY MEETS PASSION</p>
      </div>
      <Group />
    </div>
  );
}