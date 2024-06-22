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
  title: "Components/Interfaces/Thumbnail",
};

export default meta;
type Story = StoryObj<typeof Layout>;

/* eslint-disable perfectionist/sort-objects */
export const Primary: Story = {
  args: {},
};
/* eslint-enable perfectionist/sort-objects */
