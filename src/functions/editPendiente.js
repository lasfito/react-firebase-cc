import { db } from '../firebase/credenciales';
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';

export default async function editPendiente(id, data) {
	try {
		const collectionRef = collection(db, 'pendiente');
		const docuRef = doc(collectionRef, id);

		// priority,{ priority: 1}
		const result = await setDoc(docuRef, data, { merge: true });
		return result;
	} catch (error) {
		console.log(error);
	}
	/* const result = await updateDoc(docuRef, { priority: 4 }); */
}
