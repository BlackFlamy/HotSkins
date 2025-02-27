import "@mui/material/styles"

declare module "@mui/material/styles" {
	interface Palette {
		separators?: {
			light?: string
			dark?: string
		}
		elements?: {
			disabled?: string
			hot_prices?: string
			main?: string
			positive?: string
			intermediate?: string
			negative?: string
		}
	}

	interface PaletteOptions {
		separators: {
			light?: string
			dark?: string
		}
		elements: {
			disabled?: string
			hot_prices?: string
			main?: string
			positive?: string
			intermediate?: string
			negative?: string
		}
	}
}
