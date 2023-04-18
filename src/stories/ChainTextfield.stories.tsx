import type { Meta, StoryObj } from "@storybook/react";
import { ChainTextfield } from "../components";

const meta: Meta = {
  title: "Chain/ChainTextfield",
  component: ChainTextfield,
} satisfies Meta<typeof ChainTextfield>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
