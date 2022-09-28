import { menu, about } from '../assets/utils/Texts';
import MED from '../assets/img/MED.png';
import MER from '../assets/img/MER.png';
import CartoonImageOutlined from '../components/CartoonImageOutlined';

export default function About({ lang }) {
	return (
		<div id='about' className='container mx-auto py-5 px-5 dark:text-white'>
			<div className='lg:flex lg:min-h-screen lg:items-center'>
				<div>
					<p className='text-2xl lg:text-3xl font-bold'>{menu[0][lang]}</p>
					<div className='flex flex-col lg:flex-row'>
						<div className='w-full lg:w-1/2 text-lg lg:text-xl text-justify'>
							<p>{about[0][lang]}
								<span
									className='font-bold dark:text-yellow-300 duration-1000'>Hector Saldaña Espinoza</span>
								{about[1][lang]}
							</p>
							<br />
							<p>{about[2][lang]}</p>
							<br />
							<p>
								{about[3][lang]}
								<span className='font-bold duration-1000'>Notion</span>,{' '}
								<span className='font-bold dark:text-yellow-600 duration-1000'>LucidChart</span>,{' '}
								<span className='font-bold dark:text-purple-600 duration-1000'>Canva</span>,{' '}
								<span className='font-bold dark:text-blue-600 duration-1000'>Behance</span>,{' '}
								<span className='font-bold dark:text-blue-300 duration-1000'>Coolors</span>,{' '}
								<span className='font-bold duration-1000'>Medium</span>
								{about[4][lang]}
							</p>
							<br />
							<p>
								{about[5][lang]}
								<span className='font-bold dark:text-red-500 duration-1000'>HTML</span>,{' '}
								<span className='font-bold dark:text-blue-500 duration-1000'>CSS</span>,{' '}
								<span className='font-bold dark:text-yellow-500 duration-1000'>JavaScript</span>,{' '}
								<span className='font-bold dark:text-blue-600 duration-1000'>React</span>,{' '}
								<span className='font-bold dark:text-purple-600 duration-1000'>Kotlin</span>,{' '}
								<span className='font-bold dark:text-green-600 duration-1000'>Node.js</span>{' '}y{' '}
								<span className='font-bold dark:text-red-600 duration-1000'>Java</span>. 💻
							</p>
							<br />
							<p>
								{about[6][lang]}
								<span className='font-bold dark:text-yellow-300 duration-1000'>Sal</span>daña y{' '}
								<span
									className='font-bold dark:text-yellow-500 duration-1000'>Es</span>pinoza. {about[7][lang]}
							</p>
						</div>
						<div className='lg:w-1/2 px-4'>
							<div className='w-full h-full flex justify-center items-center'>
								<div>
									<div className='flex p-5 lg:pb-2'>
										<CartoonImageOutlined Items={() => (
											<img src={MER} alt='Me in real life' className='rounded-full' />)} />
										<CartoonImageOutlined Items={() => (
											<img src={MED} alt='Me in digital life' className='rounded-full' />)} />
									</div>
									<div className='text-justify lg:text-center'>
										<a href='https://open.spotify.com/playlist/6DjZu0vWZHIpmIM4Gk3oFJ?si=2a83bd0e0f0e4ff8'
										   target='_blank' rel='noreferrer'>
											{about[8][lang]}
											<span
												className='font-bold dark:text-green-500 duration-1000'>Spotify{' '}</span>
											{about[9][lang]}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
