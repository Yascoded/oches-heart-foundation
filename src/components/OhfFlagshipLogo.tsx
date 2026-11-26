import React from 'react';

export interface OhfBadgeProps {
  className?: string;
  animated?: boolean;
  forceHover?: boolean;
  innerHeartColor?: 'coral' | 'white';
  idPrefix?: string;
}

export interface OhfFullLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  animated?: boolean;
  forceHover?: boolean;
  innerHeartColor?: 'coral' | 'white';
  idPrefix?: string;
}

/**
 * Shared CSS for OHF Flagship Logo entrance & hover micro-interactions.
 * GPU-friendly (transform, opacity, stroke-dashoffset) and prefers-reduced-motion safe.
 */
export const OhfLogoStyles: React.FC = () => (
  <style>{`
    @keyframes ohf-fill-heart {
      0% {
        transform: scale(0.78);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes ohf-draw-heart {
      0% {
        stroke-dashoffset: 155;
        opacity: 0;
      }
      18% {
        opacity: 1;
      }
      100% {
        stroke-dashoffset: 0;
        opacity: 1;
      }
    }

    @keyframes ohf-draw-ribbon {
      0% {
        stroke-dashoffset: 115;
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      100% {
        stroke-dashoffset: 0;
        opacity: 1;
      }
    }

    @keyframes ohf-reveal-letters {
      0% {
        opacity: 0;
        transform: translateY(4px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes ohf-divider-grow {
      0% {
        transform: scaleY(0);
        opacity: 0;
      }
      100% {
        transform: scaleY(1);
        opacity: 1;
      }
    }

    @keyframes ohf-wordmark-glide {
      0% {
        transform: translateX(-10px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes ohf-heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      22% {
        transform: scale(1.08);
      }
      40% {
        transform: scale(1);
      }
      58% {
        transform: scale(1.05);
      }
      78% {
        transform: scale(1);
      }
    }

    @keyframes ohf-lub-dub {
      0% {
        transform: scale(1);
      }
      14% {
        transform: scale(1.22);
      }
      26% {
        transform: scale(1.04);
      }
      38% {
        transform: scale(1.16);
      }
      56%, 100% {
        transform: scale(1);
      }
    }

    @keyframes ohf-inner-heart-enter {
      0% {
        transform: scale(0.4);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes ohf-sheen-sweep {
      0% {
        transform: translateX(-130%) skewX(-18deg);
        opacity: 0;
      }
      30% {
        opacity: 0.22;
      }
      100% {
        transform: translateX(170%) skewX(-18deg);
        opacity: 0;
      }
    }

    .ohf-animated .ohf-heart-fill {
      transform-origin: 30px 46px;
      transform: scale(0.78);
      opacity: 0;
      animation: ohf-fill-heart 0.52s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards;
    }

    .ohf-animated .ohf-heart-path {
      stroke-dasharray: 155;
      stroke-dashoffset: 155;
      animation: ohf-draw-heart 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.04s forwards;
    }

    .ohf-animated .ohf-ribbon-path {
      stroke-dasharray: 115;
      stroke-dashoffset: 115;
      animation: ohf-draw-ribbon 0.48s cubic-bezier(0.22, 1, 0.36, 1) 0.22s forwards;
    }

    .ohf-animated .ohf-hf-letters {
      opacity: 0;
      animation: ohf-reveal-letters 0.38s cubic-bezier(0.22, 1, 0.36, 1) 0.36s forwards;
    }

    .ohf-animated .ohf-divider {
      transform-origin: center;
      transform: scaleY(0);
      opacity: 0;
      animation: ohf-divider-grow 0.34s cubic-bezier(0.22, 1, 0.36, 1) 0.46s forwards;
    }

    .ohf-animated .ohf-wordmark-top {
      opacity: 0;
      animation: ohf-wordmark-glide 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.52s forwards;
    }

    .ohf-animated .ohf-wordmark-sub {
      opacity: 0;
      animation: ohf-wordmark-glide 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
    }

    .ohf-inner-o {
      transform-origin: center;
      transform-box: fill-box;
      transition: stroke 0.3s cubic-bezier(0.22, 1, 0.36, 1), filter 0.3s ease;
    }

    .ohf-heart-path {
      transition: stroke 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .ohf-ribbon-path {
      transition: stroke 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .ohf-hf-letters {
      transition: fill 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .ohf-invert-on-hover:hover .ohf-heart-path,
    .ohf-invert-on-hover.ohf-force-hover .ohf-heart-path {
      stroke: #FFFFFF !important;
    }

    .ohf-invert-on-hover:hover .ohf-inner-o,
    .ohf-invert-on-hover.ohf-force-hover .ohf-inner-o {
      stroke: #E84C3D !important;
      filter: drop-shadow(0 0 3px rgba(232, 76, 61, 0.55)) !important;
    }

    .ohf-invert-on-hover:hover .ohf-ribbon-path,
    .ohf-invert-on-hover.ohf-force-hover .ohf-ribbon-path {
      stroke: #E84C3D !important;
    }

    .ohf-invert-on-hover:hover .ohf-hf-letters,
    .ohf-invert-on-hover.ohf-force-hover .ohf-hf-letters {
      fill: #E84C3D !important;
    }

    .ohf-animated .ohf-inner-heart-wrap {
      opacity: 0;
      transform-origin: center;
      transform-box: fill-box;
      animation: ohf-inner-heart-enter 0.35s cubic-bezier(0.22, 1, 0.36, 1) 0.58s forwards;
    }

    .ohf-animated .ohf-inner-o {
      animation: ohf-lub-dub 2.2s ease-in-out 0.9s infinite;
    }

    .ohf-continuous-beat .ohf-inner-o {
      animation: ohf-lub-dub 2.2s ease-in-out infinite;
    }

    .ohf-logo-group {
      cursor: pointer;
    }

    .ohf-badge-shell {
      transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), filter 0.32s ease;
      transform-origin: center;
    }

    .ohf-heart-group {
      transform-origin: 31px 47px;
    }

    .ohf-sheen-rect {
      opacity: 0;
      pointer-events: none;
    }

    .ohf-logo-group:hover .ohf-badge-shell,
    .ohf-force-hover .ohf-badge-shell {
      transform: translateY(-1.5px) scale(1.025);
      filter: drop-shadow(0 6px 14px rgba(10, 25, 47, 0.2));
    }

    .ohf-logo-group:hover .ohf-heart-group,
    .ohf-force-hover .ohf-heart-group {
      animation: ohf-heartbeat 1.25s ease-in-out infinite;
    }

    .ohf-logo-group:hover .ohf-sheen-rect,
    .ohf-force-hover .ohf-sheen-rect {
      animation: ohf-sheen-sweep 0.85s ease-out forwards;
    }

    @media (prefers-reduced-motion: reduce) {
      .ohf-animated .ohf-heart-fill,
      .ohf-animated .ohf-heart-path,
      .ohf-animated .ohf-ribbon-path,
      .ohf-animated .ohf-hf-letters,
      .ohf-animated .ohf-divider,
      .ohf-animated .ohf-wordmark-top,
      .ohf-animated .ohf-wordmark-sub,
      .ohf-animated .ohf-inner-heart-wrap,
      .ohf-animated .ohf-inner-o,
      .ohf-continuous-beat .ohf-inner-o {
        animation: none !important;
        stroke-dashoffset: 0 !important;
        transform: none !important;
        opacity: 1 !important;
      }

      .ohf-logo-group:hover .ohf-heart-group,
      .ohf-force-hover .ohf-heart-group,
      .ohf-logo-group:hover .ohf-sheen-rect,
      .ohf-force-hover .ohf-sheen-rect {
        animation: none !important;
      }

      .ohf-badge-shell {
        transition: none !important;
      }
    }
  `}</style>
);

