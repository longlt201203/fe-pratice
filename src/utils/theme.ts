export interface ThemeColorProps {
    primary: string;
    primaryHover?: string;
    primaryText?: string;
    primaryTextHover?: string;
    primaryGradient?: string;
    primaryGradientHover?: string;

    secondary: string;
    secondaryHover?: string
    secondaryText?: string;
    secondaryTextHover?: string;
}

export interface ThemeProps extends ThemeColorProps {
}

export const lightTheme: ThemeProps = {
    primary: "#D74B76",
    primaryText: "white",
    primaryHover: "#E96586",
    primaryGradient: "linear-gradient(180deg, rgba(215,75,118,1) 0%, rgba(246,120,146,1) 60%)",
    primaryGradientHover: "linear-gradient(0deg, rgba(215,75,118,1) 0%, rgba(246,120,146,1) 60%)",
    
    secondary: "#f1ffea",
    secondaryHover: "#E1F0DA",
    secondaryText: "black"
}