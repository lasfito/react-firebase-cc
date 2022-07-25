import { storage } from '../firebase/credenciales';
import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage';

export default async function uploadFileToArchivosFolder(file) {
	try {
		// Create a storage reference from our storage service
		const fileRef = ref(storage, `archivos/${file.name} `);
		await uploadBytes(fileRef, file);
		const url = await getDownloadURL(fileRef);
		return url;
	} catch (error) {
		console.log(error);
	}
}