/**
 * Shared inner badge geometry (116 x 96 viewBox proportions)
 * Faithfully matches the reference OHF badge:
 * - Deep navy (#0A192F) rounded-rectangle with 1.5px subtle inner border
 * - Left: Open coral-orange (#E84C3D) heart ('O') with bottom-right curve open
 * - Center/Right: Flowing white ribbon sweeping from below heart tip into H crossbar + bold H & F
 */
const OhfBadgeInner: React.FC<{
  clipId: string;
  sheenId: string;
  innerHeartColor?: 'coral' | 'white';
}> = ({ clipId, sheenId, innerHeartColor = 'coral' }) => {
  const innerFill = innerHeartColor === 'white' ? '#FFFFFF' : '#E84C3D';
  const innerGlow =
    innerHeartColor === 'white'
      ? 'drop-shadow(0 0 2.5px rgba(255,255,255,0.45))'
      : 'drop-shadow(0 0 3px rgba(232,76,61,0.55))';

  return (
    <g className="ohf-badge-shell">
      {/* Deep Navy Rounded-Square Badge */}
      <rect x="2" y="2" width="112" height="92" rx="20" fill="#0A192F" />
      {/* Subtle 1.5px Inner Border for Dark Background Definition */}
      <rect
        x="3.25"
        y="3.25"
        width="109.5"
        height="89.5"
        rx="18.8"
        fill="none"
        stroke="rgba(255, 255, 255, 0.18)"
        strokeWidth="1.5"
      />

      {/* Subtle Hover Sheen */}
      <g clipPath={`url(#${clipId})`}>
        <rect
          x="0"
          y="0"
          width="42"
          height="96"
          fill={`url(#${sheenId})`}
          className="ohf-sheen-rect"
        />
      </g>

      {/* Optically Centered OHF Monogram Group */}
      <g transform="translate(0, 1.5)">
        {/* Left ('O' as Open Coral-Orange Heart with Crisp Geometric 'O' Inside) */}
        <g className="ohf-heart-group">
          <path
            className="ohf-heart-path"
            d="M 29.5 62 C 18.5 55 13 46.5 13 38 C 13 31 18.5 26 24.8 26 C 28.2 26 30.2 27.8 31.2 30.4 C 32.2 27.8 34.2 26 37.6 26 C 43.2 26 47.6 30.5 47.6 37.2 C 47.6 39.2 47.1 41.1 46.2 42.8"
            fill="none"
            stroke="#E84C3D"
            strokeWidth="5.2"
            strokeLinecap="butt"
            strokeLinejoin="round"
          />

          {/* Crisp Geometric Letter 'O' Centered Inside Open Heart */}
          <g className="ohf-inner-heart-wrap">
            <rect
              className="ohf-inner-o"
              x="25.8"
              y="35.6"
              width="9.6"
              height="12.2"
              rx="4.8"
              fill="none"
              stroke={innerFill}
              strokeWidth="3.3"
              style={{ filter: innerGlow }}
            />
          </g>
        </g>

        {/* Flowing White Ribbon sweeping from below heart tip into H crossbar */}
        <path
          className="ohf-ribbon-path"
          d="M 23.5 68.5 C 32.5 72.5 39.5 65.5 44.5 57.5 C 47.5 52.8 50.5 50.5 55.5 50.5 L 72.5 50.5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Slimmer Geometric White 'H' & 'F' */}
        <g className="ohf-hf-letters" fill="#FFFFFF">
          <rect x="52.5" y="27" width="5.6" height="26" rx="1.1" />
          <rect x="52.5" y="59" width="5.6" height="14.5" rx="1.1" />
          <rect x="70" y="27" width="5.6" height="46.5" rx="1.1" />
          <rect x="82.5" y="27" width="5.6" height="46.5" rx="1.1" />
          <rect x="82.5" y="27" width="21" height="5.6" rx="1.1" />
          <rect x="82.5" y="47" width="16.8" height="5.4" rx="1.1" />
        </g>
      </g>
    </g>
  );
};

