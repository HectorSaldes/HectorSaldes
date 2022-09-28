export default function Quotes({ lang }) {
	const qoutes = [
		{ title: { es: '✍🏽 Frases', en: '✍🏽 Quotes' } },
		{ content: { es: 'Próximamente', en: 'Coming soon' } },
	];
	return (
		<div className='container mx-auto pt-5 px-5 dark:text-white'>
			<div className='lg:flex lg:h-screen lg:items-center p-10'>
				<div
					className='w-full h-full rounded-3xl bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-25 backdrop-filter backdrop-blur-3xl flex items-center justify-center'>
					<div className='text-xl lg:text-2xl'>
						<p className='text-2xl lg:text-3xl font-bold'>
							{qoutes[0].title[lang]}
						</p>
						<div className='mt-5 text-center text-lg lg:text-xl'>
							{qoutes[1].content[lang]}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
