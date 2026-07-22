interface StorkIconProps {
  size?: number;
  className?: string;
}

function StorkIcon({ size = 36, className = "" }: StorkIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* === STORK (left side) === */}
      {/* Stork body */}
      <ellipse cx="24" cy="44" rx="10" ry="7" fill="currentColor" opacity="0.85" />
      {/* Wing */}
      <path
        d="M17 42C14 40 13 44 16 46C18 47 21 46 20 44"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Tail feathers */}
      <path
        d="M14 44L10 47M14 45L9 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Neck */}
      <path
        d="M30 39C32 34 33 28 31 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Head */}
      <circle cx="30" cy="20" r="4" fill="currentColor" />
      {/* Eye */}
      <circle cx="31" cy="19" r="1.2" fill="#181818" />
      {/* Eye shine */}
      <circle cx="31.5" cy="18.5" r="0.4" fill="currentColor" opacity="0.5" />
      {/* Beak */}
      <path
        d="M34 20L39 19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Stork legs */}
      <path
        d="M21 51L19 62M27 51L29 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Stork feet */}
      <path
        d="M17 62L21 62M27 62L31 62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* === TODDLER (right side) === */}
      {/* Toddler head */}
      <circle cx="54" cy="42" r="7" fill="currentColor" opacity="0.8" />
      {/* Toddler face - eyes */}
      <circle cx="52" cy="41" r="1.2" fill="#181818" />
      <circle cx="56.5" cy="41" r="1.2" fill="#181818" />
      {/* Toddler smile */}
      <path
        d="M51.5 44.5C52.5 46 56 46 57 44.5"
        stroke="#181818"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      {/* Toddler blush cheeks */}
      <circle cx="50" cy="43.5" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="58.5" cy="43.5" r="1.5" fill="currentColor" opacity="0.3" />
      {/* Little tuft of hair */}
      <path
        d="M52 35.5C53 34 55 34 56 35.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M54 35C54 33.5 54.5 33 54 34"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Toddler body */}
      <ellipse cx="54" cy="56" rx="6" ry="7" fill="currentColor" opacity="0.6" />
      {/* Toddler arm reaching toward stork */}
      <path
        d="M48 53C44 50 40 48 37 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Toddler little hand */}
      <circle cx="37" cy="45" r="1.8" fill="currentColor" opacity="0.7" />
      {/* Toddler legs */}
      <path
        d="M51 63L50 68M57 63L58 68"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* === TOGETHER DETAILS === */}
      {/* Heart between them */}
      <path
        d="M39 30C39 28 40.5 27.5 41.5 29C42.5 27.5 44 28 44 30C44 32 41.5 34 41.5 34C41.5 34 39 32 39 30Z"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Small sparkles */}
      <circle cx="46" cy="25" r="0.7" fill="currentColor" opacity="0.4" />
      <circle cx="36" cy="14" r="0.7" fill="currentColor" opacity="0.4" />
      <circle cx="63" cy="36" r="0.7" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export default StorkIcon;
