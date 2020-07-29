import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import 'holderjs';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import Unsplash from 'react-unsplash-wrapper'
import { LinkContainer } from 'react-router-bootstrap'

const HeaderImage = () => (
	<Unsplash width='200' height='200' style={{ 'borderRadius': '50%' }} />
)

/**
 * So this is actually just gonna have a few features
 * 
 * - The card from the main page as the jumbotron
 * - Extracted tag list
 * - The markdown file, with ally headers and subheaders tossed into an accordion
 */
const pre_sheet_data = {
	title: 'The Three Gods',
	summary: 'Theres three of them.',
	image: 'fuck_you',
	tags: ['a', 'b', 'c'],
	content:
		`# Articuno
A bird made out of ice.

# Zapdos
A bird made out of light.

# Moltres
A bird made out of fire.`,
}

const Page = ({create}) => {
	const sheet_data=create?{}:pre_sheet_data
	return (
	<main>
		<Container >
			<Jumbotron>
				<Row>
					<Col>
						<h1><input placeholder='Title' type="text" style={{ 'width': '100%' }} value={sheet_data.title} /></h1>
						<p><input placeholder='Tags' type="text" style={{ 'width': '100%' }} /></p>
						<p><input placeholder='Summary' type="text" style={{ 'width': '100%' }} /></p>
					</Col>
					<Col md="auto">
						<HeaderImage />
						&nbsp;
						<LinkContainer to="/view" style={{ 'width': '100%' }}>
							<Button>Save</Button>
						</LinkContainer>
					</Col>
				</Row>
			</Jumbotron>
			<Row>
				<Col>
					<Editor initialValue={sheet_data.content} />
				</Col>
			</Row>
			<Row>
				<Col>
					<LinkContainer to="/view" style={{ 'width': '100%' }}>
						<Button>Save</Button>
					</LinkContainer>
				</Col>
			</Row>
		</Container>
	</main>
)}

export default Page;
