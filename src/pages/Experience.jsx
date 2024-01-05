import ReactGA from 'react-ga4';
import { IoSchoolOutline } from 'react-icons/io5';
import { CgWorkAlt } from 'react-icons/cg';
import { menu, experience } from '../assets/utils/Texts';


export default function Experience({ lang }) {
	ReactGA.send({ hitType: 'pageview', page: '/#experience' });
	return (
		<div id='experience' className='container mx-auto py-5 px-5 dark:text-white'>
			<div className='lg:flex lg:min-h-screen lg:items-center'>
				<div>
					<p className='text-2xl lg:text-3xl font-bold'>{menu[1][lang]}</p>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3 text-lg lg:text-xl text-justify'>
						<div>
							<p className='mt-5 text-2xl font-bold uppercase'>{experience[0][lang]}</p>
							{
								experience[1].education.map((item, index) => (
									<div className='flex mt-6' key={index}>
										<div className='flex-col mr-5'>
											<div className='rounded-full h-10 w-10 bg-green-600'><IoSchoolOutline
												className='w-full h-full p-2 text-white' /></div>
											{index !== experience[1].education.length - 1 &&
												<div className='h-full mx-auto w-1 bg-green-700' />}
										</div>
										<div>
											<p className='font-bold'>{item[lang]['grade']}</p>
											<p className='font-light'>{item[lang]['school']}</p>
											<p className='italic text-gray-600 dark:text-gray-400'>{item[lang]['year']}. {item[lang]['place']}</p>
										</div>
									</div>
								))
							}
						</div>
						<div>
							<p className='mt-5 text-2xl font-bold uppercase'>{experience[2][lang]}</p>
							{
								experience[3].professional.map((item, index) => (
									<div className='flex mt-6' key={index+1}>
										<div className='flex-col mr-5'>
											<div className='rounded-full h-10 w-10 bg-yellow-500'><CgWorkAlt
												className='w-full h-full p-2 text-white' /></div>
											{index !== experience[3].professional.length - 1 &&
												<div className='h-full mx-auto w-1 bg-yellow-500' />}
										</div>
										<div>
											<p className='font-bold'>{item[lang]['grade']}</p>
											<p className='font-light'>{item[lang]['company']}</p>
											<p className='italic text-gray-600 dark:text-gray-400'>{item[lang]['year']}. {item[lang]['place']}</p>
											<p>{item[lang]['text']}</p>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}