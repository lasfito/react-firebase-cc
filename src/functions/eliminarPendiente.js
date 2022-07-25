import { db } from '../firebase/credenciales';
import { deleteDoc, collection, doc } from 'firebase/firestore';

export default async function eliminarPendiente(id) {
	try {
		const collectionRef = collection(db, 'pendiente');
		const docuRef = doc(collectionRef, id);
		const confirmacion = await deleteDoc(docuRef);
		return confirmacion;
	} catch (err) {
		console.log(err);
	}
}
