import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [segundos, setSegundos] = useState(0);
	useEffect(() => {
		let idInterval = setInterval(
			() => setSegundos(segundosPrev => segundosPrev + 1),
			300
		);
	}, []);
	// clearInterval(idInterval);
	return (
		<Container className="bg-dark text-white">
			<Row className="justify-content-center">
				<Col className="p-2" xs={2}>
					<i className="fas fa-clock"></i>
				</Col>
				<Col className="p-2" xs={1}>
					{Math.floor(segundos / 100000) % 10}
				</Col>
				<Col className="p-2" xs={1}>
					{Math.floor(segundos / 10000) % 10}
				</Col>
				<Col className="p-2" xs={1}>
					{Math.floor(segundos / 1000) % 10}
				</Col>
				<Col className="p-2" xs={1}>
					{Math.floor(segundos / 100) % 10}
				</Col>
				<Col className="p-2" xs={1}>
					{Math.floor(segundos / 10) % 10}
				</Col>
				<Col className="p-2" xs={1}>
					{segundos % 10}
				</Col>
			</Row>
		</Container>
	);
}
