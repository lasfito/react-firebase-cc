const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.crearDocu = functions.https.onRequest((req, res) => {
	return admin
		.firestore()
		.collection('cloud')
		.add({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
		})
		.then(() => {
			res
				.status(200)
				.send({ status: `documento creado para ${req.body.nombre}` });
		})
		.catch(err => {
			res.status(500).send({ status: 'error', err });
		});
});

exports.addCustomClaim = functions.https.onRequest((req, res) => {
	return admin
		.auth()
		.setCustomUserClaims(req.body.uid, {
			admin: true,
		})
		.then(() => {
			res.status(200).send({ status: 'ok' });
		})
		.catch(err => {
			res.status(500).send({ status: 'error', err });
		});
});

exports.cadaDosMinutos = functions.pubsub
	.schedule('every 2 minutes')
	.onRun(context => {
		console.log('cron job ejecutado');
		functions.logger.info('cron job ejecutado, paps');
		return null;
	});
