function App() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem", fontFamily: "Arial" }}>
      <header>
        <h1>Joseph Nelson</h1>
        <p>Electrical Engineer | Embedded Systems | Signal Processing</p>
      </header>

      <hr />

      <section>
        <h2>Projects</h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3>Laser Tag Receiver System</h3>
          <p>
            Interrupt-driven embedded system using FreeRTOS with shot counter and reload logic.
          </p>
          <p><strong>Tech:</strong> C, FreeRTOS, ARM, Interrupts</p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3>Signal Processing Filter Design</h3>
          <p>
            Designed and analyzed filters for biomedical signals using MATLAB.
          </p>
          <p><strong>Tech:</strong> MATLAB, LTSpice, Analog Design</p>
        </div>

      </section>
    </div>
  )
}

export default App