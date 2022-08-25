export default function CartoonMenuFilled({ id, linked, color, text }) {
	return (
		<div className='my-5 lg:my-0 block group' key={id}>
			<a href={linked} rel='noreferrer'>
				<div
					className={`relative transition rounded-md border-2 ${color} group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[5px_5px] mx-0 lg:mx-3 px-4 py-2`}>
					{text}
				</div>
			</a>
		</div>
	);
};