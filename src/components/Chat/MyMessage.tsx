interface Props {
  content: string[];
}

export function MyMessage({ content }: Props) {
  return (
    <li className="flex gap-2 justify-end break-words ml-4">
      <ol className="text-[16px] flex flex-col gap-2 items-end">
        {content.map((message, index) => (
          <li
            key={index}
            className="rounded py-2 px-3 shadow-drop-1 
            first:rounded-t-lg last:rounded-b-lg whitespace-pre-line
            text-white bg-lime-800"
          >
            {message}
          </li>
        ))}
      </ol>
    </li>
  );
}
