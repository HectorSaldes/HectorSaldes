import { certificates } from '../assets/utils/Texts';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useState } from 'react';

export default function Certificates({ lang }) {
	const title = { es: 'Certificados 📜', en: 'Certificates 📜' };
	const images = certificates
	const [currentImage, setCurrentImage] = useState(0);

	const handlePrev = () => {setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);};

	const handleNext = () => {setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);};

	return (
		<div id='work' className='container mx-auto py-5 px-5 dark:text-white'>
			<div className='lg:flex lg:min-h-screen lg:items-center'>
				<div className='text-lg lg:text-xl text-justify'>
					<p className='text-2xl lg:text-3xl font-bold'>{title[lang]}</p>

					<div className='relative w-full h-full'>
						<div className='flex items-center justify-center'>
							<button className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-black dark:bg-gray-700 bg-opacity-50 text-white lg:p-2 rounded-full' onClick={handlePrev}>
								<BsFillCaretLeftFill size="40"/>
							</button>
							<img className='lg:w-1/2 lg:h-3/4 object-cover' src={images[currentImage].image} alt={`Image ${currentImage + 1}`} />
							<button className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black dark:bg-gray-700 bg-opacity-50 text-white lg:p-2 rounded-full' onClick={handleNext}>
								<BsFillCaretRightFill size="40"/>
							</button>
						</div>
						<div className='absolute bottom-0 left-0 w-full h-16 lg:h-28 bg-black dark:bg-gray-700 dark:bg-opacity-60 bg-opacity-60 flex items-center justify-center rounded-sm lg:rounded-xl py-'>
							<div className='text-center text-sm lg:text-xl'>
								<p className='text-white font-bold'>{images[currentImage].name}</p>
								<p>{currentImage + 1} / {images.length}</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

