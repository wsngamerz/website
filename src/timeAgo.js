import TimeAgo from "javascript-time-ago";
import enGB from "javascript-time-ago/locale/en-GB";

TimeAgo.addDefaultLocale(enGB);
const timeAgo = new TimeAgo("en-GB");

export default timeAgo;