/**
 * Standalone OHF Rounded-Square Icon Badge (for 16px / 32px favicons & compact marks)
 */
export const OhfBadgeMark: React.FC<OhfBadgeProps> = ({
  className = 'w-16 h-16',
  animated = false,
  forceHover = false,
  innerHeartColor = 'coral',
  idPrefix = 'ohf-badge',
}) => {
  const clipId = `${idPrefix}-clip`;
  const sheenId = `${idPrefix}-sheen`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116 96"
      className={`${className} ohf-logo-group ohf-invert-on-hover ${animated ? 'ohf-animated' : ''} ${
        forceHover ? 'ohf-force-hover' : ''
      }`}
      role="img"
      aria-label="Oche's Heart Foundation Badge"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="2" y="2" width="112" height="92" rx="20" />
        </clipPath>
        <linearGradient id={sheenId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <OhfBadgeInner clipId={clipId} sheenId={sheenId} innerHeartColor={innerHeartColor} />
    </svg>
  );
};

/**
 * Full Horizontal OHF Lockup (1:1 Match to Reference Sample + Inner Beating Heart):
 * Rounded-Square Badge + 2px Coral-Orange Divider + Stacked 'Oche's Heart' / 'FOUNDATION'
 */
export const OhfFullLogo: React.FC<OhfFullLogoProps> = ({
  variant = 'light',
  className = 'h-16 w-auto',
  animated = true,
  forceHover = false,
  innerHeartColor = 'white',
  idPrefix = 'ohf-full',
}) => {
  const titleColor = variant === 'dark' ? '#FFFFFF' : '#0A192F';
  const clipId = `${idPrefix}-clip`;
  const sheenId = `${idPrefix}-sheen`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 96"
      className={`${className} ohf-logo-group ohf-invert-on-hover ${animated ? 'ohf-animated' : 'ohf-continuous-beat'} ${
        forceHover ? 'ohf-force-hover' : ''
      }`}
      role="img"
      aria-label="Oche's Heart Foundation"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="2" y="2" width="112" height="92" rx="20" />
        </clipPath>
        <linearGradient id={sheenId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Left Rounded-Square Icon Badge */}
      <OhfBadgeInner clipId={clipId} sheenId={sheenId} innerHeartColor={innerHeartColor} />

      {/* Thin 2px Vertical Coral-Orange Divider */}
      <rect
        className="ohf-divider"
        x="132"
        y="14"
        width="2"
        height="68"
        rx="1"
        fill="#E84C3D"
      />

      {/* Stacked Geometric Sans-Serif Wordmark */}
      <text
        className="ohf-wordmark-top"
        x="152"
        y="45"
        fill={titleColor}
        fontFamily="'Poppins', system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="34"
        letterSpacing="-0.5"
      >
        Oche&apos;s Heart
      </text>
      <text
        className="ohf-wordmark-sub"
        x="154"
        y="72"
        fill="#E84C3D"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="15.5"
        letterSpacing="0.24em"
      >
        FOUNDATION
      </text>
    </svg>
  );
};

