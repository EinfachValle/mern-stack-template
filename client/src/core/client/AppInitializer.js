import "@/core/i18n";
import { setApplicationTouched } from "@/store/actions/uiActions";
import { store } from "@/store/store";

export const trapApplicationTouched = () => {
  document.body.addEventListener("click", () =>
    store.dispatch(setApplicationTouched()),
  );
};
