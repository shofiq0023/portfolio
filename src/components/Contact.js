import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import ContactInfo from './sub-components/ContactInfo';
import EmailForm from './sub-components/EmailForm';
import Heading from './sub-components/Heading';

const Contact = () => {
	return (
		<section className='contact'>
			<Container>
				<Heading text='Contact' />
				<Row>
					<Col lg>
						<ContactInfo
							icon={<FaEnvelope />}
							text='shofiqulislam0023@gmail.com'
						/>
					</Col>
					<Col lg>
						<ContactInfo icon={<FaMobileAlt />} text='+880 1648-879896' />
					</Col>
					<Col lg>
						<ContactInfo
							icon={<FaMapMarkerAlt />}
							text='Mirpur, Dhaka, Bangladesh'
						/>
					</Col>
				</Row>
				<Heading text='Get in Touch' />
				<EmailForm />
			</Container>
		</section>
	);
};

export default Contact;
