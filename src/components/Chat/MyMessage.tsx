interface Props {
  content: string[];
}

export function MyMessage({ content }: Props) {
  return (
    <li className="flex gap-2 justify-end">
      <ol className="font-[18px] flex flex-col gap-2 items-end">
        {content.map((message, index) => (
          <li
            key={index}
            className="rounded py-2 px-3 shadow-drop-1 
            first:rounded-t-lg last:rounded-b-lg
            text-white bg-lime-800"
          >
            {message}
          </li>
        ))}
      </ol>
    </li>
  );
}
