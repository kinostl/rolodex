import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Navigation from '../Nav';
import 'holderjs';

import { Viewer } from '@toast-ui/react-editor';
import Unsplash from 'react-unsplash-wrapper'
import { LinkContainer } from 'react-router-bootstrap'

/**
 * So this is actually just gonna have a few features
 * 
 * - The card from the main page as the jumbotron
 * - Extracted tag list
 * - The markdown file, with ally headers and subheaders tossed into an accordion
 */
const sheet_data = {
	title: 'The Three Gods',
	summary: 'Theres three of them.',
	image: 'fuck_you',
	tags: ['legendary', 'bird', 'monsters'],
	content: 
`# Articuno
A bird made out of ice.

# Zapdos
A bird made out of light.

# Moltres
A bird made out of fire.`,
}

const HeaderImage = ()=>(
	<Unsplash width='200' height='200' style={{'borderRadius':'50%'}}/>
)

const Page = () => (
	<main>
		<Container >
			<Jumbotron>
				<Row>
					<Col>
						<h1>{sheet_data.title}</h1>
						<p>{sheet_data.summary}</p>
					</Col>
					<Col md="auto">
						<HeaderImage/>
						&nbsp;
						<LinkContainer to="/edit" style={{ 'width': '100%' }}>
							<Button>Edit</Button>
						</LinkContainer>
					</Col>
				</Row>
			</Jumbotron>
			<Row>
				<Col>
					{sheet_data.tags.map(
						(tag) =>
							(<span>
								<Badge variant="info">{tag}</Badge>
								{' '}
							</span>)
					)}
				</Col>
			</Row>
			<Row>
				<Col>
					<Viewer initialValue={sheet_data.content} />
				</Col>
			</Row>
		</Container>
	</main>
);

export default Page;
