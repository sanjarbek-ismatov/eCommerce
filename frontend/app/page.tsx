"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Swiper,
  Menu,
  Navbar,
  Categories,
  PopularProducts,
  About,
  Footer,
  Modal,
  SidePanel,
  Button,
  ModalFormRegister,
  ModalFormLogin,
} from "./components";
export default function Home() {
  const [show, setShow] = useState<"login" | "register" | "">("");
  const closeRegisterRef = useRef<HTMLElement>(null);
  const openRegisterRef = useRef<HTMLElement>(null);
  const closeLoginRef = useRef<HTMLElement>(null);
  const openLoginRef = useRef<HTMLElement>(null);
  const handleShowRegister = useCallback(() => setShow("register"), []);
  useEffect(() => {
    closeRegisterRef.current?.addEventListener("click", handleShowRegister);
    openRegisterRef.current?.addEventListener("click", handleShowRegister);

    return () => {
      closeRegisterRef.current?.removeEventListener(
        "click",
        handleShowRegister
      );
      openRegisterRef.current?.removeEventListener("click", handleShowRegister);
    };
  }, [handleShowRegister]);

  return (
    <div className="container max-w-[1300px] mx-auto">
      <Navbar ref={openRegisterRef} />
      <Menu />
      <Swiper />
      <Categories />
      <PopularProducts />
      <About />
      <Footer />
      <SidePanel />
      {show === "register" && (
        <Modal ref={closeRegisterRef} title="Hisob yaratish">
          <ModalFormRegister />
        </Modal>
      )}
      {show === "login" && (
        <Modal ref={closeLoginRef} title="Hisob yaratish">
          <ModalFormLogin />
        </Modal>
      )}
    </div>
  );
}
