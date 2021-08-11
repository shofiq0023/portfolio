import { Container, Row, Col } from 'react-bootstrap';
import Education from './sub-components/Education';
import Heading from './sub-components/Heading';
import Info from './sub-components/Info';

const About = () => {
	return (
		<section className='about'>
			<Container>
				<Heading text='Personal Information' />
				<Row>
					<Col>
						<Info infoHead='Nationality' text='Bangladeshi' />
						<Info infoHead='Address' text='151/2-B, South Pirerbag' />
						<Info infoHead='Country' text='Bangladesh' />
						<Info infoHead='Language' text='Bangla (Native), English' />
					</Col>
					<Col>
						<Info infoHead='Email' text='shofiqulislam0023@gmail.com' />
						<Info infoHead='Phone' text='+880 16488-79896' />
					</Col>
				</Row>

				<Heading text='Educational Qualification' />
				<Row>
					<Col>
						<Education
							title='Diploma In Engineering'
							department='Computer Technology'
							from='Aug 2017'
							to='Present'
							institute='Dhaka Polytechnic Institute'
						/>
						<Education
							title='Secondary School Certificate'
							department='Science'
							from='Jan 2016'
							to='Feb 2017'
							institute='HF Model High School'
						/>
					</Col>
					<Col>
						<Education
							title='Professional Web Design'
							department='Web Design'
							from='November 2018'
							to='March 2019'
							institute='UY Lab'
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
