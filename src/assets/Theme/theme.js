export const baseTheme = {
    font: {
        size: {
            xxxs: '.9rem',
            xxs: '1.2rem',
            xs: '1.4rem',
            s: '2.6rem',
            m: '4.2rem',
            l: '5 rem',
            xl: '7.2rem',
            xxl: '9.4rem',
        },
        weight: {
            w100: '100',
            w300: '300',
            w500: '500',
            w700: '700',
        },
    },
    containerSize: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px',
    },
    mq: {
        sm: '@media (min-width: 576px)',
        md: '@media (min-width: 768px)',
        lg: '@media (min-width: 992px)',
        xl: '@media (min-width: 1200px)',
        xxl: '@media (min-width: 1400px)',
    },
    navBar: {
        mobileHeight: '8rem',
        mobileWidth: '100%',
        desktopHeight: '100%',
        desktopWidth: '26.5rem'
    },
};

export const lightTheme = {
    color: {
        body: 'hsl(0,0%,100%)',
        text: '#333333',
        accent: '#333333',
        elementBackground: '',
    },
};

export const darkTheme = {
    color: {
        background: '#18191A',
        background100: '#242526',
        background200: '#3A3B3C',
        background300: 'red',
        primaryText: '#E4E6EB',
        secondaryText: '#B0B3B8', 
        dividerPrimary: '#3c4043',
        // accent: 'hsl(219, 79%, 44%)',
        accent: '#FFFD00',
        accentSecondary: '#FFFD00'
    },
};
