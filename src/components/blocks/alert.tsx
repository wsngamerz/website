import alinea from "alinea";
import { cn } from "../../lib/utils";

export const AlertSchema = alinea.type("Alert", {
    level: alinea.select(
        "Level",
        {
            primary: "Primary",
            secondary: "Secondary",
            info: "Info",
            success: "Success",
            danger: "Danger",
            warning: "Warning",
        },
        {
            initialValue: "primary",
        }
    ),
    alert: alinea.text("Alert Content"),
});

type Props = {
    level: string;
    alert: string;
};

const Alert = ({ alert, level }: Props) => {
    let extra: string;

    switch (level) {
        case "success":
            extra = "border-green-900/10 bg-green-50 text-green-700";
            break;

        case "warning":
            extra = "border-amber-900/10 bg-amber-50 text-amber-700";
            break;

        case "danger":
            extra = "border-red-900/10 bg-red-50 text-red-700";
            break;

        case "info":
            extra = "border-sky-900/10 bg-sky-50 text-sky-700";
            break;

        default:
            extra = "border-cyan-900/10 bg-cyan-50 text-cyan-700";
            break;
    }

    return <div className={cn("rounded border p-4 m-4", extra)}>{alert}</div>;
};

export default Alert;
