import React from 'react';
import {
	GrLinkedinOption,
	GrMedium,
} from 'react-icons/gr';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { presentation } from '../assets/utils/Texts';
import CartoonCardOutlined from '../components/CartoonCardOutlined';
import Blobs from '../components/Blobs';

export default function Presentation({ lang }) {
	return (
		<div id='me' className='container mx-auto py-5 px-5 dark:text-white text-center'>
			<Blobs />
			<div className='lg:flex lg:h-screen lg:items-center'>
				<div>
					<p className='text-xl lg:text-2xl font-medium'>
						{presentation[0][lang]}
					</p>
					<h1 className='text-5xl lg:text-7xl font-extrabold'>
						Hector Saldaña Espinoza
					</h1>
					<p className='text-xl lg:text-2xl font-medium'>
						{presentation[1][lang]}
					</p>
					<div className='w-full lg:w-9/12 mx-auto'>
						<p className='mt-5 text-xl text-justify'>
							{presentation[2][lang]}
						</p>
					</div>
					<div className='mt-8 mx-auto w-full lg:w-1/2'>
						<div className='flex justify-between'>
							<CartoonCardOutlined Items={() =>
								(<a href='https://medium.com/@HectorSaldes' target='_blank' rel='noopener noreferrer'>
									<GrMedium color='black' size='35' />
								</a>)} />

							<CartoonCardOutlined Items={() =>
								(<a href='https://github.com/HectorSaldes' target='_blank' rel='noopener noreferrer'>
									<FiGithub color='black' size='35' />
								</a>)} />

							<CartoonCardOutlined Items={() =>
								(<a href='https://twitter.com/hectorsaldes' target='_blank' rel='noopener noreferrer'>
									<FiTwitter color='black' size='35' />
								</a>)} />
							<CartoonCardOutlined Items={() =>
								(<a href='https://www.linkedin.com/in/hector-salda%C3%B1a-ab3977219/' target='_blank'
									rel='noopener noreferrer'>
									<GrLinkedinOption color='black' size='35' />
								</a>)} />

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
