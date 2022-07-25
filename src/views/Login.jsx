import React from 'react';
import loginWithEmailPassword from '../functions/loginWithEmailPassword';
import registerUser from '../functions/registerUser';
import loginWithGoogle from '../functions/loginWithGoogle';

function Login() {
	const [isLoggingIn, setIsLoggingIn] = React.useState(false);

	async function submitHandler(e) {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;

		if (isLoggingIn) {
			await loginWithEmailPassword(username, password);
		} else {
			await registerUser(username, password);
		}
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="flex flex-col ">
				<h1 className="text-3xl font-bold">
					{isLoggingIn ? 'Inicia sesión' : 'Regístrate'}
				</h1>
				<form className="flex flex-col" onSubmit={submitHandler}>
					<label for="username">Username</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						id="username"
					/>
					<label for="password">Password</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="password"
						id="password"
					/>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						{isLoggingIn ? 'Acceder' : 'Regístrate'}
					</button>
				</form>
				<button
					className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={loginWithGoogle}
				>
					{' '}
					Accede con Google
				</button>
				<button
					className="underline"
					onClick={() => setIsLoggingIn(!isLoggingIn)}
				>
					{isLoggingIn
						? '¿No tienes cuenta? Crea una'
						: '¿Ya tienes cuenta? Accede'}
				</button>
			</div>
		</div>
	);
}

export default Login;
