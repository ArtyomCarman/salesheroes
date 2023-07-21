import { useEffect, useState} from "react";
import {Box, Flex, SimpleGrid, Text} from "@chakra-ui/react";

export const InstallPWAButton = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
    const [showBannerText, setShowBannerText] = useState(true);

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

    const handleClose = () => {
        setShowBannerText(false)
    }
    if (!supportsPWA || !showBannerText) {
        return null;
    }
    return (
        <SimpleGrid
            justifyItems="center"
            boxShadow="inset 0px -1px 0px rgba(252, 73, 88, 0.2)"
            padding="12px 16px"
            bgColor="rgba(82, 185, 136, 0.3)"
        >
            <SimpleGrid
                maxWidth="840px"
                width="100%"
                templateColumns={{
                    base: '1fr',
                    lg: 'auto auto',
                }}
                alignItems="start"
                gap="12px"
                paddingLeft={{
                    base: '0',
                    lg: '16px',
                }}
            >
                <Text size="sm" color="white.80" letterSpacing="0.01em">
                    Установить приложение на устройство
                </Text>
                <Flex justifySelf='flex-end' gap='12px'>
                <Box
                    padding="0 4px"
                     _hover={{
                         background: 'white.10',
                         borderRadius: '4px',
                     }}
                     role="group"
                     cursor="pointer"
                     gridArea={{ base: '2 / 2 / 3 / 3', lg: 'auto' }}
                     justifySelf={{ base: "flex-start", lg: 'flex-end'}}
                >
                    <Text
                        size="sm"
                        letterSpacing="0.01em"
                        color="white.80"
                        borderBottom="1px dashed"
                        borderBottomColor="white.80"
                        _groupHover={{
                            borderBottomColor: 'transparent',
                        }}
                        onClick={handleClose}
                    >
                        Закрыть
                    </Text>
                </Box>
                <Box
                    padding="0 4px"
                    _hover={{
                        background: 'white.10',
                        borderRadius: '4px',
                    }}
                    role="group"
                    cursor="pointer"
                    gridArea={{ base: '2 / 3', lg: 'auto' }}
                    justifySelf="flex-end"
                    onClick={onClick}
                >
                    <Text
                        size="sm"
                        letterSpacing="0.01em"
                        color="white.80"
                        borderBottom="1px dashed"
                        borderBottomColor="white.80"
                        _groupHover={{
                            borderBottomColor: 'transparent',
                        }}
                    >
                        Скачать
                    </Text>
                </Box>
                </Flex>
            </SimpleGrid>
        </SimpleGrid>
    );
};