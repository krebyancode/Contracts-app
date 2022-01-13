import React, { useRef, useState, useEffect } from "react";
import "../styling/layout.css";
import "../styling/horizontal.css";
import Split from "react-split";
import HorizontalTop from "./layout/horizontal/HorizontalTop";
import HorizontalBottom from "./layout/horizontal/HorizontalBottom";

const Layout = () => {
  const [sizeTop, setSizeTop] = useState(0);
  const [sizeBottom, setSizeBottom] = useState(0);
  const [contracts, setContracts] = useState(
    localStorage.length === 0
      ? []
      : JSON.parse(localStorage.getItem("contracts"))
  );
  const [filteredContracts, setFilteredContracts] = useState([]);
  const divContainer = useRef(null);
  const [columns, setColumns] = useState(["ID", "Year", "Amount", "Type"]);

  const checkSize = () => {
    setSizeTop(
      divContainer.current.parent.firstElementChild.style.width.substring(5, 7)
    );
    setSizeBottom(100 - sizeTop);
  };

  useEffect(() => {
    checkSize();
    setFilteredContracts(contracts);
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  const addContract = (newContract) => {
    const addNewContract = { ...newContract };
    setContracts([...contracts, addNewContract]);
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
        <HorizontalTop
          sizes={sizeTop}
          filteredContracts={filteredContracts}
          filterContracts={filterContracts}
          contracts={contracts}
          columns={columns}
        />
        <HorizontalBottom sizes={sizeBottom} addContract={addContract} />
      </Split>
    </div>
  );
};

export default Layout;
