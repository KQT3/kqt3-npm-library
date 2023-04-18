import type { Meta, StoryObj } from "@storybook/react";
import { ChainTextfield } from "../components";

export const ChainTextfieldStory = () => {
  return (
    <ChainTextfield />
  );
};

const meta: Meta = {
  title: "Chain/ChainTextfieldStory",
  component: ChainTextfieldStory,
} satisfies Meta<typeof ChainTextfieldStory>;

export default meta;

type Story = StoryObj<typeof meta>;
