import { For, type Component } from "solid-js";

interface Props {
  words: string[];
}
const Word: Component<Props> = ({ words }) => {
  return (
    <>
      <For each={words}>
        {(k) => (
          <>
            <label>
              1 {k}
              <input
                type="checkbox"
                checked={k.length % 2 === 0}
                onChange={() => {}}
              />{" "}
            </label>

            {/* repeat once */}

            <label>
              2 {k}
              <input
                type="checkbox"
                checked={k.length % 3 === 0}
                onChange={() => {}}
              />{" "}
            </label>

            {/* repeat twice */}

            <label>
              3 {k}
              <input
                type="checkbox"
                checked={k.length % 4 === 0}
                onChange={() => {}}
              />{" "}
            </label>
          </>
        )}
      </For>
    </>
  );
};

export default Word;
