import Link from "next/link";
import classes from "./Button.module.css";

function Button({ link, children, onClick }) {
  if (!link) {
    return (
      <button className={classes.btn} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}

export default Button;
