
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1BA6A3',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#D6BBA2',
					foreground: '#303030'
				},
				destructive: {
					DEFAULT: '#D64545',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F7F7F7',
					foreground: '#303030'
				},
				accent: {
					DEFAULT: '#F5A623',
					foreground: '#303030'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				charcoal: '#303030',
				teal: {
					DEFAULT: '#1BA6A3',
					50: '#f0fdfc',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a'
				},
				sand: '#D6BBA2',
				'light-gray': '#F7F7F7'
			},
			fontFamily: {
				heebo: ['Heebo', 'sans-serif'],
			},
			fontSize: {
				'h1-desktop': ['40px', '48px'],
				'h1-mobile': ['32px', '40px'],
				'h2-desktop': ['32px', '40px'],
				'h2-mobile': ['28px', '36px'],
				'h3-desktop': ['28px', '36px'],
				'h3-mobile': ['24px', '32px'],
				'body': ['18px', '28px'],
				'body-mobile': ['16px', '24px'],
			},
			spacing: {
				'8': '8px',
				'16': '16px',
				'24': '24px',
				'32': '32px',
				'48': '48px',
				'64': '64px',
			},
			borderRadius: {
				'card': '16px',
				'button': '32px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'card': '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
				'card-hover': '0 6px 16px 0 rgba(0, 0, 0, 0.2)',
			},
			keyframes: {
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
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
				}
			},
			animation: {
				'fade-up': 'fade-up 0.6s ease-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
