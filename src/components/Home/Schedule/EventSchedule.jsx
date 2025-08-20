"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EventCard } from "./ScheduleCards";
import { DaySwitcher } from "./DaySwitcher";
import { ScheduleBackground } from "./ScheduleBackground";
import { fetchEventsByDay } from "./schedule_data";
import "./Schedule.css";

export default function EventSchedule() {
  const [activeDay, setActiveDay] = useState(1);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events whenever activeDay changes
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchEventsByDay(activeDay)
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activeDay]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Error Loading Events
          </h2>
          <p className="text-gray-300">
            Failed to load the event schedule. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-black pt-20 pb-15">
      <ScheduleBackground />

      {/* Guard Characters */}
      <div className="absolute left-4 top-1/4 hidden lg:block z-10">
        <motion.img
          src={"/home_schedule/guard_left.png"}
          alt="Guard figure"
          className="w-24 h-36 object-cover guard-float rounded-lg border-2 border-squid-pink opacity-80"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          data-testid="img-guard-left"
        />
      </div>

      <div className="absolute right-4 bottom-1/4 hidden lg:block z-10">
        <motion.img
          src={"/home_schedule/guard_right.png"}
          alt="Guard figure"
          className="w-24 h-36 object-cover guard-float rounded-lg border-2 border-yellow-400 opacity-80"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          data-testid="img-guard-right"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 overflow-hidden">
        {/* Header */}
        <header className="text-center py-12 px-4 font-war relative">
          {/* Neon Glow Behind Heading */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-2/3 h-32 bg-squid-pink/20 blur-3xl rounded-full"></div>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-5xl font-squid md:text-7xl font-bold text-squid-pink drop-shadow-[0_0_15px_rgba(255,0,127,0.8)] tracking-wider"
            data-testid="text-title-main"
          >
            SURVIVAL LOBBY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg md:text-2xl text-gray-200 opacity-90 font-light"
            data-testid="text-subtitle"
          >
            Follow the path in the{" "}
            <span className="text-green-400 font-squid font-semibold drop-shadow-[0_0_10px_rgba(0,255,156,0.7)]">
              EVENT SCHEDULE
            </span>
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-6 w-40 h-1 bg-squid-pink rounded-full"
          />
        </header>

        <DaySwitcher activeDay={activeDay} onDayChange={setActiveDay} />

        {/* Event Schedule Container */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="event-card rounded-lg p-6 animate-pulse"
                  data-testid={`skeleton-card-${i}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                    <div className="w-16 h-4 bg-gray-600 rounded"></div>
                  </div>
                  <div className="w-3/4 h-6 bg-gray-600 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-600 rounded mb-3"></div>
                  <div className="w-full h-4 bg-gray-600 rounded mb-4"></div>
                  <div className="w-20 h-4 bg-gray-600 rounded"></div>
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-16">
              <h3
                className="text-2xl font-bold text-gray-400 mb-4"
                data-testid="text-no-events"
              >
                No Events Scheduled
              </h3>
              <p className="text-gray-500">
                There are no events scheduled for Day {activeDay}.
              </p>
            </div>
          ) : (
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-testid={`events-day-${activeDay}`}
            >
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
