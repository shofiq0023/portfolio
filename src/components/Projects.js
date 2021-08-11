import { Col, Container, Row } from 'react-bootstrap';
import Heading from './sub-components/Heading';
import Project from './sub-components/Project';
import ImageBite from '../image/project-image/bite.png';
import ImagePopcorn from '../image/project-image/popcorn.png';
import ImageInventory from '../image/project-image/inventory-manager.png';
import ImageIronsports from '../image/project-image/ironsports.png';
import imageNicl from '../image/project-image/nicl.png';
import ImageSurveycare from '../image/project-image/surveycare.png';
import imageSwitch from '../image/project-image/switch.png';

const Projects = () => {
	const projects = [
		{
			image: `${ImageBite}`,
			name: 'Bite',
			desc: 'Food search app where you can search for food using recipe',
			github: 'https://github.com/shofiq0023/bite',
			website: 'https://shofiq0023.github.io/bite/',
			technology: ['Bootstrap', 'JavaScript', 'API'],
			id: 1,
		},
		{
			image: `${ImagePopcorn}`,
			name: 'Popcorn',
			desc: 'Search movies by title and see the ratings from IMDB, Rotten Tomatoes',
			github: 'https://github.com/shofiq0023/popcorn',
			website: 'https://shofiq0023.github.io/popcorn/',
			technology: ['Bootstrap', 'JavaScript', 'API'],
			id: 2,
		},
		{
			image: `${ImageInventory}`,
			name: 'Inventory Manager',
			desc: 'Add items to your inventory with price and see the total amount',
			github: 'https://github.com/shofiq0023/inventory-manager',
			website: 'https://shofiq0023.github.io/inventory-manager/',
			technology: ['CSS', 'JavaScript', 'Browser Storage'],
			id: 3,
		},
		{
			image: `${imageSwitch}`,
			name: 'Switch',
			desc: 'A HTML, CSS project done with jQuery plugins. Converted from a PSD file',
			github: 'https://github.com/shofiq0023/switch',
			website: 'https://shofiq0023.github.io/switch/',
			technology: ['HTML', 'CSS', 'jQuery'],
			id: 4,
		},
		{
			image: `${ImageIronsports}`,
			name: 'Ironsports BD',
			desc: 'A live ecommerce website where you can buy various kind of gym items',
			website: 'https://ironsportsbd.com/',
			technology: ['PHP', 'Wordpress'],
			id: 5,
		},
		{
			image: `${imageNicl}`,
			name: 'NICL',
			desc: 'Bank landing page website of National Ideal Commerce Limited',
			website: 'https://ironsportsbd.com/',
			technology: ['PHP', 'Wordpress', 'Elementor'],
			id: 6,
		},
		{
			image: `${ImageSurveycare}`,
			name: 'Surveycare BD',
			desc: 'A ecommerce website where you can but digital services',
			website: 'https://ironsportsbd.com/',
			technology: ['PHP', 'Wordpress', 'Elementor', 'WooCommerce'],
			id: 7,
		},
	];
	return (
		<section className='projects'>
			<Container>
				<Heading text='My projects' />
				<Row>
					{projects.map((project) => (
						<Col md='6' lg='4' key={project.id}>
							<Project
								image={project.image}
								name={project.name}
								desc={project.desc}
								github={project.github}
								website={project.website}
								tech={project.technology}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
