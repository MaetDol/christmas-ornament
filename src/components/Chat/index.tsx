export function Chat() {
  return (
    <div className="flex-1 overflow-auto py-12 px-4">
      <ol className="font-ownglyph">
        <li className="flex gap-2 ">
          <div className="w-12 h-12 rounded-full shadow-drop-1 bg-slate-300"></div>
          <ol className="font-[18px] mt-1 flex flex-col gap-2 items-start">
            <li className="rounded bg-slate-50 py-2 px-3 shadow-drop-1 first:rounded-t-lg">
              안녕! 잘 지내고 있니?
            </li>
            <li className="rounded bg-slate-50 py-2 px-3 shadow-drop-1 last:rounded-b-lg">
              블라블라~
            </li>
          </ol>
        </li>

        <li className="flex gap-2 mt-4 justify-end">
          <ol>
            <li className="rounded-lg bg-slate-50 py-2 px-3 shadow-drop-1 text-white bg-lime-800">
              블라블라~
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}