/**
 * Concept B: Seamless Kinetic Ligature (Ribbon flows through H into F top bar)
 */
export const OhfConceptB: React.FC<OhfFullLogoProps> = ({
  variant = 'light',
  className = 'h-16 w-auto',
  animated = true,
  forceHover = false,
  idPrefix = 'ohf-b',
}) => {
  const titleColor = variant === 'dark' ? '#FFFFFF' : '#0A192F';
  const clipId = `${idPrefix}-clip`;
  const sheenId = `${idPrefix}-sheen`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 96"
      className={`${className} ohf-logo-group ${animated ? 'ohf-animated' : ''} ${
        forceHover ? 'ohf-force-hover' : ''
      }`}
      role="img"
      aria-label="Oche's Heart Foundation - Concept B"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="2" y="2" width="112" height="92" rx="26" />
        </clipPath>
        <linearGradient id={sheenId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="ohf-badge-shell">
        <rect x="2" y="2" width="112" height="92" rx="26" fill="#0A192F" />
        <rect
          x="3.25"
          y="3.25"
          width="109.5"
          height="89.5"
          rx="24.8"
          fill="none"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.5"
        />
        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width="42" height="96" fill={`url(#${sheenId})`} className="ohf-sheen-rect" />
        </g>

        {/* Open Coral-Orange Heart */}
        <g className="ohf-heart-group">
          <path
            className="ohf-heart-path"
            d="M 30 62 C 18 54 13 45.5 13 37.5 C 13 30.5 18.5 25.5 24.8 25.5 C 28.2 25.5 30.2 27.5 31.2 30 C 32.2 27.5 34.2 25.5 37.6 25.5 C 43.2 25.5 47.5 30 47.5 36.8"
            fill="none"
            stroke="#E84C3D"
            strokeWidth="6.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Continuous Kinetic White Ribbon: sweeps from below heart -> H crossbar -> up into F top arm */}
        <path
          className="ohf-ribbon-path"
          d="M 24 68 C 33 72 40 65 45 56 C 48 51 51 49.5 56 49.5 L 72 49.5 L 72 28 L 101 28"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* H Left Stem & Lower Right + F Middle Arm */}
        <g className="ohf-hf-letters" fill="#FFFFFF">
          <rect x="52" y="25" width="7.2" height="27.5" rx="3.6" />
          <rect x="52" y="58" width="7.2" height="15.5" rx="3.6" />
          <rect x="68.5" y="47" width="7.2" height="26.5" rx="3.6" />
          <rect x="81" y="25" width="7.2" height="48.5" rx="3.6" />
          <rect x="81" y="46.5" width="18" height="7" rx="3.5" />
        </g>
      </g>

      <rect className="ohf-divider" x="132" y="12" width="2" height="72" rx="1" fill="#E84C3D" />
      <text
        className="ohf-wordmark-top"
        x="152"
        y="46"
        fill={titleColor}
        fontFamily="'Poppins', system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="35"
        letterSpacing="-0.6"
      >
        Oche&apos;s Heart
      </text>
      <text
        className="ohf-wordmark-sub"
        x="154"
        y="74"
        fill="#E84C3D"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="16.5"
        letterSpacing="0.22em"
      >
        FOUNDATION
      </text>
    </svg>
  );
};

