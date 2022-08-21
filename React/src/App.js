import { useEffect, useRef, useState } from 'react';
import './App.css';
function App() {
  const [podsjetnici, setpodsjetnici] = useState([]);
  const podsjetnikText = useRef();
  useEffect(() => {
    const existingpodsjetnici = localStorage.getItem('podsjetnici');
    setpodsjetnici(existingpodsjetnici ? JSON.parse(existingpodsjetnici) : []);
  }, []);
  function addPodsjetnik(event) {
    event.preventDefault();
    const next = [...podsjetnici, podsjetnikText.current.value];
    setpodsjetnici(next);
    localStorage.setItem('podsjetnici', JSON.stringify(next));
  }
  return (
    <div>
      <ul class="podsjetnici">
        {podsjetnici.map(podsjetnik => (<li key={podsjetnik}>{podsjetnik}</li>))}  
      </ul>
      <form class="card" onSubmit={addPodsjetnik}>
        <input type="text" placeholder="Napiši zadatak" ref={podsjetnikText} />
        <input type="submit" value="Dodaj podsjetnik" />
      </form>
    </div>
  );
}
export default App;
