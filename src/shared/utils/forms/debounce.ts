type DebounceCallable = (...args: unknown[]) => void;

type DebounceOptions = { delay?: number } & ({ early: true } | { late: true });

type NormalizedDebounceOptions = {
  delay: number;
  early: boolean;
  late: boolean;
};

const DEFAULT_OPTIONS: NormalizedDebounceOptions = {
  delay: 250,
  early: false,
  late: true,
};

export const debounce = <C extends DebounceCallable>(callback: C, options?: DebounceOptions): C => {
  const { early, late, delay }: NormalizedDebounceOptions =
    options === undefined
      ? DEFAULT_OPTIONS
      : {
          delay: DEFAULT_OPTIONS.delay,
          early: false,
          late: false,
          ...options,
        };

  let timerId: ReturnType<typeof setTimeout> | undefined = undefined;

  const returnFunction = (...args: unknown[]): void => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    } else if (early) {
      callback(...args);
    }

    const laterCall = () => {
      timerId = undefined;
      if (late) {
        callback(...args);
      }
    };

    timerId = setTimeout(laterCall, delay);
  };

  // @ts-expect-error: cannot infer args type
  return returnFunction;
};
