import React, { useState } from 'react';

interface skillArray {
	id: string;
	label: string;
}
const skills: skillArray[] = [
	{ id: '1', label: 'DRAWING & PAINTING' },
	{ id: '2', label: 'HANDWRITING' },
	{ id: '3', label: 'GAMES' },
	{ id: '4', label: 'SPORTS' },
	{ id: '4', label: 'VERBAL FLUENCY' },
];

const Skills = () => {
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
				<span>B.</span> PSYCHOMOTOR DOMAIN (SKILLS)
			</h2>
			<div className='border border-[#06042C] divide-y divide-[#06042c] rounded-[8px]'>
				{skills.map((skill, id) => (
					<div
						key={id}
						className='py-[10px] px-[4px] flex justify-between items-center'
					>
						<h3 className='w-[40%]'>{skill.label}</h3>
						<div className='flex gap-x-[10px]'>
							{Array.from(Array(5).keys())
								.sort(function (a, b) {
									return b - a;
								})
								.map((item, idx) => (
									<button
										onClick={() => clickHandler(idx + 1, id)}
										className={`${
											currOption === idx + 1 && currRow === id
												? 'bg-[#0075FF]'
												: 'bg-[#C0C0C0]'
										} rounded-[8px] text-[14px] text-white flex justify-center items-center h-[55px] w-[45px]`}
										key={idx}
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

export default Skills;
