import type { Meta, StoryObj } from "@storybook/react";
import { ChainButton } from "../components";

export const ChainButtonStory = () => {
  return (
    <ChainButton />
  );
};

const meta: Meta = {
  title: "Chain/ChainButtonStory",
  component: ChainButtonStory,
} satisfies Meta<typeof ChainButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

