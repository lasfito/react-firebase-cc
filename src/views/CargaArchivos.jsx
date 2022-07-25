import React from 'react';
import uploadFileToArchivosFolder from '../functions/uploadFileToArchivosFolder';

function CargaArchivos() {
	function archivoHandler(e) {
		e.preventDefault();
		const file = e.target.archivo.files[0];
		uploadFileToArchivosFolder(file);
	}

	return (
		<div>
			<form onSubmit={archivoHandler}>
				<input type="file" name="archivo" id="archivo" />
				<button type="submit">Carga tu archivo</button>
			</form>
			<img
				src={
					'https://firebasestorage.googleapis.com/v0/b/codigo-facilito-lasfito.appspot.com/o/carpeta2%2Fsubcarpeta2%2Farchivotest.png?alt=media&token=81fd02c5-0a09-4016-8c9f-36221a197d7a'
				}
				alt="Cody is a cat"
			/>
		</div>
	);
}

export default CargaArchivos;
