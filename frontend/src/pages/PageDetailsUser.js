import CardProfileStudent from "../components/Card/CardProfileStudent";

const PageDetailsUser = () => {
<<<<<<< HEAD
  return (
    <section className="container">
      <div className="row align-items-stretch my-5">
        <div className="col">
          <CardProfileStudent />
        </div>
        <div className="col">
          {/* Componente details student */}
          <h5>Detalles de estudiente</h5>
        </div>
      </div>
    </section>
  );
=======
	const { showPassword, toggle } = useShowPassword(false)
	const { user } = useContext(AuthContext);
	const { form, handleChange } = useForm(initialForm);
	
	let { id } = user;
	let data=JSON.parse(window.localStorage.getItem('token'));
	console.log(data);
	let userId=data.user.id;
	console.log(userId);
	let url = `/usuario/usuario/${userId}/`;
	console.log(user);
	console.log(id);
	// FUNCION PARA ACTUALIZAR LA INFORMACION DE UN USARIO
	const handleUpdateAccount = (e) => {
		e.preventDefault();

		let options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: form
		}

		$ajax().PUT(url, options)
			.then((response) => {
				console.log(response)
			})
			.catch(err => console.log(err));
	};

	// FUNCION PARA ELIMINAR LA CUENTA DE UN USUARIO
	const deleteAccount = (e) => {
		e.preventDefault();
		let options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: user
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
			<div className="container">
				<h1 style={{ textAlign: "center", fontSize: "1.4rem" }}>
					Detalles de usuario
				</h1>
				<form onSubmit={handleUpdateAccount}>
					<div className="mb-3 inner">
						<i className='right-icon'>
							<FaIcon.FaUser />
						</i>
						<Input
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
						<Input
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
						<i className='right-icon' onClick={toggle}>
							{ showPassword ? <FaIcon.FaEye /> : <FaIcon.FaEyeSlash />}
						</i>
						<Input
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
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
};

export default PageDetailsUser;
