import { IoSchoolOutline } from 'react-icons/io5';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { GrMedium } from 'react-icons/gr';
import {
	SiJavascript, SiNetlify, SiNodedotjs, SiMongodb, SiSpring, SiJava,
	SiHtml5, SiFigma, SiTailwindcss, SiGit, SiUbuntu, SiNotion, SiGithub, SiSpotify,
	SiUnsplash, SiCanva, SiVisualstudiocode, SiAndroidstudio, SiRailway
} from 'react-icons/si';
import { menu, experience } from '../assets/utils/Texts';
import CartoonCardOutlined from '../components/CartoonCardOutlined';

export default function Experience({ lang }) {
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
									<p className='font-semibold'>Universidad Tecnológica Emiliano Zapata del Estado de Morelos</p>
									<p className='italic text-gray-600 dark:text-gray-400'>2019 - 2023 ({experience[6][lang]})</p>
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
									<p className='font-semibold'>Novopatent I.S.S.C.</p>
									<p className='italic text-gray-600 dark:text-gray-400'>2021 - 2021</p>
									<p>{experience[4][lang]}</p>
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
									<p>{experience[5][lang]}</p>
								</div>
							</div>



						</div>
					</div>
					<div>
						<p className='my-5 text-xl font-bold uppercase'>{experience[7][lang]}</p>
						<div className='flex justify-around flex-wrap text-center'>
							<CartoonCardOutlined Background='bg-[#13111c]' Items={() => (<SiRailway size='40' color='#fff' />)} />
							<CartoonCardOutlined Background='bg-[#202020]' Items={() => (<FaReact size='40' title={'hola'} color='5ccfee' />)} />
							<CartoonCardOutlined Background='bg-[#202020]' Items={() => (<SiJavascript size='40' color='yellow' />)} />
							<CartoonCardOutlined Background='bg-[#1e1e1e]' Items={() => (<SiFigma size='40' color='#f34e1e' />)} />
							<CartoonCardOutlined Background='bg-[#2f393b]' Items={() => (<SiNetlify size='40' color='#00beae' />)} />
							<CartoonCardOutlined Background='bg-[#303030]' Items={() => (<SiNodedotjs size='40' color='#7aa61b' />)} />
							<CartoonCardOutlined Background='bg-[#1e2f39]' Items={() => (<SiMongodb size='40' color='#108b4b' />)} />
							<CartoonCardOutlined Background='bg-[#151c2c]' Items={() => (<SiTailwindcss size='40' color='#14b4c0' />)} />
							<CartoonCardOutlined Background='bg-[#219945]' Items={() => (<SiSpring size='40' color='white' />)} />
							<CartoonCardOutlined Background='bg-[#ed2025]' Items={() => (<SiJava size='40' color='white' />)} />
							<CartoonCardOutlined Background='bg-[#f1491c]' Items={() => (<SiHtml5 size='40' color='white' />)} />
							<CartoonCardOutlined Items={() => (<SiGit size='40' color='#e5392d' />)} />
							<CartoonCardOutlined Items={() => (<SiUbuntu size='40' color='#df4916' />)} />
							<CartoonCardOutlined Items={() => (<SiNotion size='40' color='black' />)} />
							<CartoonCardOutlined Items={() => (<SiGithub size='40' color='black' />)} />
							<CartoonCardOutlined Items={() => (<SiAndroidstudio size='40' color='#4285f4' />)} />
							<CartoonCardOutlined Items={() => (<SiVisualstudiocode size='40' color='#0090d9' />)} />
							<CartoonCardOutlined Background='bg-[#7a11f7]' Items={() => (<FaBootstrap size='40' color='white' />)} />
							<CartoonCardOutlined Background='bg-[#26bec9]' Items={() => (<SiCanva size='40' color='white' />)} />
							<CartoonCardOutlined Background='bg-[#000]' Items={() => (<SiSpotify size='40' color='#1ed760' />)} />
							<CartoonCardOutlined Background='bg-[#000]' Items={() => (<GrMedium size='40' color='white' />)} />
							<CartoonCardOutlined Background='bg-[#000]' Items={() => (<SiUnsplash size='40' color='white' />)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}