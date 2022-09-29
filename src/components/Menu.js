import React from "react";

function Menu() {
	console.log('menu render')
	return (
		<div>
			<ul>
				<li>Home</li>
				<li>Products</li>
				<li>
					Language
					<select value={'en'} onChange={() => {}}>
						<option value="en"> English </option>
						<option value="id"> Indonesia </option>
					</select>
				</li>
			</ul>
		</div>
	);
}

export default Menu;