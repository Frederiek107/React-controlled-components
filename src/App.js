import React, {useState} from 'react';
import './App.css';

function App() {

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        review: '',
        reviewtext: '',
    })

    function eventSubmit(e) {
        console.log(formState);
        e.preventDefault();
    }

    function handleFormChange(e) {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        });
    }

  return (
      <>
          <form>
              <fieldset id="personal-data">
                  <legend>Gegevens</legend>
                  <span>
        Naam:
        <input
        type="text"
        name="name"
        id="gegevens"
        value={formState.name}
        onChange={handleFormChange}
        />
        </span>
              <span>
        Leeftijd:
        <input
            type="text"
            name="age"
            id="gegevens"
            value={formState.age}
            onChange={handleFormChange}
        />
        </span>
              </fieldset>
          </form>
          <form
          onSubmit={eventSubmit}
          >
              <fieldset id="reviewblock">
                  <legend>Jouw review</legend>
                  Hoe heb je dit recept gevonden?
              <select
                  name="review"
                  id="review"
                  value={formState.review}
                  onChange={handleFormChange}
              >
                  <option>Google</option>
                  <option>Vrienden</option>
                  <option>Advertentie</option>
                  <option>Anders</option>
              </select>
                  <textarea
                      name="reviewtext"
                      id="reviewtext"
                      placeholder="Wat vond je van het recept?"
                      value={formState.reviewtext}
                      onChange={handleFormChange}
                  />
                  <button
                      type="submit">
                      Versturen
                  </button>
              </fieldset>
          </form>
      </>
  );
}

export default App;
