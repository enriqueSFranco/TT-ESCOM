import { useForm } from "../hooks/useForm";
import { useShowPassword } from "../hooks/usePassword";
import { $ajax } from "../utils/$ajax";
import * as MdIcon from "react-icons/md";
import * as FaIcon from "react-icons/fa";

let initialForm = {
	username: "",
	email: "",
	password: "",
};

const PageDetailsUser = () => {
	const { showPassword, toggle } = useShowPassword(false);
	const { form, handleChange } = useForm(initialForm);
	
	let data = JSON.parse(window.localStorage.getItem('token')); 
	let userId = data.user.id;
	let url = `/usuario/usuario/${userId}/`;
	
	// FUNCION PARA ACTUALIZAR LA INFORMACION DE UN USARIO
	const handleUpdateAccount = (e) => {
		e.preventDefault();
		let options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: form
		};
		$ajax().PUT(url, options)
			.then((response) => {
				if (!response.err)
					console.log('datos actualizado correctamente');
				else {
					window.alert('Campos vacios...');
					console.log(response)
				}
			})
			.catch(err => {
				// setResponse(true);
				console.log(err);
			});
	};

	// FUNCION PARA ELIMINAR LA CUENTA DE UN USUARIO
	const deleteAccount = (e) => {
		e.preventDefault();
		let options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: data.user
		};
		$ajax().DEL(url, options)
			.then((response) => {
				if (!response.err)
					console.log('cuenta eliminada', response);
			})
			.catch((err) => console.log(err));
	};

	return (
		<section>
			{/* <h1>{response ? <span>true</span> : <span>false</span>}</h1> */}
			<div className="container">
				<h1 style={{ textAlign: "center", fontSize: "1.4rem" }}>
					Detalles de usuario
				</h1>
				<form onSubmit={handleUpdateAccount}>
					<div className="mb-3 inner">
						<i className='right-icon'>
							<FaIcon.FaUser />
						</i>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Nuevo nombre de usuario"
							className="input"
							value={form.username}
							onChange={handleChange}
						/>
				
					</div>
					<div className="mb-3 inner">
						<i className='right-icon'>
							<MdIcon.MdEmail />
						</i>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Nuevo correo electronico"
							className="input"
							value={form.email}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3 inner">
					<i className='right-icon eye-password' onClick={toggle}>
							{ showPassword ? <FaIcon.FaEye /> : <FaIcon.FaEyeSlash />}
						</i>
						<input
							type={showPassword ? "type" : "password"}
							name="password"
							id="password"
							placeholder="Nueva contraseña"
							className="input"
							value={form.password}
							onChange={handleChange}
						/>
					</div>
					<div className="d-grid">
						<button type="submit" className="btn btn-primary">
							Actualizar informacion
						</button>
					</div>
					<br />
				</form>
					<div className="d-grid">
						<button type="submit" className="btn btn-primary" onClick={deleteAccount}>
							Eliminar cuenta
						</button>
					</div>
			</div>
		</section>
	);
};

export default PageDetailsUser;
