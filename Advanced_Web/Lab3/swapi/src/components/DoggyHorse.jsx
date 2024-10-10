import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DoggyHorse = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "rgba(20, 20, 20, 0.3)", // Semi-transparent background
        backdropFilter: "blur(10px)", // Optional: add a blur effect
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Shadow for depth
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}> {/* Darker header */}
            <TableCell align="center" sx={{ color: "white" }}>
              Name
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Height
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Hair Color
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Gender
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map((character) => (
            <TableRow
              key={character.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Highlight on hover
                },
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                {character.name}
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                {character.height}
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                {character.hair_color}
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                {character.gender}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DoggyHorse;
