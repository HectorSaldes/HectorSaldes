import React from 'react';
import { menu, work } from '../assets/utils/Texts';
import CardCartoonFilled from '../components/CartoonCardFilled';
import Badge from '../components/Badge';

export default function Work({ lang }) {
	const worked = { es: 'Contruido con:', en: 'Built it with:' };
	return (
		<div
			id='work'
			className='container mx-auto py-5 px-5 dark:text-white'>
			<div className='lg:flex lg:h-screen lg:items-center'>
				<div className='text-lg lg:text-xl text-justify'>
					<p className='font-bold'>{menu[3][lang]}</p>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3'>
						{work.map((i, index) => (
							<div key={index}>
								<CardCartoonFilled
									Items={() => (
										<a
											href={i.link}
											target='_blank'
											rel='noreferrer'>
											<img
												className='w-full h-32 object-cover rounded-t-xl'
												src={i.img}
												alt={i.title}
											/>
											<div className='p-5'>
												<h5 className='font-bold text-2xl mb-2'>
													{i.title[lang]}
												</h5>
												<p className='mb-3'>{i.description[lang]}</p>
												<p className='mb-3 text-stone-700 dark:text-stone-400'>
													{worked[lang]}
												</p>
												{i.built.map((b, i) => (
													<div key={i}>
														<Badge text={b} />
													</div>
												))}
											</div>
										</a>
									)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