/**
 * Concept C: Borderless Editorial Mark (No container box; clean open mark directly on light/dark canvas)
 */
export const OhfConceptC: React.FC<OhfFullLogoProps> = ({
  variant = 'light',
  className = 'h-16 w-auto',
  animated = true,
  forceHover = false,
}) => {
  const ink = variant === 'dark' ? '#FFFFFF' : '#0A192F';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 396 96"
      className={`${className} ohf-logo-group ${animated ? 'ohf-animated' : ''} ${
        forceHover ? 'ohf-force-hover' : ''
      }`}
      role="img"
      aria-label="Oche's Heart Foundation - Concept C"
    >
      <g className="ohf-badge-shell">
        <g className="ohf-heart-group">
          <path
            className="ohf-heart-path"
            d="M 27.5 64.5 C 15.5 56 9.5 46.5 9.5 37.5 C 9.5 29.8 15.5 24 22.5 24 C 26.2 24 28.4 26 29.5 28.8 C 30.6 26 32.8 24 36.5 24 C 42.8 24 47.6 29 47.6 36.2 C 47.6 38.5 47 40.6 46 42.5"
            fill="none"
            stroke="#E84C3D"
            strokeWidth="7.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <path
          className="ohf-ribbon-path"
          d="M 21 71.5 C 31 75.5 38.5 67.5 44 58.5 C 47.2 53.2 50.5 50.5 56 50.5 L 74 50.5"
          fill="none"
          stroke={ink}
          strokeWidth="7.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g className="ohf-hf-letters" fill={ink}>
          <rect x="52.5" y="25" width="7.6" height="28.5" rx="1.5" />
          <rect x="52.5" y="59.5" width="7.6" height="16.5" rx="1.5" />
          <rect x="70.5" y="25" width="7.6" height="51" rx="1.5" />
          <rect x="83.5" y="25" width="7.6" height="51" rx="1.5" />
          <rect x="83.5" y="25" width="24" height="7.6" rx="1.5" />
          <rect x="83.5" y="46.5" width="19" height="7.4" rx="1.5" />
        </g>
      </g>

      <rect className="ohf-divider" x="126" y="14" width="2" height="68" rx="1" fill="#E84C3D" />
      <text
        className="ohf-wordmark-top"
        x="146"
        y="46"
        fill={ink}
        fontFamily="'Poppins', system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="35"
        letterSpacing="-0.6"
      >
        Oche&apos;s Heart
      </text>
      <text
        className="ohf-wordmark-sub"
        x="148"
        y="74"
        fill="#E84C3D"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="16.5"
        letterSpacing="0.22em"
      >
        FOUNDATION
      </text>
    </svg>
  );
};

