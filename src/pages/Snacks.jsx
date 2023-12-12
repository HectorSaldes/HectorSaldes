import { snack } from '../assets/utils/Texts';

const Snacks = ({ lang }) => (
	<div className='text-black text-xs lg:text-base text-center '>
		<div className='w-full grid grid-cols-2 gap-1'>
			<a href='https://github.com/HectorSaldes/hectorsaldes/issues/new?assignees=HectorSaldes&labels=bug&projects=&template=--error-design--.md&title=%F0%9F%93%8CError+Design' target='_blank' rel='noreferrer'
			   className='col-span-2 lg:col-span-1 hover:animate-bounce'>
				<div className='w-full sm:px-4 pb-3'>
					<div className='px-4 py-3 bg-rose-500 rounded-lg'>
						{snack[0][lang]}
					</div>
				</div>
			</a>
			<a href='https://app.flowcv.com/resume-feedback/9pDXbd-_C4h8AacNdZ57D' target='_blank' rel='noreferrer'
			   className='col-span-2 lg:col-span-1 hover:animate-bounce'>
				<div className='w-full sm:px-4 pb-3'>
					<div className='px-4 py-3 bg-pink-400 rounded-lg'>
						{snack[1][lang]}
					</div>
				</div>
			</a>
			<div className='col-span-2 sm:px-4 pb-3'>
				<div className='px-4 py-3 bg-[#FFD659] rounded-lg'>
					{snack[2][lang]}
				</div>
			</div>
		</div>
	</div>
);

export default Snacks;