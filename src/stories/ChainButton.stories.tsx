import type { Meta, StoryObj } from "@storybook/react";
import { ChainButton } from "../components";

const meta: Meta = {
  title: "Chain/ChainButton",
  component: ChainButton,
} satisfies Meta<typeof ChainButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
