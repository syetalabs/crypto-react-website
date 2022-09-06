import React, { useLayoutEffect, useRef } from "react";
import whale from "../../Imgs/SVGComponets/whale.svg";
import fish from "../../Imgs/SVGComponets/fish.svg";
import wave from "../../Imgs/SVGComponets/wave.svg";
import captain from "../../Imgs/SVGComponets/captain.svg";
import bitcoin from "../../Imgs/SVGComponets/bitcoin.svg";
import binance from "../../Imgs/SVGComponets/binance.svg";

import robot from "../../Imgs/SVGComponets/robot.svg";
import bracket from "../../Imgs/SVGComponets/bracket.svg";
import graph from "../../Imgs/SVGComponets/graph.svg";
import customs from "../../Imgs/SVGComponets/customs.svg";
import light from "../../Imgs/SVGComponets/light.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {
  faCloud,
  faTowerCell,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeMainComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btcRef = useRef<HTMLImageElement>(null);
  const whaleRef = useRef<HTMLImageElement>(null);
  const fishRef = useRef<HTMLImageElement>(null);
  const waveRef = useRef<HTMLImageElement>(null);

  const entry = useIntersectionObserver(containerRef, {});



  const renderAnimation = (ev: MouseEvent | { clientX: number, clientY: number }) => {
    const { clientX: x, clientY: y } = ev;

    btcRef.current!.style.transform = `translate(${-30 + x / 200}px, ${180 + -y / 200
      }px)`;

    whaleRef.current!.style.transform = `translate(${-100 + +x / 100}px, ${230 + -y / 100
      }px)`;

    fishRef.current!.style.transform = `translate(${-200 + x / 20}px, ${450 + -y / 20
      }px)`;

    waveRef.current!.style.transform = `translate(${10 + x / 10}px, ${170 + -y / 10
      }px)`;
  };

  const mouseMoveHandler = (ev: MouseEvent) => {
    window.requestAnimationFrame(() => renderAnimation(ev));
  };

  useLayoutEffect(() => {
    renderAnimation({ clientX: 0, clientY: 0 });
    setTimeout(() => {
      if (entry?.isIntersecting) {
        window.addEventListener("mousemove", mouseMoveHandler);
      }
    }, 2000); // trigger after fading animation end

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  const mainTitle = (
    <div className="text-secondary text-4xl md:text-5xl font-black">
      Connect <br /> TradingView <br />
      to Binance
    </div>
  );
  const subTitle = (
    <div className="text-colorid3b2eb70d text-lg font-black">
      and trade with tricks & <br />
      indicators <span className="font-normal">-or-</span> TradingView <br />
      strategies
    </div>
  );
  return (
    <div>
      <div
        ref={containerRef}
        className="w-full h-screen md:h-homeBaner bg-gradient-to-t overflow-hidden from-gradiant2 to-gradiant1 flex justify-start flex-col items-center"
      >

        <div className="max-w-6xl justify-center flex items-start flex-col  w-full">
          <div className="w-full h-40 md:h-0 flex md:flex-row flex-col overflow-visible font-sans items-center md:items-start">
            {/* Web */}
            <div className=" hidden md:flex   z-10">
              <div
                className="border-primary rounded-full flex overflow-visible justify-center items-center"
                style={{
                  height: 600,
                  width: 600,
                  borderWidth: 15,
                  transform: `translate(${10}px, ${0}px)`,
                }}
              >
                <div
                  className="bg-primary md:h-avatar md:w-avatar hidden md:flex items-center p-1 rounded-full"
                  style={{
                    transform: `translate(${-70}px, ${-100}px)`,  
                    width:175,
                  }}
                >
                  <img alt="" src={captain} style={{ height: 130 }} className="" />
                </div>
                <div
                  style={{
                    height: 600,
                    width: 600,
                  }}
                  className="text-start justify-center flex items-start pl-12 flex-col"
                >
                  {mainTitle}
                  {subTitle}
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className=" md:hidden flex z-10">
              <div
                className="border-primary rounded-full flex flex-col overflow-visible justify-center items-center"
                style={{
                  height: 450,
                  width: 450,
                  borderWidth: 15,
                  transform: `translate(${10}px, ${50}px)`,
                }}
              >
                <div
                  className="bg-primary flex h-24 w-24 items-center p-1 rounded-full"
                  style={{
                    transform: `translate(${0}px, ${  -50}px)`,
                  }}
                >
                  <img alt="" src={captain} style={{ height: 130 }} className="" />
                </div>
                <div
                  style={{
                    height: 450,
                    width: 450,
                  }}
                  className="text-start justify-center flex items-start pl-12 -translate-y-16 flex-col"
                >
                  {mainTitle}
                  {subTitle}
                </div>
              </div>
            </div>
          </div>
          <div ref={btcRef} className="w-full flex  justify-end h-0 z-0">
            <img
              src={bitcoin}
              style={{
                height: 130,
              }}
              className="animate-bitcoin-intro p-4 md:p-0"
              alt=""
            />
          </div>
          <div ref={whaleRef} className="w-full flex justify-end h-0 z-10">
            <img
              src={whale}
              style={{
                height: 356,
              }}
              alt=""
              className="animate-whale-intro p-7 md:p-0"
            />
          </div>
          <div className="w-full flex p-7 md:p-0 justify-end md:justify-center h-0 z-20" ref={fishRef}>
            <img
              src={fish}
              style={{
                height: 80,
              }}

              alt=""
              className="animate-fish-intro"
            />
          </div>
          <div ref={waveRef} className="w-full flex justify-end h-0 z-10">
            <img
              src={wave}
              style={{
                height: 130,
              }}
              className="animate-wave-intro"

              alt=""
            />
          </div>
          {/*  */}
        </div>
      </div>


      <div className="h-homeBaner w-full bg-colorid5658bf4e text-colorid3b2eb70d text-center flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl ">
          <div className="flex flex-row justify-center items-center">
            <div className="justify-center w-fit items-center flex flex-col">
              <FontAwesomeIcon
                icon={faCloud}
                className="h-8  md:h-12  mb-10 text-lightBlue"
              />
              <span className="text-3xl font-mono">1</span>
              <span className=" font-light text-lg pt-4">Trending View</span>
            </div>

            <div className="justify-center overflow-hidden w-full items-start h-20 flex flex-col">
              <div className="h-3 bg-colorid4e749ecb w-10 translate-y-2 rounded-full  top-0  animate-white-bus1 z-10" />
              <div className="animate-dots-anim border-b-4 border-text border-dotted w-screen" />
            </div>

            <div className="justify-center w-fit items-center flex flex-col">
              <FontAwesomeIcon
                icon={faTowerCell}
                className="h-8  md:h-12  mb-10 text-primary animate-lightning"
              />
              <span className="text-3xl font-mono">2</span>
              <span className=" font-light text-lg pt-4">aleeert.com</span>
            </div>

            <div className="justify-center overflow-hidden w-full items-start h-20 flex flex-col">
              <div className="h-3 bg-colorid4e749ecb w-10 rounded-full translate-y-2  animate-white-bus2 z-10" />
              <div className="animate-dots-anim border-b-4 border-text border-dotted w-screen" />
            </div>

            <div className="justify-center w-fit items-center flex flex-col">
              <img
                alt=""
                src={binance}
                className="h-8  md:h-12 mb-10 text-secondary"
              />
              <span className="text-3xl font-mono">3</span>
              <span className=" font-light text-lg pt-4">Binance</span>
            </div>
          </div>
        </div>
        <div className="max-w-2xl pt-14 text-2xl font-light ">
          <span className="font-bold">aleeert.com </span>
          is online-service that gives ability to connect TradingView with
          Binance and automatically convert TradingView alerts to orders on
          cryptocurrency exchange
        </div>
      </div>

      <div className="w-full pb-16 bg-colorid7e810469 text-text text-center flex flex-col justify-center items-center">
        <div className="w-full pt-16 md:pt-16 max-w-4xl flex flex-col text-2xl md:text-5xl font-black z-10">
          <span className="font-light text-lg md:text-3xl z-10">REASONS</span>
          <span className="z-10">Why Do I Trade Crypto From TradingView</span>
          <span className="text-big5 h-0 text-secondary font-black opacity-40 z-0 -translate-y-20 md:-translate-y-40">
            5
          </span>
        </div>
        <span className="text-xl pt-5">Not Using Interface on Exchange</span>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 justify-center pt-16 items-center md:text-center">
          <div className="md:max-w-60 w-full flex md:justify-center text-start md:text-center items-center flex-row md:flex-col p-2">
            <img alt="" src={customs} className="h-20 md:h-32 mr-3" />
            <span className="text-lg md:text-2xl">
              I have access to all of TV indicators, including my custom
            </span>
          </div>
          <div className="md:max-w-60 w-full flex md:justify-center text-start md:text-center items-center flex-row md:flex-col p-2">
            <img alt="" src={graph} className="h-20 md:h-32 mr-3" />
            <span className="text-lg md:text-2xl">
              I have access to all of TV indicators, including my custom
            </span>
          </div>
          <div className="md:max-w-60 w-full flex md:justify-center text-start md:text-center items-center flex-row md:flex-col p-2">
            <img alt="" src={bracket} className="h-20 md:h-32 mr-3" />
            <span className="text-lg md:text-2xl">
              I have access to all of TV indicators, including my custom
            </span>
          </div>
        </div>
        <div className="max-w-xl grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center">
          <div className="md:max-w-60 w-full flex md:justify-center text-start md:text-center items-center flex-row md:flex-col p-2">
            <img alt="" src={light} className="h-20 md:h-32 mr-3" />
            <span className="text-lg md:text-2xl">
              I have access to all of TV indicators, including my custom
            </span>
          </div>
          <div className="md:max-w-60 w-full flex md:justify-center text-start md:text-center items-center flex-row md:flex-col p-2">
            <img alt="" src={robot} className="h-20 md:h-32 mr-3" />
            <span className="text-lg md:text-2xl">
              I have access to all of TV indicators, including my custom
            </span>
          </div>
        </div>
      </div>

      <div className="w-full pb-16 bg-colorid7e810469 text-text text-center flex flex-col justify-center items-center">
        <div className="w-full pt-16 md:pt-16 max-w-4xl flex flex-col text-2xl md:text-5xl font-black z-10">
          <span className="font-light text-lg md:text-3xl z-10">
            LIST OF POSSIBILITIES
          </span>
          <span className="z-10">What Can I Do Using Aleeert</span>
          {/* <span className='text-big5 h-0 text-secondary font-black opacity-40 z-0 -translate-y-20 md:-translate-y-40'>5</span> */}
        </div>
        <span className="text-xl pt-5">With TradingView chart</span>
        <div className="max-w-xl w-full text-start text-lg pt-10">
          <ol className="list-decimal space-y-3 pl-16">
            <li>
              Automatically{" "}
              <a className="text-primary font-bold " href="#trading-from-chart">
                convert TradingView alerts
              </a>{" "}
              to real orders on cryptocurrency exchange
            </li>
            <li>
              Use TradingView indicators &amp; strategies as{" "}
              <a
                className="text-primary font-bold"
                href="#signals-from-strategies"
              >
                trading bots
              </a>
            </li>
            <li>
              Automatically execute{" "}
              <a
                className="text-primary font-bold"
                href="#signals-from-indicators"
              >
                trading signals
              </a>{" "}
              from indicators &amp; strategies I write on Pine script{" "}
              <em>
                <small>(TradingView)</small>
              </em>
            </li>
            <li>
              Trade using indicators &amp; strategies from other TradingView
              authors as well
            </li>
            <li>
              Place orders out of range{" "}
              <em>
                <small>(e.g. on BNBUPUSDT)</small>
              </em>
            </li>
            <li>
              Trade with <strong>percent</strong> <small>(%)</small> or fixed{" "}
              <strong>amount</strong> <small>($)</small> of balance
            </li>
            <li>
              Limit, Stop Limit, Market, <strong>Stop Market</strong>,{" "}
              <strong>Trailing Stop</strong>, OCO orders
            </li>
            <li>Trade pair A using chart of pair B</li>
            <li>
              Trade{" "}
              <a className="text-primary font-bold" href="#trading-breakout">
                multiple pairs
              </a>{" "}
              on the same chart
            </li>
            <li>
              Reduce volatility via another pair{" "}
              <em>
                <small>(e.g. BNBUPUSDT via BNBUSDT)</small>
              </em>
            </li>
            <li>
              Automatically set <strong>Take Profit</strong> and{" "}
              <strong>Stop Loss</strong>
            </li>
            <li>
              Set <strong>multiple</strong> TP/SL orders
            </li>
            <li>
              Set <strong>conditions</strong> for placing orders
            </li>
            <li>
              Trade cryptocurrency right{" "}
              <a className="text-primary font-bold" href="#trading-from-chart">
                from TradingView chart
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
