import {ReactNode} from "react";

   export const ParserTextUtils = (text:string): ReactNode[] => {
        const jsxParts: React.ReactNode[] = [];
        const parts = text.split(/(<br \/>|<strong>|<\/strong>)/);
        let inStrong = false;

        parts.forEach((part, index) => {
            if (part === '<br />') {
                jsxParts.push(<br key={index} />);
            } else if (part === '<strong>') {
                inStrong = true;
            } else if (part === '</strong>') {
                inStrong = false;
            } else {
                jsxParts.push(inStrong ? <strong key={index}>{part}</strong> : part);
            }
        });

        return jsxParts;
    }