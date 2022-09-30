import React, { createContext, useState } from "react";

const AppContext = (defaultValue) => {
	const LangContext = createContext(defaultValue);
	const LangProvider = (props) => {
		const [lang, setLang] = useState("id");
		const changeLang = e => setLang(e.target.value);
		const langState = { lang, changeLang };
		return (
			<LangContext.Provider value={langState}>
				{props.children}
			</LangContext.Provider>
		);
	}

	return {
		LangContext,
		LangProvider,
	}
};

export default AppContext();