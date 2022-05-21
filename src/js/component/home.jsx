import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);
	const [isX, setIsX] = useState(false);
	const [nuevatarea, setNuevatarea] = useState("");
	const handleKeyEnter = (e) => {
		let newTodo = [...todo, nuevatarea];
		if (e.key === "Enter") {
			setTodo(newTodo);
			setNuevatarea("");
		}
	};

	const borrado = (indice) => {
		const Ntodo = todo.filter((item, index) => indice !== index);
		setTodo(Ntodo);
	};

	return (
		<div>
			<div style={{ marginTop: "10px" }}>
				<h1 className="text-center">to dos</h1>
			</div>
			<div>
				<input
					type="text"
					placeholder="to do"
					value={nuevatarea}
					onChange={(e) => {
						setNuevatarea(e.target.value);
					}}
					onKeyDown={handleKeyEnter}></input>
			</div>
			<ul className="list-group">
				{todo.map((item, index) => (
					<li
						onMouseOver={() => setIsX(true)}
						onMouseLeave={() => setIsX(false)}
						key={index}
						className="list-group-item"
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						{item}
						{isX && (
							<button
								className="btn btn-danger"
								onClick={() => borrado(index)}>
								X
							</button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
