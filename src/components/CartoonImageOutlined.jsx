const CartoonImageOutlined = ({ Items }) => (
	<div className='relative block group'>
		<span className='absolute inset-0 border-2 border-black dark:border-white border-dashed rounded-full'></span>
		<div
			className='transition bg-red-500 rounded-full group-hover:-translate-x-3 group-hover:-translate-y-3'>
			<div className='p-1 lg:p-4'>
				<Items />
			</div>
		</div>
	</div>
);

export default CartoonImageOutlined;