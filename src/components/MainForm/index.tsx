import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";

import styles from "./styles.module.css";

export function MainForm() {
  return (
    <>
      <form className={styles.form} action=''>
        <div className={styles.formRow}>
          <DefaultInput
            labelText='task:'
            id='meuInput'
            type='text'
            placeholder='Digite algo aqui'
          />
        </div>

        <div className={styles.formRow}>
          <p>Nesse ciclo foque por 25 min.</p>
        </div>

        <div className={styles.formRow}>
          <Cycles />
        </div>

        <div className={styles.formRow}>
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
}
