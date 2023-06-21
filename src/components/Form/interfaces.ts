import { Ref } from "vue";

export interface FormProviderProp {
  errors: Ref<Record<string, string>>;
}
