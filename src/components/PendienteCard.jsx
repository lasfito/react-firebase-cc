import React from 'react';
import eliminarPendiente from '../functions/eliminarPendiente';
function PendienteCard({
	pendiente,
	setSelectedPendiente,
	refreshAllPendientes,
}) {
	function mostrarModal() {
		setSelectedPendiente(pendiente);
		const modal = document.getElementById('modal-editar-pendiente');
		modal.showModal();
	}

	return (
		<div className=" flex flex-row justify-around border-2 border-slate-500 p-10 my-5 shadow-md">
			<div>
				<h3>Priority</h3>
				<p>{pendiente.priority}</p>
			</div>
			<div>
				<h3>Description</h3>
				<p>{pendiente.description}</p>
			</div>
			<div>
				<h3>Contact</h3>
				<p>{pendiente.contact}</p>
			</div>
			<div className="max-w-[200px]">
				<img src={pendiente?.url} alt="Imagen" />
			</div>
			<button className="bg-blue-800 text-white" onClick={mostrarModal}>
				Editar
			</button>
			<button
				className="bg-red-300 text-white"
				onClick={() => {
					eliminarPendiente(pendiente.id).then(confirmacion => {
						refreshAllPendientes();
					});
				}}
			>
				Eliminar
			</button>
		</div>
	);
}

export default PendienteCard;
