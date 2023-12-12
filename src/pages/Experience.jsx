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
							<div className='flex mt-6'>
								<div className='flex-col mr-5'>
									<div className='rounded-full h-10 w-10 bg-green-600'>
										<IoSchoolOutline className='w-full h-full p-2 text-white' />
									</div>
									<div className='h-full mx-auto w-1 bg-green-700'></div>
								</div>
								<div>
									<p className='font-semibold'>Universidad Tecnológica Emiliano Zapata del Estado de
										Morelos</p>
									<p className='italic text-gray-600 dark:text-gray-400'>2019 - present</p>
									<p>{experience[1][lang]}</p>
								</div>
							</div>
							<div className='flex mt-6'>
								<div className='flex-col mr-5'>
									<div className='rounded-full h-10 w-10 bg-green-600'>
										<IoSchoolOutline className='w-full h-full p-2 text-white' />
									</div>
								</div>
								<div>
									<p className='font-semibold'>Colegio Nacional de Educación Profesional Técnica</p>
									<p className='italic text-gray-600 dark:text-gray-400'>2016 - 2019</p>
									<p>{experience[2][lang]}</p>
								</div>
							</div>
						</div>
						<div>
							<p className='mt-5 text-2xl font-bold uppercase'>{experience[3][lang]}</p>
							<div className='flex mt-6'>
								<div className='flex-col mr-5'>
									<div className='rounded-full h-10 w-10 bg-yellow-500'>
										<CgWorkAlt className='w-full h-full p-2 text-white' />
									</div>
									<div className='h-full mx-auto w-1 bg-yellow-500'></div>
								</div>
								<div>
									<p className='font-semibold'>Freight Ideas S.A. de C.V.</p>
									<p className='italic text-gray-600 dark:text-gray-400'>2022 - present</p>
									<p>{experience[4][lang]}</p>
								</div>
							</div>
							<div className='flex mt-6'>
								<div className='flex-col mr-5'>
									<div className='rounded-full h-10 w-10 bg-yellow-500'>
										<CgWorkAlt className='w-full h-full p-2 text-white' />
									</div>
									<div className='h-full mx-auto w-1 bg-yellow-500'></div>
								</div>
								<div>
									<p className='font-semibold'>Novopatent I.S.S.C.</p>
									<p className='italic text-gray-600 dark:text-gray-400'>2021 - 2021</p>
									<p>{experience[5][lang]}</p>
								</div>
							</div>
							<div className='flex mt-6'>
								<div className='flex-col mr-5'>
									<div className='rounded-full h-10 w-10 bg-yellow-500'>
										<CgWorkAlt className='w-full h-full p-2 text-white' />
									</div>
								</div>
								<div>
									<p className='font-semibold'>Viajemos a Morelos</p>
									<p className='italic text-gray-600 dark:text-gray-400'>2018 - 2020</p>
									<p>{experience[6][lang]}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}