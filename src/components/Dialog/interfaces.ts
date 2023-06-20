import { Ref } from "vue";

export interface DialogProviderProp {
  isOpen: Ref<boolean>;
  open: () => void;
  close: () => void;
}
