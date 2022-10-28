import { parseISO, format } from "date-fns";

type Props = {
    dateString?: string;
    date?: Date;
};

const DateFormatter = ({ dateString, date }: Props) => {
    let d: Date;

    if (dateString) {
        d = parseISO(dateString);
    } else if (date) {
        d = date;
    } else {
        return <></>;
    }

    const dateFormatted = format(d, "LLLL	d, yyyy");
    return <time dateTime={dateFormatted}>{dateFormatted}</time>;
};

export default DateFormatter;
