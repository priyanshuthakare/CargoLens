interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill={light ? '#FFFFFF' : '#0A1628'} />
        <path
          d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
          stroke={light ? '#0A1628' : '#06B6D4'}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M16 8V16M16 16L24 12M16 16L8 12M16 16V24"
          stroke={light ? '#0A1628' : '#06B6D4'}
          strokeWidth="1.5"
        />
        <circle cx="16" cy="16" r="2" fill={light ? '#0A1628' : '#06B6D4'} />
      </svg>
      <span
        className={`text-xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        CargoLens
      </span>
    </div>
  );
}
