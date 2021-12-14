import { useEffect, useState } from 'react';
import {
	Card,
	CardBody,
	CardImg,
	CardTitle,
	Col,
	Container,
	Row
} from 'reactstrap';
import { getDBCharacters } from './services/characterService';

const Ver = () => {
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const getElements = async () => {
			const data = await getDBCharacters();
			setData([...data]);
		};
		getElements();
	}, []);

	return (
		<Container>
			<Row>
				<h1 className="text-center text-primary">
					Personajes guardados en la base de datos
				</h1>
			</Row>
			<Row>
				{data.map((v, k) => {
					return (
						<Col style={{ marginTop: '20px' }} key={k}>
							<Card style={{ width: '18rem' }}>
								<CardBody>
									<CardTitle className="text-center text-primary">
										<b>{v.name}</b>
									</CardTitle>
								</CardBody>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Ver;
