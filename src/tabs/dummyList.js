import React from "react";
import classes from './dummyElement.module.css';

const DummyList = () => (
	<table className={classes.wrapper}>
		<tbody>
			<tr>
				<td>Dummy</td>
				<td>List</td>
			</tr>
		</tbody>
	</table>
);

export default DummyList;
