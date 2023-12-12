import ReactGA from "react-ga4";
import { menu, about } from '../assets/utils/Texts';
import ME from '../assets/img/ME.jpg';
import CartoonImageOutlined from '../components/CartoonImageOutlined';
import CartoonCardOutlined from '../components/CartoonCardOutlined';
import { SiAndroidstudio, SiCanva, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNetlify, SiNodedotjs, SiNotion, SiDjango, SiSpotify, SiSpring, SiTailwindcss, SiUbuntu, SiUnsplash, SiVisualstudiocode, SiOracle, SiPostgresql, SiMysql, SiVuetify, SiGumroad } from 'react-icons/si';
import { FaBootstrap, FaReact, FaVuejs, FaMediumM, FaPython } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';

const APPS = [
	// Dev
	{ Icon: SiOracle, bg: 'bg-[#ed1d24]', color: '#fff' },
	{ Icon: SiNetlify, bg: 'bg-[#2f393b]', color: '#00beae' },
	// Languages
	{ Icon: SiHtml5, bg: 'bg-[#f1491c]', color: 'white' },
	{ Icon: FaReact, bg: 'bg-[#202020]', color: '#5ccfee' },
	{ Icon: FaVuejs, bg: 'bg-[#08c384]', color: '#fff' },
	{ Icon: SiJavascript, bg: 'bg-[#202020]', color: 'yellow' },
	{ Icon: SiNodedotjs, bg: 'bg-[#303030]', color: '#7aa61b' },
	{ Icon: DiJava, bg: 'bg-[#ed2025]', color: 'white' },
	{ Icon: SiSpring, bg: 'bg-[#219945]', color: 'white' },
	{ Icon: FaPython, bg: 'bg-[#3c77a8]', color: '#fff' },
	{ Icon: SiDjango, bg: 'bg-[#113527]', color: '#fff' },
	// DB
	{ Icon: SiPostgresql, bg: 'bg-[#396c94]', color: '#fff' },
	{ Icon: SiMongodb, bg: 'bg-[#1e2f39]', color: '#108b4b' },
	{ Icon: SiMysql, bg: 'bg-[#08678e]', color: '#f29418' },
	// Frameworks CSS
	{ Icon: SiFigma, bg: 'bg-[#a55eff]', color: '#fff' },
	{ Icon: SiTailwindcss, bg: 'bg-[#151c2c]', color: '#14b4c0' },
	{ Icon: FaBootstrap, bg: 'bg-[#7a11f7]', color: 'white' },
	{ Icon: SiVuetify, bg: 'bg-[#1d9af6]', color: 'white' },
	// APPS
	{ Icon: SiGit, bg: 'bg-[#000]', color: '#e5392d' },
	{ Icon: SiUbuntu, bg: 'bg-[#000]', color: '#df4916' },
	{ Icon: SiNotion, bg: 'bg-[#fff]', color: 'black' },
	{ Icon: SiGithub, bg: 'bg-[#fff]', color: 'black' },
	{ Icon: SiAndroidstudio, bg: 'bg-[#fff]', color: '#4285f4' },
	{ Icon: SiVisualstudiocode, bg: 'bg-[#000]', color: '#0090d9' },
	{ Icon: SiCanva, bg: 'bg-[#26bec9]', color: 'white' },
	{ Icon: SiSpotify, bg: 'bg-[#000]', color: '#1ed760' },
	{ Icon: FaMediumM, bg: 'bg-[#000]', color: 'white' },
	{ Icon: SiUnsplash, bg: 'bg-[#000]', color: 'white' },
	{ Icon: SiGumroad, bg: 'bg-[#ff93e9]', color: 'black' },

]

export default function About({ lang }) {
	ReactGA.send({ hitType: "pageview", page: "/#about" });
	return (
		<div id='about' className='container mx-auto py-5 px-5 dark:text-white'>
			<div className='lg:flex lg:min-h-screen lg:items-center'>
				<div>
					<p className='text-2xl lg:text-3xl font-bold'>{menu[0][lang]}</p>
					<div className='flex flex-col lg:flex-row text-lg lg:text-xl text-justify'>
						<div className='w-full lg:w-1/2'>
							<p dangerouslySetInnerHTML={{ __html: about[0][lang] }} />
						</div>
						<div className='w-full lg:w-1/2 p-6'>
							<div className='w-full h-full'>
								<div className='flex justify-center'>
									<div>
										<div className='w-1/2 mx-auto'><CartoonImageOutlined Items={() => (<img src={ME} alt='Me in real life' className='rounded-full' />)}/></div>
										<p className='mt-3' dangerouslySetInnerHTML={{ __html: about[1][lang] }} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<p className='my-5 text-xl font-bold uppercase'>{about[2][lang]}</p>
					<div className='flex justify-around flex-wrap text-center'>
						{APPS.map((app, index) => (
							<CartoonCardOutlined Items={() => (<app.Icon color={app.color} size='40' />)} Background={app.bg} key={index} />))}
					</div>
				</div>
			</div>
		</div>
	);
}