/**
 * Concept D: Circular Medallion Badge + Stacked Wordmark
 */
export const OhfConceptD: React.FC<OhfFullLogoProps> = ({
  variant = 'light',
  className = 'h-16 w-auto',
  animated = true,
  forceHover = false,
  idPrefix = 'ohf-d',
}) => {
  const titleColor = variant === 'dark' ? '#FFFFFF' : '#0A192F';
  const clipId = `${idPrefix}-clip`;
  const sheenId = `${idPrefix}-sheen`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 388 100"
      className={`${className} ohf-logo-group ${animated ? 'ohf-animated' : ''} ${
        forceHover ? 'ohf-force-hover' : ''
      }`}
      role="img"
      aria-label="Oche's Heart Foundation - Concept D"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="46" />
        </clipPath>
        <linearGradient id={sheenId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="ohf-badge-shell">
        <circle cx="50" cy="50" r="46" fill="#0A192F" />
        <circle
          cx="50"
          cy="50"
          r="43.5"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.5"
        />
        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width="38" height="100" fill={`url(#${sheenId})`} className="ohf-sheen-rect" />
        </g>

        <g transform="translate(3, 2) scale(0.84)">
          <g className="ohf-heart-group">
            <path
              className="ohf-heart-path"
              d="M 29.5 62.5 C 18.5 55 13 46.5 13 38 C 13 31 18.5 26 24.8 26 C 28.2 26 30.2 27.8 31.2 30.4 C 32.2 27.8 34.2 26 37.6 26 C 43.2 26 47.6 30.5 47.6 37.2 C 47.6 39.2 47.1 41.1 46.2 42.8"
              fill="none"
              stroke="#E84C3D"
              strokeWidth="7.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            className="ohf-ribbon-path"
            d="M 23.5 68.5 C 32.5 72.5 39.5 65.5 44.5 57.5 C 47.5 52.8 50.5 50.5 55.5 50.5 L 72.5 50.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g className="ohf-hf-letters" fill="#FFFFFF">
            <rect x="52" y="27" width="7.4" height="26.5" rx="1.2" />
            <rect x="52" y="59" width="7.4" height="14.5" rx="1.2" />
            <rect x="69.5" y="27" width="7.4" height="46.5" rx="1.2" />
            <rect x="81.5" y="27" width="7.4" height="46.5" rx="1.2" />
            <rect x="81.5" y="27" width="21.5" height="7.4" rx="1.2" />
            <rect x="81.5" y="46.5" width="17" height="7.2" rx="1.2" />
          </g>
        </g>
      </g>

      <rect className="ohf-divider" x="114" y="14" width="2" height="72" rx="1" fill="#E84C3D" />
      <text
        className="ohf-wordmark-top"
        x="134"
        y="48"
        fill={titleColor}
        fontFamily="'Poppins', system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="35"
        letterSpacing="-0.6"
      >
        Oche&apos;s Heart
      </text>
      <text
        className="ohf-wordmark-sub"
        x="136"
        y="76"
        fill="#E84C3D"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="16.5"
        letterSpacing="0.22em"
      >
        FOUNDATION
      </text>
    </svg>
  );
};

/**
 * Concept E: Warm Coral-to-Amber Gradient Heart + Gold Accent Bar
 */
