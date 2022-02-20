import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

let initialForm = {
	username: "",
	email: "",
	password: "",
};

const PageDetailsUser = () => {
	const { user } = useContext(AuthContext);
	const { form, handleChange } = useForm(initialForm);
	const navigate = useNavigate();

	let { id } = user; 
	let url = `/usuario/usuario/${id}/`;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let response = await fetch(url, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(form)
			})
			if (!response.ok) {
				let error = {
					err: true,
					status: response.status || "00",
					statusText: response.statusText || "Opps, ha ocurrido un error",
				};
				throw error;
			}
			let json = await response.json();
			console.log(json);
		} catch (error) {
			
		}
	};

	const deleteAccount = async () => {
		try {
			let response = await fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(form)
			});
			if (!response.ok) {
				let error = {
					err: true,
					status: response.status || "00",
					statusText: response.statusText || "Opps, ha ocurrido un error",
				};
				throw error;
			}
			let json = await response.json();
			console.log(json);
			navigate('/');
		} catch (error) {
			
		}
	};

	return (
		<section className="w-75">
			<h1 style={{ textAlign: "center", fontSize: "1.4rem" }}>
				Detalles de usuario
			</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="username" className="htmlF-label">
						Username
					</label>
					<input
						type="text"
						id="username"
						name="username"
						className="form-control"
						value={form.username}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="htmlF-label">
						Correo electronico
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="form-control"
						value={form.email}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Contraseña
					</label>
					<input
						type="password"
						name="password"
						id="password"
						className="form-control"
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
		</section>
	);
};

export default PageDetailsUser;
