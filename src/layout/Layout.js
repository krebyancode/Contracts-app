import React, { useRef, useState, useEffect } from "react";
import "../styling/layout.css";
import "../styling/verticalsplit.css";
import Split from "react-split";
import VerticalLeft from "./VerticalLeft";
import VerticalRight from "./VerticalRight";

// columns over the table
const columns = ["ID", "Year", "Amount", "Type", "Edit", "Delete"];

const Layout = () => {
  // section sizes (left & right)
  const [sizeLeft, setSizeLeft] = useState(0);
  const [sizeBottom, setSizeBottom] = useState(0);

  // get contracts from local storage
  const [contracts, setContracts] = useState(
    localStorage.length === 0
      ? []
      : JSON.parse(localStorage.getItem("contracts"))
  );
  // filtered contracts to send the table
  const [filteredContracts, setFilteredContracts] = useState([]);

  const divContainer = useRef(null);

  // to change layout display on the left section
  const [styleMenu, setStyleMenu] = useState(false);
  // states to define edited contract
  const [editedContract, setEditedContract] = useState("");
  const [editedContractID, setEditedContractID] = useState("");

  const checkSize = () => {
    // if left section size below 42%, layout will change to display better.
    if (
      divContainer.current.parent.firstElementChild.style.width.substring(
        5,
        7
      ) < 42
    ) {
      setStyleMenu(true);
    } else {
      setStyleMenu(false);
    }
    setSizeLeft(
      divContainer.current.parent.firstElementChild.style.width.substring(5, 7)
    );
    setSizeBottom(100 - sizeLeft);
  };

  useEffect(() => {
    // any time contracts list change, filtered contracts restated and stored to local storage.
    checkSize();
    setFilteredContracts(contracts);
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  const addContract = (newContract) => {
    // if there is a contract to be edited, edit option is activated. Otherwise, new contract is added to contracts list.
    if (!editedContractID) {
      const addNewContract = { ...newContract };
      setContracts([...contracts, addNewContract]);
    } else {
      setContracts(
        contracts.map((contract) => {
          if (contract.id === editedContractID) {
            return {
              ...contract,
              id: newContract.id,
              year: newContract.year,
              amount: newContract.amount,
              type: newContract.type,
            };
          }
          return contract;
        })
      );
      setEditedContract("");
      setEditedContractID("");
    }
  };

  const editContract = (id) => {
    const editedItem = contracts.find((contract) => contract.id === id);
    setEditedContract(editedItem);
    setEditedContractID(id);
  };

  const deleteContract = (id) => {
    setContracts(contracts.filter((contract) => contract.id !== id));
  };

  const filterContracts = (year) => {
    // send as a prop to filter selected years
    if (year === "all") {
      setFilteredContracts(contracts);
    } else {
      const filtered = contracts.filter((contract) => {
        if (contract.year === year) {
          return contract;
        }
      });
      setFilteredContracts(filtered);
    }
  };

  return (
    <div className="container" onMouseMove={checkSize}>
      <Split className="split" ref={divContainer}>
        <VerticalLeft
          styleMenu={styleMenu}
          sizes={sizeLeft}
          filteredContracts={filteredContracts}
          filterContracts={filterContracts}
          contracts={contracts}
          columns={columns}
          deleteContract={deleteContract}
          editContract={editContract}
        />
        <VerticalRight
          sizes={sizeBottom}
          addContract={addContract}
          editedContract={editedContract}
        />
      </Split>
    </div>
  );
};

export default Layout;
