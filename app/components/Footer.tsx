// components/Footer.js
export default function Footer() {
  return (
    <footer className="w-full py-6 text-center bg-white border-t border-gray-200">
      <p className="text-gray-500">&copy; {new Date().getFullYear()} Minal. All rights reserved.</p>
    </footer>
  );
}
