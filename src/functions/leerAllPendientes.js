import { db } from '../firebase/credenciales';
import { collection, getDocs, getDoc } from 'firebase/firestore';

export default async function getAllPendientes() {
	try {
		const collectionRef = collection(db, 'pendiente');
		// getDocs puede lo mismo recibir una query o una collection

		const docusCifrados = await getDocs(collectionRef);
		const docus = docusCifrados.docs.map(d => {
			return {
				id: d.id,
				...d.data(),
			};
		});
		return docus;
	} catch (error) {
		console.log(error);
	}
}
