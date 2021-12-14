import { useEffect, useState } from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardTitle,
	CardBody,
	Button
} from 'reactstrap';
import { ICharacter } from './models/characterModel';
import { getCharacters, saveCharacters } from './services/characterService';
import Ver from './Ver';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const [getData, setGetData] = useState<boolean>(false);

	useEffect(() => {
		const getElements = async () => {
			const data = await getCharacters();
			setCharacters([...data]);
			setGetData(true);
		};
		getElements();
	}, []);

	const onSave = async (id: any) => {
		try {
			await saveCharacters(characters[id]);
		} catch (error) {}
	};

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Container>
						<Row>
							{!getData ? (
								<h1>Cargando...</h1>
							) : (
								<>
									<Row>
										<h1 className="text-center text-primary">
											Rick And Morty Characters
										</h1>
									</Row>
									<Row>
										{characters.map((v, k) => {
											return (
												<Col style={{ marginTop: '20px' }} key={k}>
													<Card style={{ width: '18rem' }}>
														<CardImg variant="top" src={v.image} />
														<CardBody>
															<CardTitle className="text-center text-primary">
																<b>{v.name}</b>
															</CardTitle>
															<CardText>
																<b>Género:</b>{' '}
																{v.gender === 'Male' ? 'Masculino' : 'Femenino'}
																<br />
																<b>Especie:</b> {v.species}
															</CardText>
															<Button
																color="primary"
																block
																onClick={() => onSave(k)}
															>
																Guardar
															</Button>
														</CardBody>
													</Card>
												</Col>
											);
										})}
									</Row>
								</>
							)}
						</Row>
					</Container>
				</Route>
				<Route exact path="/data">
					<Ver />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
