import { useEffect, useState} from "react";
import {Box, Text} from "@chakra-ui/react";
import {ButtonComponent} from "./ButtonComponent";

export const InstallPWAButton = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        // @ts-ignore
        const handler = (event) => {
            event.preventDefault();
            setSupportsPWA(true);
            setPromptInstall(event);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    // @ts-ignore
    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        // @ts-ignore
        promptInstall.prompt();
    };
    if (!supportsPWA) {
        return null;
    }
    return (
        <ButtonComponent
            //@ts-ignore
            onClick={onClick}
            text='Скачать'
            design='outlined'
        />
    );
};