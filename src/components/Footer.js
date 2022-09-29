import React, {useContext} from "react";
import AppContext from "../context/AppContext";

const { LangContext } = AppContext;
function Footer() {
	const langProps = useContext(LangContext);
	console.log("footer render")
	return (
		<>
			<i>-- Footer --</i>
			<p>Language : {langProps.lang} </p>
		</>
	);
}

export default Footer;