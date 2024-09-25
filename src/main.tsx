import App from "@/App";
import { Providers } from "@contexts/Providers";
import { ThemeProvider } from "@contexts/useTheme";
import React from "react";
import ReactDOM from "react-dom/client";
import "@services/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<Providers>
				<App />
			</Providers>
		</ThemeProvider>
	</React.StrictMode>,
);
