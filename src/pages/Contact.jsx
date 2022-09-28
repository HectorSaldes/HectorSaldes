import { menu, contact } from '../assets/utils/Texts';
import Snacks from './Snacks';

export default function Contact({ lang }) {
	return (
		<div id='contact' className='container mx-auto pt-5 px-5 dark:text-white'>
			<div className='lg:flex lg:h-screen lg:items-center'>
				<div className='text-xl lg:text-2xl'>
					<p className='text-2xl lg:text-3xl font-bold'>
						{menu[4][lang]}
					</p>
					<div className='mt-5 text-center text-lg lg:text-xl'>
						<p className='text-5xl lg:text-6xl font-bold leading-snug'>{contact[0][lang]}</p>
						<p className='text-lg lg:text-2xl'>{contact[1][lang]}</p>
						<p className='mt-3 italic'>{contact[2][lang]}</p>
						<div className='my-8 lg:mx-16'>
							<a href='https://t.me/HectorSaldes' target='_blank' rel='noreferrer'
							   className='flex items-center text-black justify-center px-8 py-4 font-bold transition bg-teal-500 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_#000] hover:shadow-none active:bg-teal-700'>
								<div className='absolute transform translate-x-36 text-6xl rotate-12'>✌</div>
								{contact[3][lang]}
							</a>
						</div>
					</div>
				</div>
			</div>
			<Snacks lang={lang} />
		</div>
	);
}
