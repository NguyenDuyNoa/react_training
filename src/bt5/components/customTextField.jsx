import { Box, TextField, InputAdornment } from "@mui/material";
import React from "react";

function CustomTextField({
  label = "",
  type = "text",
  value = "",
  onChange,
  required,
  error,
  helperText,
  placeholder = "",
  color,
  icon // Icon component
}) {
  return (
    <div className="opacity-80">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "full" },
        }}
      >
        <TextField
          size="small"
          label={label}
          type={type}
          value={value}
          onChange={onChange}
          variant="standard"
          placeholder={placeholder}
          required={required ?? null}
          helperText={helperText}
          error={error}
          color={color}
          InputProps={{
            endAdornment: icon ? (
              <InputAdornment position="start">
                {icon}
              </InputAdornment>
            ) : null,
          }}
        />
      </Box>
    </div>
  );
}

export default CustomTextField;
