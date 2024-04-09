import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [name, setName] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  const isRight =
    name.toLowerCase().includes("afra") || name.toLowerCase().includes("afoo");

  const handler = () => {
    setIsEntered(true);
  };

  const reset = () => {
    setName("");
    setIsEntered(false);
  };

  return (
    <>
      <h1>Who is right?</h1>
      {isEntered ? (
        <>
          {isRight ? (
            <p>Of course, Afra is always right, ALWAYS! 😁</p>
          ) : (
            <p>Nope, I'm sorry, you are not right. 😒</p>
          )}
          <button type="button" onClick={reset}>
            Try again
          </button>
        </>
      ) : (
        <>
          <p>Enter your name below to find out if you are right or not.</p>
          <div style={{ marginBottom: "1rem" }}>
            <input
              value={name}
              onChange={(e) => {
                console.log(e);
                //@ts-ignore
                setName(e.target.value);
              }}
            />
          </div>
          <button type="button" onClick={handler}>
            Let's find out
          </button>
        </>
      )}
    </>
  );
}
