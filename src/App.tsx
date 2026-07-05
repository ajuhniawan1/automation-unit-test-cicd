function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold text-blue-400">
          React + Vite + Tailwind
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Automation, Unit Test, dan CI/CD
        </h1>

        <p className="text-slate-300 mb-8">
          Project ini digunakan untuk belajar membuat aplikasi React,
          menjalankan unit test, dan membuat workflow CI/CD menggunakan GitHub
          Actions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
            <h2 className="font-bold mb-2">Automation</h2>
            <p className="text-sm text-slate-400">
              Proses manual dibuat berjalan otomatis.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
            <h2 className="font-bold mb-2">Unit Test</h2>
            <p className="text-sm text-slate-400">
              Mengecek function agar hasilnya sesuai.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
            <h2 className="font-bold mb-2">CI/CD</h2>
            <p className="text-sm text-slate-400">
              Test dan build berjalan otomatis di GitHub.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
