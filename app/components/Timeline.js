"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Timeline.module.scss";

const Timeline = () => {

  const events = [
    { id: 1, title: "Nascimento do Projeto", date: "23/03", color: "#6ec5c4", icon: "/icon/seedling-solid.svg"},
    { id: 2, title: "Mentorias para Startup", date: "08/05", color: "#3edad8", icon: "/icon/lightbulb-regular.svg" },
    { id: 3, title: "Tech & Invest CG", date: "09/05", color: "#37c9ef", icon: "/icon/line-chart.svg" },
    { id: 4, title: "Roda de Conversa", date: "10/05", color: "#18afd6", icon: "/icon/conversation.svg" },
    { id: 5, title: "Be T3ch", date: "11/05", color: "#1c88cf", icon: "/icon/robot.svg" },
    { id: 6, title: "Compeek", date: "05/05", color: "#13538a", icon: "/icon/computer.svg" },
  ];

  return (
    <div>
      <div className={styles.textbox}>
        <h1>Timeline</h1>
        <p>Acompanhe a nossa trajetória</p>
      </div>

      <div className={styles.container}>
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={event.id}
              className={styles.cards}
            >
              {isEven ? (
                <>
                  <div className={styles.circle} style={{ backgroundColor: event.color }}><img src={event.icon} className={styles.icon}/></div>
                  <div className={styles.line} style={{ backgroundColor: event.color }}></div>
                  <div className={styles.bar} style={{ backgroundColor: event.color }}></div>
                  <br></br>
                  <motion.div
                    className={styles.card}
                  >
                    <p style={{color: event.color}}><b>{event.title}</b></p>
                    <p style={{color: event.color}}><b>{event.date}</b></p>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className={styles.card}
                  >
                    <p style={{color: event.color}}><b>{event.title}</b></p>
                    <p style={{color: event.color}}><b>{event.date}</b></p>
                  </motion.div>
                  <br></br>
                  <div className={styles.bar} style={{ backgroundColor: event.color }}></div>
                  <div className={styles.line} style={{ backgroundColor: event.color }}></div>
                  <div className={styles.circle} style={{ backgroundColor: event.color }}><img src={event.icon} className={styles.icon}/></div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;