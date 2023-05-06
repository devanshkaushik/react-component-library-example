import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Button from "./Button"

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta

export const Main: Story = {
  render: () => (
    <Button sx={{ roundness: 2 }} variant="standard">
      Submit
    </Button>
  ),
}

export const Contained: Story = {
  render: () => <Button variant="outlined">Submit</Button>,
}
