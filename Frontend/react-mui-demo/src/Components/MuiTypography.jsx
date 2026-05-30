import React from "react";
import { Button, Stack, Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <Stack spacing={2} direction="column">
      <Typography className="h1">h1 Heading</Typography>
      <Button variant="outlined" href="https://google.com">
        text
      </Button>
    </Stack>
  );
};

export default MuiTypography;
