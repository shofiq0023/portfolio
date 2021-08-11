import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaBriefcase, FaGithub } from 'react-icons/fa';
import myImage from '../image/my-pic.png';
import CustomButton from './sub-components/CustomButton';
import HeaderAddress from './sub-components/HeaderAddress';

const Header = () => {
	return (
		<section className='header'>
			<Container>
				<Row className='align-items-center'>
					<Col sm md='6' className='text-center my-image-mobile'>
						<Image src={myImage} fluid className='my-pic' />
					</Col>
					<Col sm md='6'>
						<h2>Shofiqul Islam</h2>
						<h5 className='mb-4'>Web developer | Tech Enthusiast</h5>

						<HeaderAddress
							icon={<FaLinkedin />}
							name='Linkedin'
							link='https://www.linkedin.com/in/shofiqul-islam-562378179'
							linkName='linkedin.com/shofiqulislam'
						/>
						<HeaderAddress
							icon={<FaTwitter />}
							name='Twitter'
							link='https://twitter.com/shofiqul0023'
							linkName='twitter.com/shofiqulislam'
						/>
						<HeaderAddress
							icon={<FaGithub />}
							name='Github'
							link='https://github.com/shofiq0023'
							linkName='github.com/shofiq0023'
						/>
						<HeaderAddress
							icon={<FaBriefcase />}
							name='Fiverr'
							link='https://www.fiverr.com/shofiq0023'
							linkName='fiverr.com/shofiq0023'
						/>
						<CustomButton text='see personal information' link='about' />
					</Col>
					<Col sm md='6' className='text-center my-image'>
						<Image src={myImage} fluid className='my-pic' />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Header;
