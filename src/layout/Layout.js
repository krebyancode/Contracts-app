import React, { useRef, useState, useEffect } from "react";
import "../styling/layout.css";
import "../styling/verticalsplit.css";
import Split from "react-split";
import VerticalLeft from "./VerticalLeft";
import VerticalRight from "./VerticalRight";

const columns = ["ID", "Year", "Amount", "Type", "Edit", "Delete"];

const Layout = () => {
  const [sizeLeft, setSizeLeft] = useState(0);
  const [sizeBottom, setSizeBottom] = useState(0);
  const [contracts, setContracts] = useState(
    localStorage.length === 0
      ? []
      : JSON.parse(localStorage.getItem("contracts"))
  );
  const [filteredContracts, setFilteredContracts] = useState([]);
  const divContainer = useRef(null);
  const [styleMenu, setStyleMenu] = useState(false);
  const [editedContract, setEditedContract] = useState("");
  const [editedContractID, setEditedContractID] = useState("");

  const checkSize = () => {
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
    checkSize();
    setFilteredContracts(contracts);
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  console.log(editedContract);

  const addContract = (newContract) => {
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
