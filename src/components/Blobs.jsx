import { SvgBlob } from 'react-svg-blob';
import { getRandomColor, getRandomInt } from '../assets/utils/RandomShape';

const generateShapeProps = () => (
	{ size: 400, growth: getRandomInt(1, 10), edges: getRandomInt(5, 20) }
);

const RenderBlob = () => (
	<SvgBlob
		variant='solid'
		color={getRandomColor()}
		shapeProps={generateShapeProps()}
		isOutline={0.3}
	/>
);

const Blobs = () => (
	<div className='hidden lg:block'>
		<div className='absolute animate-pulse left-0 top-0 w-1/6'>
			<RenderBlob />
		</div>
		<div className='absolute animate-pulse bottom-0 left-0 w-1/4'>
			<RenderBlob />
		</div>
		<div className='absolute animate-pulse right-0 bottom-0 w-1/4'>
			<RenderBlob />
		</div>
		<div className='absolute animate-pulse right-0 top-0 w-1/4 '>
			<RenderBlob />
		</div>
	</div>
);


export default Blobs;