import React from 'react';
import { SvgBlob } from 'react-svg-blob';
import { getRandomColor, getRandomInt } from '../assets/utils/RandomShape';

function generateShapeProps() {return { size: 400, growth: getRandomInt(1, 10), edges: getRandomInt(5, 20), };}

const Blobs = () => (
	<div className='hidden lg:block'>
		<div className='absolute left-0 top-0 w-1/6 animate-pulse'>
			<SvgBlob
				variant='solid'
				color={getRandomColor()}
				shapeProps={generateShapeProps()}
				isOutline={0.3}
			/>
		</div>
		<div className='absolute bottom-0 left-0 w-1/4 animate-pulse'>
			<SvgBlob
				variant='solid'
				color={getRandomColor()}
				shapeProps={generateShapeProps()}
				isOutline={0.3}
			/>
		</div>
		<div className='absolute right-0 bottom-0 w-1/4 animate-pulse'>
			<SvgBlob
				variant='solid'
				color={getRandomColor()}
				shapeProps={generateShapeProps()}
				isOutline={0.3}
			/>
		</div>
		<div className='absolute right-0 top-0 w-1/4 animate-pulse'>
			<SvgBlob
				variant='solid'
				color={getRandomColor()}
				shapeProps={generateShapeProps()}
				isOutline={0.3}
			/>
		</div>
	</div>
);

export default Blobs;