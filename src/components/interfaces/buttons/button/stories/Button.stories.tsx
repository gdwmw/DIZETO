import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { FaCrown } from "react-icons/fa";

import Layout from "./Layout";

const meta: Meta<typeof Layout> = {
  args: { onClick: fn(() => alert("Clicked!")) },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
  component: Layout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Interfaces/Buttons/Button",
};

export default meta;
type Story = StoryObj<typeof Layout>;

/* eslint-disable perfectionist/sort-objects */
export const Primary: Story = {
  args: {
    children: (
      <>
        <FaCrown data-testid="testing-icon" />
        Button
      </>
    ),
  },
};
/* eslint-enable perfectionist/sort-objects */
