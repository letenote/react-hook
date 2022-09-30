import React, {useContext} from "react";
import AppContext from "../context/AppContext";

const { LangContext } = AppContext;
function Menu() {
	const langProps = useContext(LangContext);
	console.log('menu render')
	return (
		<div>
			<ul>
				<li>
					Language
					<select style={{ marginLeft: '10px' }} value={langProps.lang} onChange={langProps.changeLang}>
						<option value="en"> English </option>
						<option value="id"> Indonesia </option>
					</select>
				</li>
			</ul>
		</div>
	);
}

export default Menu;