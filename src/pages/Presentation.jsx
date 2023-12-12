import { GrLinkedinOption, } from 'react-icons/gr';
import { FaMediumM, FaInstagram } from "react-icons/fa";
import { FiGithub } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";
import { SiGumroad, SiPlatzi, SiSpotify } from "react-icons/si";
import { presentation } from '../assets/utils/Texts';
import CartoonCardOutlined from '../components/CartoonCardOutlined';
import Blobs from '../components/Blobs';

const links = [
	{
		name: 'Medium',
		link: 'https://medium.com/@HectorSaldes',
		Icon: FaMediumM,
		background: 'bg-black',
		color: 'white',
	},
	{
		name: 'GitHub',
		link: 'https://github.com/HectorSaldes',
		Icon: FiGithub,
		background: 'bg-black',
		color: 'white',
	},
	{
		name: 'Twitter',
		link: 'https://twitter.com/hectorsaldes',
		Icon: FaXTwitter,
		background: 'bg-black',
		color: 'white',
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/hector-salda%C3%B1a-espinoza-ab3977219/',
		Icon: GrLinkedinOption,
		background: 'bg-[#0077b5]',
		color: 'white',
	},
	{
		name: 'Gumroad',
		link: 'https://hectorsaldes.gumroad.com/',
		Icon: SiGumroad,
		background: 'bg-[#ff90e8]',
		color: 'black',
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/hectorsaldess/',
		Icon: FaInstagram,
		background: 'bg-[#c13584]',
		color: 'white',
	},
	{
		name: 'Platzi',
		link: 'https://platzi.com/p/HectorSaldes/',
		Icon: SiPlatzi,
		background: 'bg-[#98ca3f]',
		color: 'black',
	},
	{
		name: 'Spotify',
		link: 'https://open.spotify.com/user/b8okfs7cy8iaxt1y6jyhwix8f',
		Icon: SiSpotify,
		background: 'bg-[#1db954]',
		color: 'white',
	},
];

export default function Presentation({ lang }) {
	return (
		<div id='me' className='container mx-auto py-5 px-5 dark:text-white text-center'>
			<Blobs />
			<div className='lg:flex lg:h-screen lg:items-center'>
				<div>
					<div className='text-lg lg:text-2xl font-medium text-justify lg:text-center'>
						<p>{presentation[0][lang]}</p> <br/>
						<h1 className='text-5xl lg:text-7xl font-bold lg:font-extrabold'>Hector Saldaña Espinoza</h1> <br/>
						<p>{presentation[1][lang]}</p> <br/>
						<p>{presentation[2][lang]}</p> <br/>
						<p>{presentation[3][lang]}</p> <br/>
					</div>
					<div className='mt-8 mx-auto w-full lg:w-1/2'>
						<div className='flex flex-wrap justify-between'>
							{links.map((link, index) => (
								<a href={link.link} target='_blank' rel='noopener noreferrer'>
									<CartoonCardOutlined Items={() => (<link.Icon color={link.color} size='40' />)} Background={link.background} />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
