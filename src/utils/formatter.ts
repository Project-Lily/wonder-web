import { DateTime, type LocaleOptions } from "luxon";

export const formatEpoch = (seconds: number, format: string, opts?: LocaleOptions) =>
  DateTime.fromSeconds(seconds).toFormat(format, opts);
