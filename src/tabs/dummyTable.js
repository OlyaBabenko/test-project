import React from "react";
import classes from './dummyElement.module.css';

const DummyTable = () => (
	<table className={classes.wrapper}>
		<tbody>
			<tr>
				<td>Dummy</td>
				<td>Table</td>
			</tr>
		</tbody>
	</table>
);

export default DummyTable;
