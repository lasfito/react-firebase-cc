import React from 'react';
import searchPendiente from '../functions/searchPendiente';

function SearchModal() {
	const [listaResultados, setListaResultados] = React.useState(null);

	function buscarPendienteConString(e) {
		e.preventDefault();
		const string = e.target.searchInput.value;

		searchPendiente(string).then(res => setListaResultados(res));
		e.target.searchInput.value = '';
	}

	return (
		<dialog id="search-modal">
			<div
				className="min-w-[500px] 
        min-h-[500px] flex flex-col justify-around items-center
        "
			>
				<form className="min-w-[80%]" onSubmit={buscarPendienteConString}>
					<input
						type="text"
						placeholder="¿Qué deseas buscar el día de hoy?"
						id="searchInput"
					/>
					<button type="submit">Buscar</button>
				</form>
				<div className="min-w-[80%]">
					{listaResultados &&
						listaResultados?.map(res => (
							<div>
								<h4>{res.descripcion}</h4>
								<h4>{res.priority}</h4>
								<h4>{res.contact}</h4>
							</div>
						))}
				</div>
			</div>
		</dialog>
	);
}

export default SearchModal;
