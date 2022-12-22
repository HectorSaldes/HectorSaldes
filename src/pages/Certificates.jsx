import CartoonCardOutlined from '../components/CartoonCardOutlined';
import { certificates } from '../assets/utils/Texts';

export default function Certificates({ lang }) {
	const title = { es: 'Certificados 📜', en: 'Certificates 📜' };
	return (
		<div id='work' className='container mx-auto py-5 px-5 dark:text-white'>
			<div className='lg:flex lg:min-h-screen lg:items-center'>
				<div className='text-lg lg:text-xl text-justify'>
					<p className='text-2xl lg:text-3xl font-bold'>{title[lang]}</p>
					<div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-3'>
						{certificates.map((certificate, index) => (
							<div key={index}>
								<CartoonCardOutlined
									Items={() => (
										<a href={certificate.image} target='_blank' rel="noreferrer">
											<img alt={certificate.name} src={certificate.image} className='h-56 w-full rounded-md object-cover' />
											<p className='mt-2 text-sm text-black'>{certificate.name}</p>
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

