import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Site!</h1>
        <p className="text-xl text-gray-600">Create something amazing with Next.js</p>
      </header>

      <main className="flex flex-col items-center gap-12 sm:flex-row sm:gap-16">
        <Image
          className="rounded-lg shadow-lg"
          src="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2009-toc-dai-cute.jpg"
          alt="Cute Girl Image"
          width={300}
          height={400}
        />

        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Started with Next.js</h2>
          <p className="text-lg text-gray-600 mb-6">
            Edit <code className="font-mono text-blue-600">app/page.tsx</code> and save to see your changes instantly.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 justify-center sm:justify-start">
            <a
              className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="invert"
                src="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2009-toc-dai-cute.jpg"
                alt="Vercel Logo"
                width={20}
                height={20}
              />
              Deploy Now
            </a>
            <a
              className="flex items-center justify-center bg-gray-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition duration-300"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Docs
            </a>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-center">
        <div className="flex gap-6 justify-center">
          <a
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 underline"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2009-toc-dai-cute.jpg"
              alt="File Icon"
              width={16}
              height={16}
            />
            Learn More
          </a>
          <a
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 underline"
            href="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2009-toc-dai-cute.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2009-toc-dai-cute.jpg"
              alt="Window Icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 underline"
            href="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2009-toc-dai-cute.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2009-toc-dai-cute.jpg"
              alt="Globe Icon"
              width={16}
              height={16}
            />
            Go to Next.js
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">© 2025 Next.js. All rights reserved.</p>
      </footer>
    </div>
  );
}
