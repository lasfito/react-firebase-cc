import React, { useEffect, useState } from 'react';
import EditarPendienteModal from '../components/EditarPendienteModal';
import Navbar from '../components/Navbar';
import PendienteCard from '../components/PendienteCard';
import PendienteForm from '../components/PendienteForm';
import SearchModal from '../components/SearchModal';
import getAllPendientes from '../functions/leerAllPendientes';

function Home({ user }) {
	function refreshAllPendientes() {
		getAllPendientes()
			.then(pendientes => {
				setAllPendientes(pendientes);
			})
			.catch(err => {
				alert(err);
			});
	}
	useEffect(() => {
		refreshAllPendientes();
	}, []);

	const [allPendientes, setAllPendientes] = useState(null);
	const [selectedPendiente, setSelectedPendiente] = useState(null);

	return (
		<div className="min-w-screen min-h-screen flex flex-col ">
			<Navbar user={user} />
			<EditarPendienteModal
				pendiente={selectedPendiente}
				refreshAllPendientes={refreshAllPendientes}
			/>
			<SearchModal />

			<PendienteForm refreshAllPendientes={refreshAllPendientes} />
			{allPendientes &&
				allPendientes.map(pendiente => (
					<PendienteCard
						pendiente={pendiente}
						setSelectedPendiente={setSelectedPendiente}
						refreshAllPendientes={refreshAllPendientes}
					/>
				))}
		</div>
	);
}

export default Home;
