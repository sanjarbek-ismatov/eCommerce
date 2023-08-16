"use client";
import Button from "../Button";
import SearchInput from "../SearchInput";
import "./SidePanel.css";
import { getTranslation } from "@internalization";
import { useState } from "react";

function SidePanel() {
  const [show, setShow] = useState(false);
  const t = getTranslation("uz");
  return (
    <>
      <div
        style={{
          left: show ? "0" : "-100%",
        }}
        className={`fixed  md:hidden block h-screen w-96 bg-white top-0 left-0 z-30 p-4`}
      >
        <div className="flex justify-between items-center my-3">
          <span>{t.menu}</span>
          <i onClick={() => setShow(!show)} className="fa-solid fa-xmark"></i>
        </div>
        <div>
          <SearchInput full placeholder={t["enter-product-name"]} />
          <Button full>{t.search}</Button>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
