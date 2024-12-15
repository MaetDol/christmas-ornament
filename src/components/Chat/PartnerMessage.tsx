interface Props {
  content: string[];
}

export function PartnerMessage({ content }: Props) {
  return (
    <li className="flex gap-2">
      <div className="w-12 h-12 rounded-full shadow-drop-1 bg-slate-300 shrink-0"></div>
      <ol className="font-[18px] mt-1 flex flex-col gap-2 items-start">
        {content.map((message, index) => (
          <li
            key={index}
            className="rounded bg-slate-50 py-2 px-3 shadow-drop-1 
            first:rounded-t-lg last:rounded-b-lg whitespace-pre-line
            "
          >
            {message}
          </li>
        ))}
      </ol>
    </li>
  );
}