export const OhfConceptE: React.FC<OhfFullLogoProps> = ({
  variant = 'light',
  className = 'h-16 w-auto',
  animated = true,
  forceHover = false,
  idPrefix = 'ohf-e',
}) => {
  const titleColor = variant === 'dark' ? '#FFFFFF' : '#0A192F';
  const clipId = `${idPrefix}-clip`;
  const sheenId = `${idPrefix}-sheen`;
  const warmId = `${idPrefix}-warm`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 96"
      className={`${className} ohf-logo-group ${animated ? 'ohf-animated' : ''} ${
        forceHover ? 'ohf-force-hover' : ''
      }`}
      role="img"
      aria-label="Oche's Heart Foundation - Concept E"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="2" y="2" width="112" height="92" rx="20" />
        </clipPath>
        <linearGradient id={sheenId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={warmId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E84C3D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      <g className="ohf-badge-shell">
        <rect x="2" y="2" width="112" height="92" rx="20" fill="#0A192F" />
        <rect
          x="3.25"
          y="3.25"
          width="109.5"
          height="89.5"
          rx="18.8"
          fill="none"
          stroke={`url(#${warmId})`}
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width="42" height="96" fill={`url(#${sheenId})`} className="ohf-sheen-rect" />
        </g>

        <g className="ohf-heart-group">
          <path
            className="ohf-heart-path"
            d="M 29.5 62.5 C 18.5 55 13 46.5 13 38 C 13 31 18.5 26 24.8 26 C 28.2 26 30.2 27.8 31.2 30.4 C 32.2 27.8 34.2 26 37.6 26 C 43.2 26 47.6 30.5 47.6 37.2 C 47.6 39.2 47.1 41.1 46.2 42.8"
            fill="none"
            stroke={`url(#${warmId})`}
            strokeWidth="6.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          className="ohf-ribbon-path"
          d="M 23.5 68.5 C 32.5 72.5 39.5 65.5 44.5 57.5 C 47.5 52.8 50.5 50.5 55.5 50.5 L 72.5 50.5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g className="ohf-hf-letters" fill="#FFFFFF">
          <rect x="52" y="27" width="7.4" height="26.5" rx="1.2" />
          <rect x="52" y="59" width="7.4" height="14.5" rx="1.2" />
          <rect x="69.5" y="27" width="7.4" height="46.5" rx="1.2" />
          <rect x="81.5" y="27" width="7.4" height="46.5" rx="1.2" />
          <rect x="81.5" y="27" width="22.5" height="7.4" rx="1.2" />
          <rect x="81.5" y="46.5" width="18" height="7.2" rx="1.2" />
        </g>
      </g>

      <rect className="ohf-divider" x="132" y="12" width="2.5" height="72" rx="1.25" fill={`url(#${warmId})`} />
      <text
        className="ohf-wordmark-top"
        x="152"
        y="46"
        fill={titleColor}
        fontFamily="'Poppins', system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="35"
        letterSpacing="-0.6"
      >
        Oche&apos;s Heart
      </text>
      <text
        className="ohf-wordmark-sub"
        x="154"
        y="74"
        fill="#D97706"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="16.5"
        letterSpacing="0.22em"
      >
        FOUNDATION
      </text>
    </svg>
  );
};

/**
 * Concept F: Executive Shield-Badge + Stacked Wordmark
 */
export const OhfConceptF: React.FC<OhfFullLogoProps> = ({
  variant = 'light',
  className = 'h-16 w-auto',
  animated = true,
  forceHover = false,
  idPrefix = 'ohf-f',
}) => {
  const titleColor = variant === 'dark' ? '#FFFFFF' : '#0A192F';
  const clipId = `${idPrefix}-clip`;
  const sheenId = `${idPrefix}-sheen`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 392 104"
      className={`${className} ohf-logo-group ${animated ? 'ohf-animated' : ''} ${
        forceHover ? 'ohf-force-hover' : ''
      }`}
      role="img"
      aria-label="Oche's Heart Foundation - Concept F"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M52 4 L98 16 V52 C98 78 76 94 52 100 C28 94 6 78 6 52 V16 L52 4 Z" />
        </clipPath>
        <linearGradient id={sheenId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="ohf-badge-shell">
        <path
          d="M52 4 L98 16 V52 C98 78 76 94 52 100 C28 94 6 78 6 52 V16 L52 4 Z"
          fill="#0A192F"
        />
        <path
          d="M52 7 L95 18 V51 C95 75 74 90 52 96 C30 90 9 75 9 51 V18 L52 7 Z"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.5"
        />
        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width="40" height="104" fill={`url(#${sheenId})`} className="ohf-sheen-rect" />
        </g>

        <g transform="translate(8, 12) scale(0.76)">
          <g className="ohf-heart-group">
            <path
              className="ohf-heart-path"
              d="M 29.5 62.5 C 18.5 55 13 46.5 13 38 C 13 31 18.5 26 24.8 26 C 28.2 26 30.2 27.8 31.2 30.4 C 32.2 27.8 34.2 26 37.6 26 C 43.2 26 47.6 30.5 47.6 37.2 C 47.6 39.2 47.1 41.1 46.2 42.8"
              fill="none"
              stroke="#E84C3D"
              strokeWidth="7.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            className="ohf-ribbon-path"
            d="M 23.5 68.5 C 32.5 72.5 39.5 65.5 44.5 57.5 C 47.5 52.8 50.5 50.5 55.5 50.5 L 72.5 50.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g className="ohf-hf-letters" fill="#FFFFFF">
            <rect x="52" y="27" width="7.4" height="26.5" rx="1.2" />
            <rect x="52" y="59" width="7.4" height="14.5" rx="1.2" />
            <rect x="69.5" y="27" width="7.4" height="46.5" rx="1.2" />
            <rect x="81.5" y="27" width="7.4" height="46.5" rx="1.2" />
            <rect x="81.5" y="27" width="22.5" height="7.4" rx="1.2" />
            <rect x="81.5" y="46.5" width="18" height="7.2" rx="1.2" />
          </g>
        </g>
      </g>

      <rect className="ohf-divider" x="118" y="16" width="2" height="72" rx="1" fill="#E84C3D" />
      <text
        className="ohf-wordmark-top"
        x="138"
        y="50"
        fill={titleColor}
        fontFamily="'Poppins', system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="35"
        letterSpacing="-0.6"
      >
        Oche&apos;s Heart
      </text>
      <text
        className="ohf-wordmark-sub"
        x="140"
        y="78"
        fill="#E84C3D"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="16.5"
        letterSpacing="0.22em"
      >
        FOUNDATION
      </text>
    </svg>
  );
};

export interface FlagshipConceptMeta {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  Component: React.FC<OhfFullLogoProps>;
}

export const FLAGSHIP_CONCEPTS: FlagshipConceptMeta[] = [
  {
    id: 'A',
    label: 'Concept A',
    subtitle: 'Reference Recreation (Rounded-Rect Badge)',
    description: '1:1 recreation of your attached sample with open coral heart, flowing H–F ribbon, and 1.5px inner border.',
    Component: OhfFullLogo,
  },
  {
    id: 'B',
    label: 'Concept B',
    subtitle: 'Continuous Kinetic Ligature',
    description: 'Softer squircle badge where the white ribbon sweeps through H and continues unbroken into the top bar of F.',
    Component: OhfConceptB,
  },
  {
    id: 'C',
    label: 'Concept C',
    subtitle: 'Borderless Editorial Mark',
    description: 'Removes the container box so the coral heart and navy/white HF sit directly on light or dark page surfaces.',
    Component: OhfConceptC,
  },
  {
    id: 'D',
    label: 'Concept D',
    subtitle: 'Circular Medallion Seal',
    description: 'Frames the heart-ribbon OHF monogram inside a clean circular navy medallion with subtle inner ring.',
    Component: OhfConceptD,
  },
  {
    id: 'E',
    label: 'Concept E',
    subtitle: 'Coral-to-Amber Warm Gradient',
    description: 'Blends coral-orange (#E84C3D) into warm amber (#D97706) across the heart, divider, and FOUNDATION subtext.',
    Component: OhfConceptE,
  },
  {
    id: 'F',
    label: 'Concept F',
    subtitle: 'Civic Shield Crest',
    description: 'Places the OHF heart-ribbon monogram inside an executive civic shield badge for institutional authority.',
    Component: OhfConceptF,
  },
];
