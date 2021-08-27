import { Container, Row, Col } from 'react-bootstrap';
import Heading from './sub-components/Heading';
import SkillsItem from './sub-components/SkillsItem';

const Skills = () => {
	return (
		<section className='skills'>
			<Container>
				<Heading text='skills' />
				<h4 className='skill-heading'>Languages</h4>
				<Row>
					<Col>
						<SkillsItem name='HTML' value='92' />
						<SkillsItem name='CSS' value='90' />
						<SkillsItem name='JavaScript' value='80' />
					</Col>
					<Col>
						<SkillsItem name='PHP' value='65' />
						<SkillsItem name='Pyton' value='40' />
						<SkillsItem name='C#' value='10' />
					</Col>
				</Row>

				<h4 className='skill-heading mt-5 pt-4'>Frameworks</h4>
				<Row>
					<Col>
						<SkillsItem name='Bootstrap' value='90' />
						<SkillsItem name='TailWind-CSS' value='10' />
					</Col>
					<Col>
						<SkillsItem name='React.js' value='60' />
						<SkillsItem name='Node.js' value='10' />
					</Col>
				</Row>

				<h4 className='skill-heading mt-5 pt-4'>Database</h4>
				<Row>
					<Col>
						<SkillsItem name='MySqli' value='80' />
					</Col>
					<Col>
						<SkillsItem name='MongoDB' value='10' />
					</Col>
				</Row>

				<h4 className='skill-heading mt-5 pt-4'>Utility</h4>
				<Row>
					<Col>
						<SkillsItem name='GIT' value='80' />
						<SkillsItem name='Npm' value='60' />
					</Col>
					<Col>
						<SkillsItem name='Netlify' value='48' />
						<SkillsItem name='Chrome Dev Tool' value='70' />
					</Col>
				</Row>

				<h4 className='skill-heading mt-5 pt-4'>Others</h4>
				<Row>
					<Col>
						<SkillsItem name='Wordpress' value='75' />
						<SkillsItem name='Adobe Photoshop' value='62' />
						<SkillsItem name='Adobe Illustrator' value='60' />
					</Col>
					<Col>
						<SkillsItem name='Adobe After Effects' value='48' />
						<SkillsItem name='Blender 3D' value='50' />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Skills;
