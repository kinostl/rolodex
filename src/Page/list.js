import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigation from '../Nav';
import 'holderjs';
import Badge from 'react-bootstrap/Badge';
import { LinkContainer } from 'react-router-bootstrap'
import Unsplash from 'react-unsplash-wrapper'

const big_arr = new Array(24).fill(0);
const sheet_data = {
	title: 'The Three Gods',
	summary: 'Theres three of them.',
	image: 'fuck_you',
	tags: ['legendary', 'bird', 'monsters'],
}

const HeaderImage = ()=>(
	<Unsplash width='300' height='150'/>
)

const Directory = () => (
	<main>
		<Container fluid>
			<Row className="justify-content-around">
				<Card style={{ width: '300px', margin: '1rem' }}>
					<Card.Img variant="top" as={HeaderImage} />
					<Card.Body>
						<Card.Title>{sheet_data.title}</Card.Title>
						<Card.Text>{sheet_data.summary}</Card.Text>
						<LinkContainer to="/view">
							<Button variant="primary">Go somewhere</Button>
						</LinkContainer>
						<Card.Text>
							{sheet_data.tags.map(
								(tag) =>
									(<span>
										<Badge variant="info">{tag}</Badge>
										{' '}
									</span>)
							)}
						</Card.Text>
					</Card.Body>
				</Card>
				{big_arr.map(i => (
						<Card style={{ width: '300px', margin: '1rem' }}>
							<Card.Img variant="top" as={HeaderImage} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
    </Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
				))}
			</Row>
		</Container>
	</main>
);
export default Directory;
