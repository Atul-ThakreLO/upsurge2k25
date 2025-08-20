import { cn } from "../../../lib/utils";

export function DaySwitcher({ activeDay, onDayChange }) {
  return (
    <div className="flex justify-center mb-8 px-4">
      <div className="flex rounded-lg overflow-hidden neon-border">
        <button
          data-testid="button-day1"
          onClick={() => onDayChange(1)}
          className={cn(
            "day-tab px-8 py-3 text-lg font-semibold cursor-pointer text-white transition-all duration-300",
            activeDay === 1 && "active"
          )}
        >
          DAY 1
        </button>
        <button
          data-testid="button-day2"
          onClick={() => onDayChange(2)}
          className={cn(
            "day-tab px-8 py-3 text-lg font-semibold cursor-pointer text-white transition-all duration-300",
            activeDay === 2 && "active"
          )}
        >
          DAY 2
        </button>
      </div>
    </div>
  );
}