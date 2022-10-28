const CardCartoonFilled = ({ Items }) => (
	<div className='block group'>
		<div className='relative transition border-2 border-black dark:border-white group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px]'>
			<Items />
		</div>
	</div>
);

export default CardCartoonFilled;