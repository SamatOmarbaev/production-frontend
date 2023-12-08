import { useTranslation } from "react-i18next";
import styles from "./LangSwitcher.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
