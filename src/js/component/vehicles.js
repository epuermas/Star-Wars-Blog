import React, { useContext } from "react";
import { Context } from "../store/appContext";

const vehicles = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5" style={{ width: "32%", position: "absolute", left: "68%" }}>
			<table className="table table-bordered mt-2 pt-5">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Vehicles</th>
					</tr>
				</thead>
				<tbody className="tbody-dark">
					{store.vehicles.map((e, index) => (
						<tr key={index}>
							<td>{e.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default vehicles;
