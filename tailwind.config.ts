import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			hoverPrimary: "#9891E1",
		},
  		backgroundImage: {
  			mainBg: 'url(../assets/images/main-bg.svg)',
  			whitelistingBg: 'url(../assets/images/missions-bg.svg)',
  			mainBgMobile: 'url(../assets/images/main-bg-mobile.svg)',
  			token: 'url(../assets/icons/join-token.webp)',
  			possibilitiesMobile: 'url(../assets/vectors/possibilities-mobile1.svg)',
  			possibilitiesDekstop: 'url(../assets/vectors/possibilities-desktop.svg)',
  			globe: 'url(../assets/images/globe-background.webp)',
  			presaleSectionBg: 'url(../assets/images/presale-section-bg.png)',
  			gradientOpaque: 'linear-gradient(98deg, #8AE5CF 6.1%, #7C3AE7 103.66%)',
  			event2BgSm: 'url(../assets/images/event-2-small-bg.png)',
  			event2: 'url(../assets/images/event-2.png)',
  			event3: 'url(../assets/images/event-3.png)',
  			event5: 'url(../assets/images/event-5.png)',
  			event7: 'url(../assets/images/event-7.png)',
  			ogBg: 'url(../assets/images/og-bg.svg)',
  			communityLooper: 'url(../assets/vectors/looper.svg)'
  		},
  		backgroundSize: {
  			full: '100%'
  		},
  		screens: {
  			xs: '480px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-reverse': {
  				'0%': {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'slide-in': {
  				'0%': {
  					transform: 'translateY(50%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'slide-out': {
  				'0%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateY(-50%)',
  					opacity: '0'
  				}
  			},
  			'bounce-hero': {
  				'0%, 100%': {
  					transform: 'translateY(3%)'
  				},
  				'50%': {
  					transform: 'translateY(-3%)'
  				}
  			},
			  scrollLeft: {
				from: { transform: "translateX(0%)" },
				to: { transform: "translateX(calc(-100% - 48px))" },
			  },
			  scrollRight: {
				from: { transform: "translateX(0%)" },
				to: { transform: "translateX(calc(100% - 48px))" },
			  },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee 20s linear infinite',
  			"marquee-reverse": 'marquee-reverse 20s linear infinite',
  			'slide-in': 'slide-in 0.2s ease-in-out forwards',
  			'slide-out': 'slide-out 0.2s ease-in-out forwards',
  			'bounce-hero': 'bounce-hero 3s linear infinite',
			'scroll-left': 'scrollLeft 20s linear infinite',
			'scroll-right': 'scrollRight 20s linear infinite',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
