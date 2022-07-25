import React, { useEffect } from 'react';
import editPendiente from '../functions/editPendiente';

function EditarPendienteModal({ pendiente, refreshAllPendientes }) {
	useEffect(() => {
		setPendienteEditar(pendiente);
	}, [pendiente]);

	const [pendienteEditar, setPendienteEditar] = React.useState({
		...pendiente,
	});

	function submitHandler(e) {
		e.preventDefault();
		editPendiente(pendienteEditar.id, pendienteEditar).then(confirmacion => {
			const modal = document.getElementById('modal-editar-pendiente');
			refreshAllPendientes();
			modal.close();
		});
	}

	return (
		<dialog id="modal-editar-pendiente">
			<form onSubmit={submitHandler}>
				<label className="flex flex-col mx-10 ">
					Prioridad
					<select
						id="priority"
						className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						value={pendienteEditar?.priority}
						onChange={e => {
							setPendienteEditar({
								...pendienteEditar,
								priority: e.target.value,
							});
						}}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</label>
				<label className="flex flex-col">
					Descripción
					<input
						value={pendienteEditar?.description}
						type="text"
						id="description"
						className="
						bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						onChange={e => {
							setPendienteEditar({
								...pendienteEditar,
								description: e.target.value,
							});
						}}
					/>
				</label>
				<label className="flex flex-col">
					Contacto
					<input
						type="email"
						id="contact"
						value={pendienteEditar?.contact}
						className="
						bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						onChange={e => {
							setPendienteEditar({
								...pendienteEditar,
								contact: e.target.value,
							});
						}}
					/>
				</label>
				<button
					type="submit"
					className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Editar
				</button>
			</form>
		</dialog>
	);
}

export default EditarPendienteModal;
