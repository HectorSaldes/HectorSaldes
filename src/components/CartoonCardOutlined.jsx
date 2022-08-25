const CartoonCardOutlined = ({ Items, Background = 'bg-white' }) => (
	<div className='relative block group'>
		<span className='absolute inset-0 border-2 border-black dark:border-white border-dashed rounded-lg'></span>
		<div
			className={`transition ${Background} border-2 border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2`}>
			<div className='p-4'>
				<Items />
			</div>
		</div>
	</div>
);

export default CartoonCardOutlined;