import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchForm;

/*### Part 3

Add a search component to your list views.

- [X] Add the `<SearchForm />` component (see `./components/SearchForm.js`).
  - [ ] Wire up the `onSearch(name)` callback prop to support [querying the API](https://rickandmortyapi.com/documentation/#filter-characters). (To search for `rick`, you would request `/api/character/?name=rick`.)
  - [ ] _Remember:_ `useEffect` must reference any state on which it _depends_.
- [ ] Persist search form field(s) by using the custom hook `useLocalStorage`.

- [ ] **Make sure all tasks are complete:** Do a global search (Cmd-Shift-F in VS Code) for the string `TODO:`.

> 💡**Reminder:** `git commit -am 'Stretch Progress'`


---------------------------------------------------------
*/

/*    useEffect(() => {
        axios
            .get("api/character/?name=${name}")
            .then(response => {
                console.log(response);
                setEpisodeList(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);*/