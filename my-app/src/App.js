const App = () => {
  const hello= "hello world"
  return (
    <div>
      <h1>{hello}</h1>
      <h1>Hello Jeremy</h1>
      <Jeremy/>
      <Jeremy/>
    </div>
  );
};

const Jeremy = () => {
  return (
    <>
    <h2>Component Hello</h2>
    <Purukan/>
    </>
  )
}

export default App;

const Purukan = () => {
  return (
    <>
    <h2>contoh</h2>
    </>
  )
}