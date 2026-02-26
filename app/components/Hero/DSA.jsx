"use client";
import React, { useEffect, useState } from "react";
import Stats from "../ui/Stats";
import { motion } from "framer-motion";
import IntroText from "../ui/IntroText";
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
    <IntroText text={"Problem-solving is a skill I’ve deliberately trained over time. Here’s a glimpse of my journey so far."} className="pb-12"/>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="md:w-1/2 w-[80%] mx-auto bg-gradient-to-br from-[#0f172a]/70 to-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] px-6 md:px-10 py-8 "
        >
          <div className="flex w-full justify-between items-center px-4 py-4">
            <p className="text-white font-semibold">Leetcode Stats</p>

            <div
              onClick={() => window.open(LEETCODE_URL, "_blank")}
              className="flex flex-wrap px-4  items-center underline text-yellow-400 cursor-pointer gap-1 group/title"
            >
              <h3 className="text-md font-semibold transition-colors duration-300 group-hover/title:text-yello-400">
                Profile Link
              </h3>

              {/* External Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-300 group-hover/title:opacity-100 group-hover/title:translate-x-0 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H9M17 7V15"
                />
              </svg>
            </div>
          </div>

          {/* contest stats */}
          <div className="py-8">
            <p
              className="text-center pb-8 text-xl font-semibold bg-gradient-to-r  from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Questions Tackled
            </p>
            <Stats
              total={data}
              completed={data.completed}
              levels={data.levels}
            />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent my-8" />

          <p
            className="text-center pb-8 text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Contest History
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            <div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-center items-center"
            >
              <p className="font-medium text-sm text-gray-300">
                Total Contests
              </p>
              <p className="text-white font-semibold">{data.contest.total}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-center items-center">
              <p className="font-medium text-center text-sm text-gray-300">
                Max Rating
              </p>
              <p className="text-white font-semibold">
                {Math.floor(data.contest.rating)}
              </p>
            </div>

            <div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-center items-center"
            >
              <p className="font-medium text-sm text-gray-300">Ranking</p>
              <p className="text-white font-semibold">{data.contest.place}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default DSA;
