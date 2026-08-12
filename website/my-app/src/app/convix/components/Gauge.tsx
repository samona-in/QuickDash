type GaugeProps = {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
};

const TICK_COUNT = 40;
const CENTER = 100;
const OUTER_RADIUS = 80;
const INNER_RADIUS = OUTER_RADIUS - 10;

// Fixed precision keeps server and client trig output byte-identical —
// Math.cos/sin can differ in the last bit between Node's SSR and the
// browser, which otherwise trips a React hydration mismatch.
const round = (n: number) => Math.round(n * 1000) / 1000;

export function Gauge({
  value,
  color = "#ef4d23",
  showLabels = false,
  min,
  max,
}: GaugeProps) {
  const activeCount = Math.round((value / 100) * TICK_COUNT);

  const ticks = Array.from({ length: TICK_COUNT }, (_, i) => {
    const angle = Math.PI + (i / (TICK_COUNT - 1)) * Math.PI;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
      x1: round(CENTER + INNER_RADIUS * cos),
      y1: round(CENTER + INNER_RADIUS * sin),
      x2: round(CENTER + OUTER_RADIUS * cos),
      y2: round(CENTER + OUTER_RADIUS * sin),
      active: i < activeCount,
    };
  });

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 200 120"
        className="mx-auto w-full"
        style={{ maxWidth: 260 }}
      >
        {ticks.map((tick, i) => (
          <line
            key={i}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={tick.active ? color : "#d4d4d8"}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        ))}
        <text
          x={100}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
        >
          {value}%
        </text>
      </svg>
      {showLabels && (
        <div className="flex justify-between text-[11px] text-neutral-500">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
