import { db } from '../firebase/credenciales';
import {
	collection,
	query,
	where,
	orderBy,
	limit,
	getDocs,
} from 'firebase/firestore';

export default async function searchPendiente(string) {
	const collectionRef = collection(db, 'pendiente');

	// crear query

	// consultas compuestas son de tipo AND
	const queryDescription = query(
		collectionRef,
		where('description', '==', string)
	);

	const queryContact = query(collectionRef, where('contact', '==', string));

	const queryPriority = query(collectionRef, where('priority', '==', string));

	// traer los documentos que cumplan con query
	const docusCifrados = await Promise.all([
		getDocs(queryDescription),
		getDocs(queryContact),
		getDocs(queryPriority),
	]);

	const allResults = [];
	docusCifrados.forEach(query => {
		query.docs.forEach(doc => allResults.push(doc.data()));
	});

	return allResults;

	/* const docus = docusCifrados.docs.map(d => d.data()); */
	/* return docusCifrados; */
}
