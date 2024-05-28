import { useState } from "react";
import SharedNotesContext from "./SharedNotesContext";
import Desk1 from "./Desk1";
import Desk2 from "./Desk2";

export const Office = () => {
  const [sharedNotes, setSharedNotes] = useState([]);

  const addNotes = (note) => {
    setSharedNotes([...sharedNotes, note]);
  };

  return (
    <SharedNotesContext.Provider
      value={{
        sharedNotes,
        addNotes,
      }}
    >
      <div>
        <div className="office">
          <h1>Oficina compartida</h1>
          {/*desk*/}
          <Desk1 />
          <Desk2 />
        </div>
      </div>
    </SharedNotesContext.Provider>
  );
};
