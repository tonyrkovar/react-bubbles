import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'

import { removeColor, editTheColor, addColor } from '../actions'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const dispatch = useDispatch();
  console.log('colors in colorlist', colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(initialColor);



  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    dispatch(editTheColor(colorToEdit.id, colorToEdit))
  };


  const deleteColor = color => {
    dispatch(removeColor(color.id))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      <form onSubmit={() => dispatch(addColor(colorToAdd))}>
        <input
          type='text'
          name='color'
          placeholder='color name'
          value={colorToAdd.color}
          onChange={e => { setColorToAdd({ ...colorToAdd, color: e.target.value }) }}
        />
        <input
          type='text'
          name='hex'
          placeholder='color hex'
          value={colorToAdd.code.hex}
          onChange={e => { setColorToAdd({ ...colorToAdd, code: { hex: e.target.value } }) }}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default ColorList;
