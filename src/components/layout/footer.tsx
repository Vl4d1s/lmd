export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-gray-200">
      <div className="container mx-auto text-gray-600 text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Made with 💜 by{' '}
          <a
            className="hover:text-blue-500"
            href="https://www.linkedin.com/in/vladismarkin/"
          >
            Vladis Markin
          </a>
          {' | '}
          <a
            className="hover:text-blue-500"
            href="https://github.com/Vl4d1s/lmd"
          >
            Source code
          </a>
        </p>
      </div>
    </footer>
  );
}
