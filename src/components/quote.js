export function quote({quote, author}) {
  return (
  <div class="bg-white text-violet-800 dark:bg-gray-600 dark:text-white p-10 max-w-6xl rounded-md">
    <p class="text-4xl font-black leading-[54px] mb-5">
      {quote.content}
    </p>
    <p class="italic text-2xl dark:text-violet-200 text-violet-400">
      {author}
    </p>
  </div>
  )
}