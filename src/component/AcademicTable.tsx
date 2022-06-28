import React, { useState } from 'react';
import data from '../dummyData.json';

const AcademicTable = () => {
	const [rawData] = useState(data);
	return (
		<table className='table-auto w-full table-bordered'>
			<thead>
				<tr>
					<th rowSpan={2} className='uppercase font-thin'>
						Subject
					</th>
					<th colSpan={3} className='uppercase font-thin'>
						Term Score
					</th>
					<th rowSpan={2} className='uppercase font-thin'>
						1st summary
					</th>
					<th rowSpan={2} className='uppercase font-thin'>
						2nd Summary
					</th>
					<th rowSpan={2} className='uppercase font-thin'>
						grade
					</th>
					<th rowSpan={2} className='uppercase font-thin'>
						remarks
					</th>
				</tr>
				<tr>
					<th className='uppercase font-thin'>CAT</th>
					<th className='uppercase font-thin'>Exam</th>
					<th className='uppercase font-thin'>Total</th>
				</tr>
			</thead>
			<tbody>
				{rawData.map((item, id) => (
					<tr key={id}>
						<td className='capitalize'>{item.subject}</td>
						<td>{item['Term score'].cat}</td>
						<td>{item['Term score'].exam}</td>
						<td>{item['Term score'].total}</td>
						<td>{item['1st summary']}</td>
						<td>{item['2nd summary']}</td>
						<td className='uppercase'>{item.grade}</td>
						<td className='uppercase'>{item.remarks}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AcademicTable;
