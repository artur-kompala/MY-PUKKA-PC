import { Box, Slider,ThemeProvider,createTheme } from "@mui/material";
import React from "react";

  const theme = createTheme({
    palette: {
      violet: {
        main: '#4f46e5'
      },
    },
  });

export default function RangeSlider({handleChangeSlider,value,min,max}) {
    
  
    return (
      <Box sx={{ width: 200 ,marginX: 5}}>
        <ThemeProvider theme={theme}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChangeSlider}
          valueLabelDisplay="auto"
          color="violet"
          max={max}
          min={min}
        />
        </ThemeProvider>
        
      </Box>
    );
  }