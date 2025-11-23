export interface ParishData {
  name: string;
  description: string;
  towns: string[];
  attractions: string[];
  accommodation: string[];
  transportation: string[];
}

export const parishData: Record<string, ParishData> = {
  kingston: {
    name: "Kingston",
    description:
      "Kingston, the cultural and business capital of Jamaica, is home to museums, nightlife, and the iconic Blue Mountains.",
    towns: ["Kingston", "Half-Way-Tree", "New Kingston"],
    attractions: [
      "Bob Marley Museum",
      "Devon House",
      "Emancipation Park",
      "Blue Mountain Peak"
    ],
    accommodation: [
      "The Jamaica Pegasus",
      "Courtleigh Hotel",
      "AC Hotel Kingston"
    ],
    transportation: [
      "Knutsford Express",
      "JUTA Tours",
      "Local Taxi Services",
      "Ride-share options"
    ]
  },

  westmoreland: {
    name: "Westmoreland",
    description:
      "Westmoreland is known for Negril’s famous Seven Mile Beach, cliff diving, and world-class resorts.",
    towns: ["Negril", "Savanna-La-Mar", "Little London"],
    attractions: [
      "Seven Mile Beach",
      "Rick's Cafe",
      "Blue Hole Mineral Spring"
    ],
    accommodation: [
      "Sandals Negril",
      "Rondel Village",
      "Negril Tree House"
    ],
    transportation: [
      "Route Taxis",
      "Knutsford Express",
      "Resort Shuttle Services"
    ]
  },

  // Add additional parishes here...
};
