import {React, useState, useEffect, Suspense} from 'react';
import './App.css';
import { getMotivationalQuote } from './services/quote';
import quoteSkeleton from './components/quoteSkeleton';

function App() {
  
  const [quote, setQuote] = useState('');
  useEffect(() => {
    getMotivationalQuote().then(quote => {
      
      setQuote(quote);
    });
  }, []);
  return (
    
    <div className="bg-gray-100 dark:bg-gray-800 h-screen px-8 flex items-center justify-center flex-col">
        <div class="app-title">
          <h1 class="dark:text-violet-100  font-bold mb-7 text-2xl">10 Seconds of motivation</h1>
        </div>

        <div class="w-full bg-white text-violet-800 dark:bg-gray-600 dark:text-white p-10 max-w-6xl rounded-md">
          <p class="text-4xl font-black leading-[54px] mb-5 wi">
             {quote.content || quoteSkeleton()}
          </p>
          <p class="italic text-2xl dark:text-violet-200 text-violet-400">
            {quote.author}
          </p>
        </div>
    </div>
  );
}

export default App;
