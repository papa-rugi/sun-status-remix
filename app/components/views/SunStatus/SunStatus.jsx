export default function RootView({ children }) {
  return (
    <section className="masthead" role="img" aria-label="Image Description">
      <h1>{children}</h1>
    </section>
  );
}
