import React from 'react';
import { menu, uses } from '../assets/utils/Texts';

export default function Uses({ lang }) {
	return (
		<div id='uses' className='container mx-auto pt-5 px-5 dark:text-white'>
			<div className='lg:flex lg:h-screen lg:items-center'>
				<div className='w-full'>
					<p className='text-2xl lg:text-3xl font-bold'>{menu[2][lang]}</p>
					<div className='mt-5 grid grid-cols-6 gap-5'>

						<div className='col-span-12 lg:col-span-6 group'>
							<div className='relative transition border-2 border-black dark:border-white group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px]'>
								<div className='p-6'>
									<span className='text-5xl' role='img'>📱</span>
									<h2 className='mt-4 mb-2 font-bold text-3xl'>{uses[0].title[lang]}</h2>
									<ul className='flex flex-wrap justify-around'>
										{uses[0].items.map((e, i) =>(
											<li key={i}>
												<strong className={`inline-flex items-center bg-gray-100 px-5 py-1.5 rounded-full ${e.colorBackground}`}>
													<img className='object-cover w-8 h-8 rounded-full -ml-2.5 mr-2.5' src={e.img} alt="ic" />
													<span className={`font-medium ${e.colorText}`}>{e.name}</span>
												</strong>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>


						<div className='col-span-12 lg:col-span-2 group'>
							<div
								className='relative transition border-2 border-black dark:border-white group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px]'>
								<div className='p-6'>
									<span className='text-5xl' role='img'>🌐</span>
									<h2 className='mt-4 mb-2 font-bold text-3xl'>{uses[2].title[lang]}</h2>
									<ul className='flex flex-wrap justify-around'>
										{uses[2].items.map((e, i) =>(
											<li key={i}>
												<strong className={`inline-flex items-center bg-gray-100 px-5 py-1.5 rounded-full ${e.colorBackground}`}>
													<img className='object-cover w-8 h-8 rounded-full -ml-2.5 mr-2.5' src={e.img} alt="ic" />
													<span className={`font-medium ${e.colorText}`}>{e.name}</span>
												</strong>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						<div className='col-span-12 lg:col-span-2 group'>
							<div className='relative transition border-2 border-black dark:border-white group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px]'>
								<div className='p-6'>
									<span className='text-5xl' role='img'>🖥</span>
									<h2 className='mt-4 mb-2 font-bold text-3xl'>{uses[1].title[lang]}</h2>
									<ul className='flex flex-wrap justify-around'>
										{uses[1].items.map((e, i) =>(
											<li key={i}>
												<strong className={`inline-flex items-center bg-gray-100 px-5 py-1.5 rounded-full ${e.colorBackground}`}>
													<img className='object-cover w-8 h-8 rounded-full -ml-2.5 mr-2.5' src={e.img} alt="ic" />
													<span className={`font-medium ${e.colorText}`}>{e.name}</span>
												</strong>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						<div className='col-span-12 lg:col-span-2 group'>
							<div
								className='relative transition border-2 border-black dark:border-white group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px]'>
								<div className='p-6'>
									<span className='text-5xl' role='img'>💻</span>
									<h2 className='mt-4 mb-2 font-bold text-3xl'>{uses[3].title[lang]}</h2>
									<ul className='flex flex-wrap justify-around'>
										{uses[3].items.map((e, i) =>(
											<li key={i}>
												<strong className={`inline-flex items-center bg-gray-100 px-5 py-1.5 rounded-full ${e.colorBackground}`}>
													<img className='object-cover w-8 h-8 rounded-full -ml-2.5 mr-2.5' src={e.img} alt="ic" />
													<span className={`font-medium ${e.colorText}`}>{e.name}</span>
												</strong>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className='col-span-12 lg:col-span-6 group'>
							<div
								className='relative transition border-2 border-black dark:border-white group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px]'>
								<div className='p-6'>
									<span className='text-6xl' role='img'>🖱️⌨️</span>
									<h2 className='mt-4 mb-2 font-bold text-3xl'>{uses[4].title[lang]}</h2>
									<ul className='flex flex-wrap justify-around'>
										{uses[4].items.map((e, i) =>(
											<a href={e.link} target='_blank'
											   rel='noopener noreferrer' key={i}>
												<li key={i}>
													<strong className={`inline-flex items-center bg-gray-100 px-5 py-1.5 rounded-full ${e.colorBackground}`}>
														<img className='object-cover w-8 h-8 rounded-full -ml-2.5 mr-2.5' src={e.img} alt="ic" />
														<span className={`font-medium ${e.colorText}`}>{e.name}</span>
													</strong>
												</li>
											</a>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
