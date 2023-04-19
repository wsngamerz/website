import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TextNode } from "@alinea/core";

import type { TextDoc } from "alinea";

export const getWords = (textDoc: TextDoc): number => {
    if (textDoc) {
        return textDoc.reduce((sum: number, node: TextNode) => {
            if (TextNode.isText(node)) {
                return sum + node.text.split(" ").length;
            } else if (TextNode.isElement(node) && node.content) {
                return sum + getWords(node.content);
            } else {
                return sum;
            }
        }, 0);
    } else {
        return 0;
    }
};

export const getReadingMins = (words: number): number => {
    return Math.round(words / 200);
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
