import type { Dispatch, SetStateAction } from 'react';

type TagInputType = {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
};

export default function TagInput({ tags, setTags }: TagInputType) {
  function handleOnEnter(evt: React.KeyboardEvent<HTMLInputElement>) {
    // check if new tag with Set
    if (evt.key != 'Enter') return;

    const tag = evt.currentTarget.value;

    if (!tag) return;

    setTags([...tags, tag]);
    evt.currentTarget.value = '';
  }

  function removeTag(index: number) {
    setTags(tags.filter((tag, i) => i !== index));
  }

  return (
    <div className="max-w flex w-full flex-wrap items-center gap-2 rounded-md border-[1px] border-slate-200 p-1">
      {tags.map((tag, index) => (
        <div
          className="inline-block rounded-full bg-gray-300 px-3 py-1"
          key={index}
        >
          <span className="text-sm">{tag}</span>
          <span
            className="ml-2 inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-sm text-white"
            onClick={() => removeTag(index)}
          >
            &times;
          </span>
        </div>
      ))}
      <input
        type="text"
        className="flex-grow border-none px-0 py-1 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-slate-500"
        placeholder="Enter Tags..."
        onKeyDown={handleOnEnter}
      />
    </div>
  );
}
