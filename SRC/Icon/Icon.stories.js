import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    property1: {
      options: ["close", "open"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "close",
    className: {},
    iconEyeVector: "/img/vector-7.svg",
    iconEyeImg: "/img/vector-8.svg",
  },
};
