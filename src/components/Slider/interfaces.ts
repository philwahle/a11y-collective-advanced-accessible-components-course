import { Ref } from "vue";

export interface SliderInjectProps {
  next: () => void;
  prev: () => void;
  itemsCountRef: Ref<number>;
  activeSlideRef: Ref<number>;
  sliderThumbsRef: Ref<HTMLButtonElement[]>;
  thumbCountRef: Ref<number>;
  setActiveSlide: (index: number) => void;
}
