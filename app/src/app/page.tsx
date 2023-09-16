export default function Home() {
  return (
    <main>
      <HelloWorld />
    </main>
  );
}

export const HelloWord = () => {
  <div>
    <h1>Hello World</h1>
  </div>;
};

export const HelloWorld = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "white",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 40,
          fontStyle: "normal",
          color: "black",
          marginTop: 30,
          lineHeight: 1.8,
          whiteSpace: "pre-wrap",
        }}
      >
        <b>Hello world</b>
      </div>
    </div>
  );
};
