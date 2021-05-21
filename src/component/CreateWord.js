import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useFetch from '../hooks/useFetch'

export default function CreateWord() {

  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const korRef = useRef(null);
  const engRef = useRef(null);
  const dayRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    // console.log(engRef.current.value);
    // console.log(korRef.current.value);
    // console.log(dayRef.current.value);
    if (!isLoading) {
      setIsLoading(true);
      fetch("http://localhost:3001/words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "day": dayRef.current.value,
          "eng": engRef.current.value,
          "kor": korRef.current.value,
          "isDone": false
        })
      }).then(res => {
        if (res.ok) {
          alert("추가 성공!");
          history.push(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      })
    }
  }


  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="home" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="집" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))};
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}