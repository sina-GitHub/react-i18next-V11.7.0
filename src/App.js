import React, {Suspense} from "react";
import {useTranslation} from "react-i18next";

function App() {
  const {t, i18n} = useTranslation();

  return (
    <Suspense fallback="loading">
      <h1>{t("hello world")}</h1>
      <div>
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          english
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("fa");
          }}
        >
          فارسی
        </button>
      </div>
    </Suspense>
  );
}

export default App;
