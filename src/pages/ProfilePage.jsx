import React, { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  // Dummy data
  const wellnessData = [
    { name: "Score", value: 91, fill: "url(#wellnessGradient)" },
  ];
  const happinessData = [
    { week: "Week 1", happiness: 70 },
    { week: "Week 2", happiness: 75 },
    { week: "Week 3", happiness: 78 },
    { week: "Week 4", happiness: 91 },
  ];

  // Function to get wellness status and color
  const getWellnessStatus = (score) => {
    if (score >= 80) {
      return { text: "Safe", color: "#22c55e", };
    } else if (score >= 40) {
      return { text: "Vulnerable", color: "#eab308" };
    } else {
      return { text: "At Risk", color: "#ef4444" };
    }
  };

  const styles = {
    container: {
      padding: "30px",
      minHeight: "100vh",
      backgroundColor: "var(--background-color)",
      color: "var(--text-color)",
      transition: "all 0.4s ease",
    },
    title: {
      textAlign: "center",
      color: "var(--primary-color)",
      fontSize: "2em",
      marginBottom: "40px",
    },
    section: {
      background: "var(--card-bg-color)",
      boxShadow: "var(--card-shadow)",
      borderRadius: "12px",
      padding: "20px",
      marginTop: "40px",
    },
    sectionTitle: {
      marginBottom: "15px",
      borderBottom: "2px solid var(--primary-color)",
      paddingBottom: "8px",
      color: "var(--primary-color)",
    },
    row: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
    halfBox: {
      flex: 1,
      minWidth: "300px",
      background: "var(--card-bg-color)",
      boxShadow: "var(--card-shadow)",
      borderRadius: "12px",
      padding: "20px",
      position: "relative",
    },
    toggleButton: {
      marginBottom: "20px",
      padding: "10px 15px",
      borderRadius: "8px",
      border: "1px solid var(--accent-color)",
      background: "none",
      color: "var(--accent-color)",
      cursor: "pointer",
    },
    wellnessText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "24px",
      fontWeight: "bold",
      color: "var(--text-color)",
      textAlign: "center",
    },
    wellnessStatus: {
      position: "absolute",
      top: "65%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "18px",
      fontWeight: "600",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      {/* Theme Toggle Button */}
      

      {/* Page Title */}
      <h1 style={styles.title}>Your Wellness Profile</h1>

      {/* Wellness Score + Happiness Trend side by side */}
      <div style={styles.row}>
        {/* Wellness Score */}
        <div style={styles.halfBox}>
          <h2 style={styles.sectionTitle}>Wellness Score</h2>
          <div style={{ position: "relative", height: "250px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="60%"
                outerRadius="90%"
                data={wellnessData}
                startAngle={180}
                endAngle={0}
              >
                <defs>
                  <linearGradient id="wellnessGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  background={{ fill: "var(--input-bg-color)" }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div style={styles.wellnessText}>
              {wellnessData[0].value}%
            </div>
            <div style={{...styles.wellnessStatus, color: getWellnessStatus(wellnessData[0].value).color}}>
              {getWellnessStatus(wellnessData[0].value).text}
            </div>
          </div>
        </div>

        {/* Happiness Trend */}
        <div style={styles.halfBox}>
          <h2 style={styles.sectionTitle}>Happiness Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={happinessData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--input-border-color)" />
              <XAxis dataKey="week" stroke="var(--text-color)" />
              <YAxis stroke="var(--text-color)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card-bg-color)",
                  borderRadius: "8px",
                  border: "none",
                  color: "var(--text-color)",
                }}
                itemStyle={{ color: "var(--text-color)" }}
              />
              <defs>
                <linearGradient id="happinessGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="happiness"
                stroke="var(--primary-color)"
                strokeWidth={3}
                fill="url(#happinessGradient)"
                dot={{ r: 6, fill: "var(--primary-color)", strokeWidth: 0 }}
                activeDot={{ r: 8 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Schedule Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Schedule</h2>
        <p>The AI will generate a personalized schedule based on the student’s tier — Safe, Vulnerable, or At-Risk based on our Library.</p>
      </div>
    </div>
  );
};

export default ProfilePage;