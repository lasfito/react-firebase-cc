import { db } from '../firebase/credenciales';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

export default async function crearPendiente(data) {
	try {
		const collectionRef = collection(db, 'pendiente');

		const pendienteId = await addDoc(collectionRef, data);
	} catch (error) {
		console.log(error);
	}
}
