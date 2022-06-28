import React, { useState } from 'react';

interface skillArray {
	id: string;
	label: string;
}

const behaviour: skillArray[] = [
	{ id: '1', label: 'EMOTIONAL STABILITY' },
	{ id: '2', label: 'HONESTY' },
	{ id: '3', label: 'COOPERATION' },
	{ id: '4', label: 'LEADERSHIP' },
	{ id: '4', label: 'NEATNESS' },
];

const Behaviour = () => {
	const [currOption, setcurrOption] = useState<number | null>(null);
	const [currRow, setCurrRow] = useState<number | null>(null);

	const clickHandler = (index: number, row: number) => {
		if (currOption === index && currRow === row) {
			return [setcurrOption(null), setCurrRow(null)];
		}
		setcurrOption(index);
		setCurrRow(row);
	};

	return (
		<div className='w-full'>
			<h2 className='font-bold py-[24px]'>
				<span>C.</span> AFFECTIVE DOMAIN (BEHAVIOUR)
			</h2>
			<div className='divide-y divide-[#06042c] border border-[#06042C] rounded-[8px]'>
				{behaviour.map((skill, id2) => (
					<div
						key={id2}
						className='py-[10px] px-[4px] flex justify-between items-center'
					>
						<h3 className='w-[40%]'>{skill.label}</h3>
						<div className='flex gap-x-[10px]'>
							{Array.from(Array(5).keys())
								.sort((a, b) => b - a)
								.map((item, idx2) => (
									<button
										onClick={() => clickHandler(idx2 + 1, id2)}
										className={`${
											currOption === idx2 + 1 && currRow === id2
												? 'bg-[#0075FF]'
												: 'bg-[#C0C0C0]'
										} rounded-[8px] text-[14px] text-white flex justify-center items-center h-[55px] w-[45px]`}
										key={idx2}
									>
										{item + 1}
									</button>
								))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Behaviour;
