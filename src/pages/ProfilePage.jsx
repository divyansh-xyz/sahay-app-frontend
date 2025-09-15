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
} from "recharts";
import "../theme.css"; // Import theme

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
    { name: "Score", value: 82, fill: "url(#wellnessGradient)" },
    // A background bar for the full 100%
    { name: "Background", value: 100, fill: "var(--input-bg-color)" },
  ];
  const happinessData = [
    { week: "Week 1", happiness: 70 },
    { week: "Week 2", happiness: 75 },
    { week: "Week 3", happiness: 78 },
    { week: "Week 4", happiness: 82 },
  ];

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
  };

  return (
    <div style={styles.container}>
      {/* Page Title */}
      <h1 style={styles.title}>Your Wellness Profile</h1>

      {/* Wellness Score + Happiness Trend side by side */}
      <div style={styles.row}>
        {/* Wellness Score */}
        <div style={styles.halfBox}>
          <h2 style={styles.sectionTitle}>Wellness Score</h2>
          <ResponsiveContainer width="100%" height={250}>
            <RadialBarChart
              innerRadius="60%"
              outerRadius="90%"
              data={wellnessData}
              startAngle={180}
              endAngle={0}
            >
              <defs>
                <linearGradient id="wellnessGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="red" />
                  <stop offset="50%" stopColor="goldenrod" />
                  <stop offset="100%" stopColor="green" />
                </linearGradient>
              </defs>
              <RadialBar
                minAngle={15}
                clockWise={false}
                dataKey="value"
                cornerRadius={10}
                background={{ fill: "var(--input-bg-color)" }}
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="24"
                fill="var(--text-color)"
              >
                {wellnessData[0].value}%
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Happiness Trend */}
        <div style={styles.halfBox}>
          <h2 style={styles.sectionTitle}>Happiness Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
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
                stroke="none"
                fill="url(#happinessGradient)"
              />
              <Line
                type="monotone"
                dataKey="happiness"
                stroke="var(--primary-color)"
                strokeWidth={3}
                dot={{ r: 6, fill: "var(--primary-color)", strokeWidth: 0 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Schedule Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Schedule</h2>
        <p>AI will give this</p>
      </div>
    </div>
  );
};

export default ProfilePage;