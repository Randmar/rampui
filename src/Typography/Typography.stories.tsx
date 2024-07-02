import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => {
    return (
      <Typography color='subdued'>Heading</Typography>
    );
  },
};