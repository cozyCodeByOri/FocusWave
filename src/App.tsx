import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import { Trash2 } from "lucide-react";
import styles from "./styles/App.module.css";
import Footer from "./components/Footer";
import Pomodoro from "./components/pomodoro";
import { Plus } from "lucide-react";


type Tarea = {
  id: number;
  texto: string;
};

function App() {
  const [tarea, setTarea] = useState<string>("");
  const [tareas, setTareas] = useState<Tarea[]>(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const agregarTarea = () => {
    if (tarea.trim() === "") return;

    const nuevaTarea: Tarea = {
      id: Date.now(),
      texto: tarea,
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
  };

  const borrarTarea = (id: number) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
      <div className={styles.appWrapper}>
        <div className={styles.appContainer}>
          <header className={styles.headerStyles}>
            <h1 className={styles.titulo}>Core tasks for today</h1>
          </header>

          <ThemeToggle />

          <div className={styles.inputWrapper}>
        
              <input
                className={styles.inputNuevo}
                placeholder="Escribe una tarea..."
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
              />
              <button className={styles.botonAgregar} onClick={agregarTarea}>
                <Plus size={20} />
              </button>
            
          </div>

          <ul className={styles.contenedorElementos}>
            {tareas.map((t) => (
              <li className={styles.elementolista} key={t.id}>
                <span>{t.texto}</span>
                <button
                  className={styles.trashButton}
                  onClick={() => borrarTarea(t.id)}
                  aria-label="Eliminar tarea"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Pomodoro />

        <Footer />

      </div>
    </>
  );
}

export default App;
