import { useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState(0);
  const [values, setValues] = useState("");
  const [themes, setThemes] = useState("key1");
  const [del, setDel] = useState("del1");
  const [bg, setBg] = useState("bg-bg1");
  const [fontColor, setFontColor] = useState("text-white");
  const [keypadColor, setKeypadColor] = useState("bg-keypadBg1");
  const [displayColor, setDisplayColor] = useState("bg-screenBg1");
  const [equal, setEqual] = useState("equal1");
  const [rangeColor, setRangeColor] = useState("acccent-equal1");
  

  console.log(values);

  const numberContainer = useRef(null);

  useEffect(() => {
    if (numberContainer.current) {
      const numbers = numberContainer.current.querySelectorAll(".key");
      if (theme == 0) {
        setThemes("key1");
        setDel("del1");
        setBg("bg-bg1");
        setFontColor("text-white");
        setKeypadColor("bg-keypadBg1");
        setDisplayColor("bg-screenBg1");
        setEqual("equal1");
        setRangeColor("accent-equal1")
      } else if (theme == 1) {
        setThemes("key2");
        setDel("del2");
        setBg("bg-bg2");
        setFontColor("text-keyColor2");
        setKeypadColor("bg-keypadBg2");
        setDisplayColor("bg-screenBg2");
        setEqual("equal2");
        setRangeColor("accent-equal2")

      } else {
        setThemes("key3");
        setDel("del3");
        setBg("bg-bg3");
        setFontColor("text-keyColor3");
        setKeypadColor("bg-keypadBg3");
        setDisplayColor("bg-screenBg3");
        setEqual("equal3");
        setRangeColor("accent-equal3")

      }

      numbers.forEach((element) => {
        element.classList.add(themes);
      });
    }
  });

  function setVal(e) {
    if (e.target.value == "del") {
      setValues(values.slice(0, -1));
    } else if (e.target.value == "reset") {
      setValues("");
    } else if (e.target.value == undefined) {
      null;
    } else {
      setValues((prev) => prev + e.target.value);
    }
  }

  function calculate() {
    try {
      if (!Number.isInteger(eval(values))) {
        setValues(eval(values).toFixed(2));
      } else {
        setValues(eval(values));
      }
    } catch (error) {
      setValues(error);
    }
  }
  return (
    <body className={`${bg} py-[100px] px-10 flex justify-center items-center`}>
      <main className="w-[100%] max-w-[550px]">
        <section
          className={`top-part ${fontColor} flex justify-between items-center`}
        >
          <h3 className=" text-2xl">Calc</h3>

          <div className="theme-selector flex justify-between items-center">
            <h4 className="uppercase  font-bold tracking-wide">theme</h4>

            <div className="toggler px-4 flex flex-col items-center justify-between">
              <div className="flex items-center justify-around w-full">
                <h5>1</h5>
                <h5>2</h5>
                <h5>3</h5>
              </div>
              <input
                type="range"
                value={theme}
                step={1}
                max={2}
                className={`${rangeColor}  w-16 h-5 bg-keypadBg1 rounded-lg appearance-none cursor-pointer`}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section
          className={`display ${displayColor} ${fontColor} rounded p-3 my-5  min-h-24`}
        >
          <h1 className=" text-6xl text-right p-3 break-words whitespace-normal">
            {values}
          </h1>
        </section>

        <section
          className={`${keypadColor} keys grid gap-2 grid-cols-4  p-4 rounded`}
          ref={numberContainer}
          onClick={setVal}
        >
          {[
            7,
            8,
            9,
            "del",
            4,
            5,
            6,
            "+",
            1,
            2,
            3,
            "-",
            ".",
            0,
            "/",
            "*",
            "reset",
            "=",
          ].map((item) => (
            <button
              className={` ${
                item === "="
                  ? `${equal}`
                  : item === "reset"
                  ? `col-span-2 ${del}`
                  : item === "del"
                  ? del
                  : themes
              }`}
              onClick={item == "=" && calculate}
              value={item != "=" ? item : null}
              key={item}
            >
              {item}
            </button>
          ))}
        </section>
      </main>
    </body>
  );
}

export default App;
