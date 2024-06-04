function Login() {
  return (
    <section className="flex justify-center py-12 text-gray-700">
      <div className="w-full">
        <section className="p-8 text-center">
          <h2 className="text-4xl">Login</h2>
        </section>
        <section className="space-y-3">
          <div className="flex flex-col">
            <label className="py-2 font-medium">Username</label>
            <input
              type="text"
              placeholder="username"
              className="p-2 rounded border"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="password"
              className="p-2 rounded border"
            />
          </div>
          <div>
            <button type="button" className="w-full p-2 text-white bg-blue-500 rounded">Login</button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Login;
