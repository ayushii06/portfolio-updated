"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroText from "../ui/IntroText";
import cardBG from "../../public/grid-ellipsis.svg";
import { GlowingEffect } from "../ui/GlowEffect";
const LEETCODE_URL = process.env.NEXT_PUBLIC_LEETCODE_URL;

function DSA() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const cached = localStorage.getItem("leetcodeStats");
    const cachedTime = localStorage.getItem("leetcodeStatsTime");

    const oneHour = 60 * 60 * 1000;

    if (cached && cachedTime && Date.now() - cachedTime < oneHour) {
      setStats(JSON.parse(cached));
      return;
    }

    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        localStorage.setItem("leetcodeStats", JSON.stringify(data));
        localStorage.setItem("leetcodeStatsTime", Date.now());
      });
  }, []);

  const data = {
    total: null,
    easy: null,
    medium: null,
    hard: null,
    completed: null,
    levels: {
      easy: null,
      medium: null,
      hard: null,
    },
    contest: {
      total: null,
      rating: null,
      place: null,
    },
  };

  if (stats != null) {
    data.total = stats?.data?.allQuestionsCount?.[0]?.count;
    data.easy = stats?.data?.allQuestionsCount?.[1]?.count;
    data.medium = stats?.data?.allQuestionsCount?.[2]?.count;
    data.hard = stats?.data?.allQuestionsCount?.[3]?.count;
    data.completed =
      stats?.data?.matchedUser?.submitStats?.acSubmissionNum?.[0]?.count;
    data.levels.easy =
      stats?.data?.matchedUser?.submitStats?.acSubmissionNum?.[1]?.count;
    data.levels.medium =
      stats?.data?.matchedUser?.submitStats?.acSubmissionNum?.[2]?.count;
    data.levels.hard =
      stats?.data?.matchedUser?.submitStats?.acSubmissionNum?.[3]?.count;
    data.contest.total = stats?.data?.userContestRanking?.attendedContestsCount;
    data.contest.ranking = stats?.data?.userContestRanking?.globalRanking;
    data.contest.place = stats?.data?.userContestRanking?.topPercentage;
    data.contest.rating = stats?.data?.userContestRanking?.rating;
  }

  return (
    <>
      <IntroText
        text={
          "Problem-solving is a skill I’ve deliberately trained over time. Here’s a glimpse of my journey so far."
        }
        className="pb-12"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative md:w-1/2 w-[90%] mx-auto rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent">
          <div
            style={{ backgroundImage: `url(${cardBG.src})` }}
            className="size-full bg-repeat bg-[length:25px_25px]"
          >
            <div className="size-full rounded-3xl bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
              {/* Inner Glass Card */}
              <div className="rounded-3xl  border border-white/10 px-6 md:px-10 py-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-xl font-semibold text-white tracking-wide">
                    Leetcode Stats
                  </h2>

                  <button
                    onClick={() => window.open(LEETCODE_URL, "_blank")}
                    className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:scale-105 transition"
                  >
                    View Profile
                  </button>
                </div>

                {/* Questions Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  {/* Circular Stats */}
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-2xl opacity-30" />

                    {/* Circle */}
                    <div className="relative w-48 h-48 rounded-full border-[6px] border-white/10 flex flex-col items-center justify-center text-center">
                      {/* <div className="relative w-48 h-48 flex items-center justify-center rounded-full"> */}

                      {/* 🔥 Glowing Border */}
                      <GlowingEffect
                        spread={50}
                        proximity={100}
                        glow
                        disabled={false}
                        inactiveZone={0.4}
                        borderWidth={3}
                        className="rounded-full"
                      />
                      <p className="text-3xl font-bold text-green-400">
                        {data.completed}/{data.total}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Questions Solved
                      </p>
                    </div>
                  </div>

                  {/* Difficulty Cards */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    {[
                      {
                        label: "Easy",
                        value: data.levels.easy,
                        total: data.easy,
                        color: "text-blue-400",
                      },
                      {
                        label: "Medium",
                        value: data.levels.medium,
                        total: data.medium,
                        color: "text-orange-400",
                      },
                      {
                        label: "Hard",
                        value: data.levels.hard,
                        total: data.hard,
                        color: "text-red-400",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-white/5 border border-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl flex justify-between items-center hover:scale-[1.02] transition"
                      >
                        <span className={`font-medium pr-8 ${item.color}`}>
                          {item.label}
                        </span>
                        <span className="text-white font-semibold">
                          {item.value} / {item.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

                {/* Contest Section */}
                <h3 className="text-center text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Contest History
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Total Contests", value: data.contest.total },
                    {
                      title: "Max Rating",
                      value: Math.floor(data.contest.rating || 0),
                    },
                    { title: "Top %", value: data.contest.place },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="relative rounded-2xl group"
                    >
                      {/* 🔥 Glowing Border */}
                      <GlowingEffect
                        spread={40}
                        proximity={80}
                        glow
                        disabled={false}
                        inactiveZone={0.2}
                        borderWidth={2}
                        className="rounded-2xl"
                      />

                      {/* Actual Card */}
                      <div className="relative rounded-2xl bg-[#111827]/70 backdrop-blur-md border border-white/10 px-6 py-6 text-center transition duration-300 group-hover:scale-[1.03]">
                        <p className="text-sm text-gray-400">{item.title}</p>
                        <p className="text-xl font-bold text-white mt-2">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default DSA;
