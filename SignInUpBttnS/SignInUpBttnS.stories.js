import { SignInUpBttnS } from ".";

export default {
  title: "Components/SignInUpBttnS",
  component: SignInUpBttnS,
  argTypes: {
    property1: {
      options: ["two", "four", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "two",
    className: {},
    btnLanguageClassName: {},
    btnLanguage: "/img/btn-language-4.png",
    text: "Есептік жазбаңыз жоқ па?",
    text1: "Тіркелу",
  },
};
