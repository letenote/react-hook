import React from "react";
import AppContext from "context/AppContext";

const Header = React.lazy(() => import("components/Header"));
const Content = React.lazy(() => import("components/Content"));
const Footer = React.lazy(() => import("components/Footer"));

const { LangProvider } = AppContext;
function Page() {
	return (
		<LangProvider>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Header />
				<Content />
				<Footer />
			</React.Suspense>
		</LangProvider>
	);
}

export default Page;