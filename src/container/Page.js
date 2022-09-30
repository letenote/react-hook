import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import AppContext  from "../context/AppContext";

const { LangProvider } = AppContext;
function Page(){
	return (
		<LangProvider>
			<Header />
			<Content />
			<Footer />
		</LangProvider>
	);
}

export default Page;