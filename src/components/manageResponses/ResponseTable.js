import React, { useState } from "react";
import styled, { css } from "styled-components";

const ResponseTable = () => {
  const [activeMenu, setMenu] = useState("Yes");
  return (
    <TableWrapper className="flex-row">
      <Sidebar>
        <MenuItem onClick={() => setMenu("Yes")} active={activeMenu === "Yes"}>
          Yes
        </MenuItem>
        <MenuItem
          onClick={() => setMenu("Maybe")}
          active={activeMenu === "Maybe"}
        >
          Maybe
        </MenuItem>
        <MenuItem onClick={() => setMenu("No")} active={activeMenu === "No"}>
          No
        </MenuItem>
      </Sidebar>
    </TableWrapper>
  );
};

export default ResponseTable;

const TableWrapper = styled.section`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  min-height: 300px;
`;

const Sidebar = styled.div`
  background: #f1f1f1;
  border: 1px solid #cccccc;
  border-radius: 5px 0 0 5px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  height: 55px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 500;
  border-bottom: 1px solid #ccc;
  transition: all 50ms;

  :first-child {
    border-top: none;
    border-radius: 4px 0 0 0;
  }

  :hover {
    background-color: #eaeaea;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #fff;
      :hover {
        background-color: #fff;
      }
    `}
`;
