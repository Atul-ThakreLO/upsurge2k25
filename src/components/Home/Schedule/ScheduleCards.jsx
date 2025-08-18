"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import "./Schedule.css";

export function EventCard({ event, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getShapeStyles = (shapeType) => {
    switch (shapeType) {
      case "circle":
        return "shape-circle animate-pulse-neon";
      case "triangle":
        return "shape-triangle";
      case "square":
        return "shape-square";
      default:
        return "shape-circle animate-pulse-neon";
    }
  };

  const getShapeColor = (shapeType) => {
    switch (shapeType) {
      case "circle":
        return "text-squid-pink";
      case "triangle":
        return "text-green-400";
      case "square":
        return "text-yellow-400";
      default:
        return "text-pink-400";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="event-card rounded-lg p-6 group"
      data-testid={`card-event-${event.id}`}
      style={{ transform: isExpanded ? "scale(1.02)" : "scale(1)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={cn(
            "w-12 h-12 flex items-center justify-center",
            getShapeStyles(event.shapeType)
          )}
        >
          <span className={cn("font-bold", getShapeColor(event.shapeType))}>
            {event.order.toString().padStart(2, "0")}
          </span>
        </div>
        <span
          className="text-green-400 text-sm font-semibold"
          data-testid={`text-time-${event.id}`}
        >
          {event.time}
        </span>
      </div>

      <h3
        className="text-xl font-bold text-white mb-2"
        data-testid={`text-title-${event.id}`}
      >
        {event.title}
      </h3>

      <p
        className="text-gray-300 text-sm mb-3"
        data-testid={`text-venue-${event.id}`}
      >
        {event.venue}
      </p>

      <p
        className="text-gray-300 text-sm mb-4 opacity-80"
        data-testid={`text-description-${event.id}`}
      >
        {event.description}
      </p>

      {/* <button
        data-testid={`button-know-more-${event.id}`}
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-squid-pink text-sm font-semibold hover:text-white transition-colors duration-300"
      >
        {isExpanded ? "show less" : "know more"}
      </button> */}

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-4 pt-4 border-t border-squid-pink/30">
          <p
            className="text-gray-300 text-sm"
            data-testid={`text-details-${event.id}`}
          >
            {event.details}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
