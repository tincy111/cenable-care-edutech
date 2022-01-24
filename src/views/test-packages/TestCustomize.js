import React, { useState } from "react";
import {
  Grid,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  Button
} from "@mui/material";
import { ExpandIcon, TestPackageListIcon } from "../../assets/icons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import TestPackageSearch from "./TestPackageSearch";

const usestyles = makeStyles({
  icon: {
    backgroundColor: "#634699",
    padding: "3px",
    borderRadius: "5px",
    margin: "10px",
  },
});

const tests = [
  { id: "1", content: "Test Name/Chapter Name1" },
  { id: "2", content: "Test Name/Chapter Name2" },
  { id: "3", content: "Test Name/Chapter Name3" },
  { id: "4", content: "Test Name/Chapter Name4" },
  { id: "5", content: "Test Name/Chapter Name5" },
  { id: "6", content: "Test Name/Chapter Name6" },
  { id: "7", content: "Test Name/Chapter Name7" },
  { id: "8", content: "Test Name/Chapter Name8" },
  { id: "9", content: "Test Name/Chapter Name9" },
  { id: "10", content: "Test Name/Chapter Name10" },
];

const taskStatus = {
  all: {
    name: "all",
    items: tests,
  },
  customized: {
    name: "Customized",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } 
  // else {
  //   const column = columns[source.droppableId];
  //   const copiedItems = [...column.items];
  //   const [removed] = copiedItems.splice(source.index, 1);
  //   copiedItems.splice(destination.index, 0, removed);
  //   setColumns({
  //     ...columns,
  //     [source.droppableId]: {
  //       ...column,
  //       items: copiedItems,
  //     },
  //   });
  // }
};

const TestCustomize = () => {
  const [columns, setColumns] = useState(taskStatus);
  const classes = usestyles();
  return (
    <Grid container xs={12} >
      <Grid item xs={12} md={6}>
          <TestPackageSearch />
        </Grid>
        <Grid item xs={12} md={6}>
         <Button>Next</Button>
        </Grid>

      <Grid item style={{ display: "flex" }}>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Grid item key={columnId}>
                <Grid item style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <Grid
                          item
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#634699"
                              : "lightgrey",
                            padding: 10,
                            width: 700,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <Grid
                                      item
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#fff"
                                          : "#fff",
                                        color: "#634699",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <TableBody>
                                        <TableRow
                                          sx={{
                                            "& > *": { borderBottom: "none" },
                                          }}
                                        >
                                          <TableCell>
                                            <TestPackageListIcon
                                              className={classes.icon}
                                            />
                                          </TableCell>
                                          <TableCell
                                            align="right"
                                            component="th"
                                            scope="row"
                                            style={{
                                              fontWeight: "bold",
                                              color: "#634699",
                                            }}
                                          >
                                            {item.content}
                                          </TableCell>
                                          {/* <TableCell align="right" margin="18px">
                                          <ExpandIcon  />
                                        </TableCell> */}
                                        </TableRow>
                                      </TableBody>
                                    </Grid>
                                  );
                                }}
                              </Draggable>
                            );
                          })}

                          {provided.placeholder}
                        </Grid>
                      );
                    }}
                  </Droppable>
                </Grid>
              </Grid>
            );
          })}
        </DragDropContext>
      </Grid>
    </Grid>
  );
};

export default TestCustomize;
