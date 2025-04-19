import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

/**
 * @alias YYYY-MM-DD
 */
export type DateStr = string;
const dateStrFormat = "YYYY-MM-DD";

class _DateUtil {
  now = () => dayjs().locale("ko");
  nowFormat = () => this.now().format(dateStrFormat);
  nowISO = () => this.now().toISOString();
  format = (d: string | Date | Dayjs) => dayjs(d).format(dateStrFormat);
  formatDot = (d: string | Date | Dayjs) => dayjs(d).format("YY.MM.DD");
  formatYYMM = (d: string | Date | Dayjs) => dayjs(d).format("YY.MM");
  formatMMDD = (d: string | Date | Dayjs) => dayjs(d).format("MM.DD");
  formatFull = (d: string | Date | Dayjs) => dayjs(d).format("YY.MM.DD HH:mm");
  formatFromNow = (d: string | Date | Dayjs) => {
    if (this.diffFromNow(d) > 3) return this.formatFull(d);

    return dayjs(d).locale("ko").fromNow();
  };

  diffFromNow = (d: string | Date | Dayjs) =>
    this.now().startOf("day").diff(dayjs(d).startOf("day"), "day");
}

const DateUtil = new _DateUtil();

export default DateUtil;
