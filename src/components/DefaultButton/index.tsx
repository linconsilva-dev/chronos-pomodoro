import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton(props: DefaultButtonProps) {
  const { icon, color, ...rest } = props;
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
}
