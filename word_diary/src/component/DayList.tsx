import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export interface IDay {
  id: number;
  day: number;
}

export default function DayList() {
  const days: IDay[] = useFetch('http://localhost:3001/days');

  /* 커스텀 훅을 사용하여 위 한줄로 대체 */
  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       setDays(data);
  //     });
  // }, []);

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
