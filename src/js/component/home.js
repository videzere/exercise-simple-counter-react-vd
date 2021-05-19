import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

//create your first component
export function Home() {
	const [segundos, setSegundos] = useState(0);
	useEffect(() => {
		let idInterval = setInterval(
			() => setSegundos(segundosPrev => segundosPrev + 1),
			1000
		);
	}, []);
	// clearInterval(idInterval);
	return (
		<Container className="contstyle text-white">
			<Row className="d-flex flex-row justify-content-center p-2">
				<Col className="colstyle" xs={2}>
					<i className="m-auto text-white far fa-clock fa-flip-horizontal"></i>
				</Col>
				<Col className="colstyle" xs={1}>
					{Math.floor(segundos / 100000) % 10}
				</Col>
				<Col className="colstyle" xs={1}>
					{Math.floor(segundos / 10000) % 10}
				</Col>
				<Col className="colstyle" xs={1}>
					{Math.floor(segundos / 1000) % 10}
				</Col>
				<Col className="colstyle" xs={1}>
					{Math.floor(segundos / 100) % 10}
				</Col>
				<Col className="colstyle" xs={1}>
					{Math.floor(segundos / 10) % 10}
				</Col>
				<Col className="colstyle" xs={1}>
					{segundos % 10}
				</Col>
			</Row>
		</Container>
	);
}
