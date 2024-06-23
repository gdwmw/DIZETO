import type { Meta, StoryObj } from "@storybook/react";

import Layout from "./Layout";

const meta: Meta<typeof Layout> = {
  args: {},
  argTypes: {},
  component: Layout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Interfaces/Cards/CardPackage",
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  args: {},
};
