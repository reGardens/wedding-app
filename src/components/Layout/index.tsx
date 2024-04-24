import React, { ReactNode } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../../css/main.css'
import backgroundDummy from "../../assets/image/background-dummy.webp"

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <img src={backgroundDummy} alt="" loading="lazy" srcSet="" className="-z-10 fixed top-0 left-0 w-full h-screen object-cover" />
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}