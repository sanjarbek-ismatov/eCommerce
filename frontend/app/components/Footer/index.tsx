"use client";
import "./Footer.css";
import categories from "data/categories.json";
import { categorySplitter } from "@/app/utils/categorysplitter";
import { useCallback, useEffect, useState } from "react";
function Footer() {
  const [splitted, setSplitted] = useState<string[][]>();
  const splitter = useCallback(() => categorySplitter(10, categories), []);
  useEffect(() => {
    splitter().then((data) => setSplitted(data));
  }, [splitter]);
  return (
    <>
      <div
        className={`grid grid-cols-${
          splitted && splitted.length + 3
        } grid-rows-1 mt-56`}
      >
        {splitted?.map((e, i) => (
          <>
            <div key={i}>
              <h4 className="font-semibold text-slate-900 text-lg my-3">
                Kategoriyalar
              </h4>
              {e.map((e: any, i: number) => (
                <p className="text-slate-600 text-md leading-8" key={i}>
                  {e.name}
                </p>
              ))}
            </div>
          </>
        ))}
        <div>
          <h4 className="font-semibold text-slate-900 text-lg my-3">
            Biz haqimizda biling
          </h4>
          <p className="text-slate-600 text-md leading-8">Kompaniya</p>
          <p className="text-slate-600 text-md leading-8">Haqida</p>
          <p className="text-slate-600 text-md leading-8">Blog</p>
          <p className="text-slate-600 text-md leading-8">Yordam markazi</p>
          <p className="text-slate-600 text-md leading-8">Bizning qiymatimiz</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 text-lg my-3">
            Xaridorlar uchun
          </h4>
          <p className="text-slate-600 text-md leading-8">To`lovlar</p>
          <p className="text-slate-600 text-md leading-8">Yetkazib berish</p>
          <p className="text-slate-600 text-md leading-8">
            Mahsulotni qaytarish
          </p>
          <p className="text-slate-600 text-md leading-8">FAQ</p>
          <p className="text-slate-600 text-md leading-8">Shop Checkout</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 text-lg my-3">
            Sotuvchiga aylaning
          </h4>
          <p className="text-slate-600 text-md leading-8">Imkoniyatlar</p>
          <p className="text-slate-600 text-md leading-8">
            Sotuvchiga aylaning
          </p>
          <p className="text-slate-600 text-md leading-8">Daromad</p>
          <p className="text-slate-600 text-md leading-8">
            G`oyalar va qo`llanmalar
          </p>
          <p className="text-slate-600 text-md leading-8">Yangi sotuvchilar</p>
        </div>
      </div>
      <div className="py-8 mt-3 bg-gray-300 text-center">
        <p>Barcha huquqlar himoyalangan!</p>
      </div>
    </>
  );
}

export default Footer;
