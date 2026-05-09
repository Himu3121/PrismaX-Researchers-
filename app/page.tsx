'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, X, ShieldCheck, Zap, BookOpen, ChevronRight, Globe } from 'lucide-react';

export default function PrismaNavigator() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [selectedTopic, setSelectedTopic] = useState<null | any>(null);

  const content = {
    bn: {
      nav: { overview: "ওভারভিউ", protocols: "প্রোটোকল", research: "রিসার্চ" },
      hero: { label: "ইন্টেলিজেন্স ম্যাপিং লেয়ার", sub: "সিকারদের জন্য সহজ ব্যাখ্যা" },
      protocols: [
        { id: 'p1', title: "Coordination Layer", summary: "মানুষ ও রোবটের নির্দেশের মধ্যে নিখুঁত তালমিল বজায় রাখার স্মার্ট লেয়ার।", details: "Coordination Layer নিশ্চিত করে যে মানুষের দেওয়া কমান্ডগুলো রোবটের মেকানিক্যাল জয়েন্টে সঠিকভাবে পৌঁছাচ্ছে। এটি অনেকটা মানুষের নার্ভাস সিস্টেমের মতো কাজ করে।\n\nউদাহরণ: আপনি যখন রোবটকে হাত নাড়ানোর নির্দেশ দেন, তখন এই লেয়ারটি হিসাব করে দেখে রোবটটির মোটর ঠিক কতটুকু শক্তি প্রয়োগ করবে।" },
        { id: 'p2', title: "Optimum Network", summary: "শূন্য লেটেন্সিতে রিয়েল-টাইম রোবট অপারেশনের জন্য তৈরি বিশেষ অবকাঠামো।", details: "রিমোট অপারেশনের সময় ল্যাগ দূর করার জন্য এটি একটি ডিসেন্ট্রালাইজড নেটওয়ার্ক। এটি হাই-স্পিড ব্যান্ডউইথ এবং লো-লেটেন্সি নিশ্চিত করে।\n\nউদাহরণ: আপনি লস অ্যাঞ্জেলেসের একটি রোবটকে বাংলাদেশ থেকে চালাচ্ছেন। এই নেটওয়ার্কের কারণে রোবটটি একদম তাৎক্ষণিক রেসপন্স করবে।" },
        { id: 'p3', title: "Knowledge Hub", summary: "বিশ্বের বৃহত্তম ওপেন-সোর্স রোবটিক ইন্টেলিজেন্স ও ডাটাবেজ সিস্টেম।", details: "Knowledge Hub হলো PrismaX-এর ডিজিটাল লাইব্রেরি। এখানে সারা বিশ্বের রোবট এবং মানুষের কাছ থেকে সংগৃহীত হাই-ফিডেলিটি ডাটা জমা থাকে।\n\nউদাহরণ: নতুন একটি রোবট বানাতে চাইলে ডেভেলপাররা এখান থেকে ডাটা নিয়ে তাকে দ্রুত ট্রেনিং দিতে পারেন।" }
      ],
      topics: [
        { id: 1, title: "Physical AI কী?", summary: "রোবটের শরীর নিয়ন্ত্রণকারী বিশেষ কৃত্রিম বুদ্ধিমত্তা।", details: "Physical AI বাস্তব জগতের ফিজিক্যাল রোবট নিয়ন্ত্রণ করতে সক্ষম। এটি রোবটকে পরিবেশ বুঝতে এবং নড়াচড়া করতে শেখায়।\n\nউদাহরণ: ChatGPT রেসিপি লিখে দেয়, কিন্তু PrismaX-এর Physical AI রোবটকে দিয়ে সত্যি সত্যি কফি বানিয়ে দিতে সক্ষম।" },
        { id: 2, title: "টেলিকন্ট্রোল (Teleoperation)", summary: "দূর থেকে রোবটকে কাজ শেখানোর আধুনিক পদ্ধতি।", details: "একজন মানুষ রিমোট বা ভিআর গিয়ার ব্যবহার করে দূর থেকে রোবট পরিচালনা করে এবং রোবট সেই কাজটির ডাটা রেকর্ড করে নেয়।\n\nউদাহরণ: ঢাকা থেকে আমেরিকার একটি হসপিটালের রোবটকে সার্জিক্যাল সরঞ্জাম পরিষ্কার করা শেখানো হচ্ছে।" },
        { id: 3, title: "ডাটা গ্যাপ (The Data Gap)", summary: "বাস্তব ডাটার অভাব দূর করা।", details: "রোবটকে শেখানোর জন্য ইন্টারনেটে পর্যাপ্ত 'বাস্তব ডাটা' নেই। মানুষের হাঁটার ভিডিও থাকলেও রোবটের হাঁটার সময় তার জয়েন্টে কতটুকু প্রেসার লাগে সেই ডাটা PrismaX তৈরি করে।\n\nউদাহরণ: রোবটকে গ্লাস ধরতে শেখাতে হলে গ্লাসের ওজনের সাথে জয়েন্টের শক্তির ডাটা প্রয়োজন হয়।" },
        { id: 4, title: "ডাটা ফ্লাইহুইল (Data Flywheel)", summary: "AI-কে নিয়মিত উন্নত করার স্বয়ংক্রিয় চক্র।", details: "এটি একটি চক্র: মানুষ রোবটকে শেখাবে -> সেই ডাটা দিয়ে AI উন্নত হবে -> AI উন্নত হলে রোবট আরও ভালো কাজ করবে।\n\nউদাহরণ: একটি রোবট যত বেশি মানুষের কাছে কাজ শিখবে, সে তত কম ভুল করবে এবং একসময় একা কাজ করতে পারবে।" },
        { id: 5, title: "DePIN ও রোবটিক্স", summary: "বিকেন্দ্রীভূত ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক।", details: "প্রথাগত টেক কোম্পানিগুলোর মতো ডাটা কোনো সেন্ট্রাল সার্ভারে থাকে না। বিশ্বের মানুষ তাদের হার্ডওয়্যার এবং ডাটা শেয়ার করে একটি বিশাল নেটওয়ার্ক তৈরি করে।\n\nউদাহরণ: বিটকয়েনের মতো এখানে কোনো সেন্ট্রাল ব্যাংক নেই, বরং সবার সম্মিলিত অবদানে নেটওয়ার্কটি চলে।" },
        { id: 6, title: "VLA মডেল", summary: "রোবটের দেখা, ভাষা বোঝা এবং কাজ করার ক্ষমতা।", details: "VLA হলো রোবটের একটি শক্তিশালী মাল্টিমোডাল ব্রেইন। এটি চোখ দিয়ে পরিবেশ দেখে এবং মানুষের ভাষা বা নির্দেশ অনুযায়ী সরাসরি অ্যাকশন নেয়।\n\nউদাহরণ: রোবটকে বললে 'ফ্রিজ থেকে কোক নিয়ে আসো', VLA মডেলের কারণে সে ফ্রিজ চিনবে এবং কোকটি নিয়ে আসবে।" },
        { id: 7, title: "হাই-ফিডেলিটি ডাটা", summary: "অত্যন্ত সূক্ষ্ম এবং হাই-কোয়ালিটি সেন্সর তথ্য।", details: "এতে রোবটের প্রতিটি মোটরের ভোল্টেজ, তাপমাত্রা, এবং সে কতটুকু ওজন বহন করছে তার নিখুঁত হিসাব থাকে। এটি সাধারণ ভিডিওর চেয়ে অনেক শক্তিশালী।\n\nউদাহরণ: একটি রোবট যখন কাঁচের গ্লাস ধরে, সে ঠিক কতটুকু শক্তিতে ধরবে যাতে গ্লাসটি না ভাঙে, সেই সূক্ষ্ম তথ্যই হলো এটি।" },
        { id: 8, title: "এজ-কেস সমাধান", summary: "অস্বাভাবিক পরিস্থিতিতে সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা।", details: "মানুষ টেলিকন্ট্রোলের মাধ্যমে কঠিন মুহূর্তে রোবটকে সাহায্য করে এবং রোবট সেই নতুন অভিজ্ঞতা থেকে শিখতে থাকে।\n\nউদাহরণ: রাস্তায় হঠাৎ কাদা দেখলে রোবট কী করবে তা না জানলে মানুষ তাকে ওই কাদা এড়িয়ে চলা শিখিয়ে দেয়।" },
        { id: 9, title: "হার্ডওয়্যার অ্যাগনস্টিক", summary: "যেকোনো ধরণের রোবটে PrismaX ব্যবহারের সুবিধা।", details: "আপনি PrismaX-এর ব্রেইনটি দিয়ে যেকোনো ব্র্যান্ডের রোবটিক হার্ডওয়্যার কন্ট্রোল করতে পারেন। এটি অনেকটা রোবটের অপারেটিং সিস্টেমের মতো।\n\nউদাহরণ: PrismaX-এর সিস্টেম দিয়ে খেলনা রোবট এবং উন্নত হিউম্যানয়েড—উভয়ই চালানো সম্ভব।" },
        { id: 10, title: "রিয়েল-টাইম অপারেশন", summary: "রিয়েল-টাইম অপারেশনের লো-লেটেন্সি নেটওয়ার্ক।", details: "Optimum Network নিশ্চিত করে যে কন্ট্রোলারের নির্দেশ যেন মিলিসেকেন্ডের মধ্যে রোবটের কাছে পৌঁছায়। এতে কাজের নির্ভুলতা বাড়ে।\n\nউদাহরণ: রোবটকে ডানে ঘুরতে বললে সে যেন দেরি না করে সাথে সাথে ডানে ঘোরে।" },
        { id: 11, title: "RLNC টেকনোলজি", summary: "দুর্বল ইন্টারনেটেও শক্তিশালী ডাটা ট্রান্সমিশন।", details: "Random Linear Network Coding দুর্বল সিগন্যালেও ডাটা হারিয়ে যেতে দেয় না, ফলে রোবট ডিসকানেক্ট হয় না।\n\nউদাহরণ: ঝড়ের দিনে বা দুর্বল ওয়াইফাইতেও রোবটটি ল্যাগ ছাড়াই কাজ চালিয়ে যাবে।" },
        { id: 12, title: "ডাটা মাইনিং ২.০", summary: "কাজের মাধ্যমে রিওয়ার্ড বা পয়েন্ট অর্জন।", details: "আপনি যখন রোবটকে কোনো কাজ শেখান বা ডাটা প্রদান করেন, বিনিময়ে আপনি নেটওয়ার্ক থেকে প্রিজমা পয়েন্ট পাবেন।\n\nউদাহরণ: প্রতিদিন আধা ঘণ্টা রোবটকে ট্রেনিং দিলে আপনার ওয়ালেটে রিওয়ার্ড জমা হবে।" },
        { id: 13, title: "প্রাইভেসি ও এনক্রিপশন", summary: "ব্যবহারকারীর নিরাপত্তা ও গোপনীয়তা রক্ষা।", details: "রোবট যে ডাটা সংগ্রহ করে তা এনক্রিপ্ট করে কোড আকারে সেভ করা হয় যাতে ইউজার বা ঘরের গোপনীয়তা বজায় থাকে।\n\nউদাহরণ: রোবট আপনার ঘর দেখলে সে মানুষের মতো আসবাব চিনে না, সে শুধু গাণিতিক কোঅর্ডিনেট দেখে।" },
        { id: 14, title: "ফাউন্ডেশন মডেল", summary: "সব রোবটের জন্য একটি সাধারণ ব্রেইন।", details: "যদি একটি রোবট কোনো কাজ একবার শিখে ফেলে, তবে সেই নলেজ ক্লাউডের মাধ্যমে নেটওয়ার্কের সব রোবটের মেমরিতে চলে যায়।\n\nউদাহরণ: লন্ডনের একটি রোবট কিছু শিখলে ঢাকার রোবটটি অটোমেটিক তা জেনে যাবে।" },
        { id: 15, title: "কোঅর্ডিনেশন লেয়ার", summary: "মানুষের নির্দেশ ও রোবটের মোটরের সমন্বয়।", details: "এটি নিশ্চিত করে যে মানুষের দেওয়া সূক্ষ্ম কমান্ডগুলো রোবটের মেকানিক্যাল মোটর নির্ভুলভাবে পালন করছে।\n\nউদাহরণ: রোবটকে আলতো করে হাত মেলাতে বললে সে যেন জোরে হাত না চাপে, তা এটি নিয়ন্ত্রণ করে।" },
        { id: 16, title: "PoUW", summary: "অপ্রয়োজনীয় বিদ্যুৎ নষ্ট না করে কার্যকর কাজ।", details: "Proof of Useful Work পদ্ধতিতে নেটওয়ার্কের কাজ সম্পন্ন হয় রোবট ট্রেনিং এর মাধ্যমে যা বাস্তব পৃথিবীর সমস্যার সমাধান করে।\n\nউদাহরণ: এটি বিটকয়েনের মতো শুধু অংক কষে না, বরং রোবটকে দক্ষ করার বাস্তব কাজ করে।" },
        { id: 17, title: "HITL (Human in the Loop)", summary: "AI-এর ওপর মানুষের তদারকি ও নিয়ন্ত্রণ।", details: "HITL সিস্টেম নিশ্চিত করে যে AI কোনো ভুল কিছু করতে গেলে একজন মানুষ তাকে দূর থেকে থামিয়ে সঠিক পথ দেখাতে পারবে।\n\nউদাহরণ: গাড়ি নিজে চলার সময় চালক যেমন রেডি থাকে স্টিয়ারিং ধরতে, রোবটের ক্ষেত্রেও বিষয়টি তাই।" },
        { id: 18, title: "ডিসেন্ট্রালাইজড নোড", summary: "সার্ভারের কোনো নির্দিষ্ট কেন্দ্র না থাকা।", details: "সিস্টেমটি সারা পৃথিবীতে ছড়িয়ে থাকা হাজার হাজার কম্পিউটারে চলে, তাই এটি কখনো হ্যাক বা বন্ধ করা সহজ নয়।\n\nউদাহরণ: টরেন্ট যেমন বন্ধ করা যায় না, PrismaX-এর নেটওয়ার্কও তেমনি শক্তিশালী ও স্থায়ী।" },
        { id: 19, title: "স্কেলেবল ইন্টেলিজেন্স", summary: "কমিউনিটির সাথে বুদ্ধিমত্তা বৃদ্ধির হার।", details: "যত বেশি রোবট ও মানুষ যুক্ত হবে, ডাটা কালেকশন তত বাড়বে এবং AI তত দ্রুত জ্যামিতিক হারে বুদ্ধিমান হয়ে উঠবে।\n\nউদাহরণ: একজন ছাত্র একা শেখার চেয়ে ১০ জন বন্ধু মিলে শিখলে যেমন দ্রুত শেখা যায়, বিষয়টি অনেকটা সেরকম।" },
        { id: 20, title: "সিকার কমিউনিটি", summary: "ব্যবহারকারীদের হাতেই প্রজেক্টের ভবিষ্যৎ।", details: "সিকাররা হলো সেই ইউজার যারা ভোটের মাধ্যমে প্রজেক্টের পরবর্তী আপডেট এবং পলিসি নির্ধারণে সরাসরি অংশগ্রহণ করে।\n\nউদাহরণ: এটি একটি গণতান্ত্রিক সিস্টেম যেখানে মালিকানা কোনো বড় কোম্পানির নয়, বরং ইউজারদের।" }
      ]
    },
    en: {
      nav: { overview: "Overview", protocols: "Protocols", research: "Research" },
      hero: { label: "Intelligence Mapping Layer", sub: "Simplified for Seekers" },
      protocols: [
        { id: 'p1', title: "Coordination Layer", summary: "A smart layer for perfect synchronization between humans and robots.", details: "The Coordination Layer ensures that commands given by a human reach the robot's mechanical joints accurately. It acts like a nervous system.\n\nExample: When you command a robot to move, this layer calculates the precise energy and torque required by the motors." },
        { id: 'p2', title: "Optimum Network", summary: "Zero-latency infrastructure built for real-time robot operations.", details: "A decentralized network designed to eliminate lag during remote operations. It guarantees high-speed data transmission.\n\nExample: Operating a robot in LA from Bangladesh with near-instantaneous response times." },
        { id: 'p3', title: "Knowledge Hub", summary: "The world's largest open-source robotic intelligence database.", details: "PrismaX's digital library storing high-fidelity data collected from robots and humans globally.\n\nExample: Developers can pull training data from here to teach a new robot complex tasks in minutes." }
      ],
      topics: [
        { id: 1, title: "What is Physical AI?", summary: "AI that specifically controls robotic hardware.", details: "Physical AI interacts with the physical world, understanding spatial environments and physical constraints.\n\nExample: While ChatGPT writes a recipe, Physical AI actually guides a robot to brew the coffee." },
        { id: 2, title: "Teleoperation", summary: "Modern method of remote robotic teaching.", details: "A human uses VR gear or remotes to operate a robot while the robot records this data for deep learning.\n\nExample: A specialist in Dhaka training a surgical robot in a US hospital remotely." },
        { id: 3, title: "The Data Gap", summary: "Bridging the lack of real-world robotic data.", details: "PrismaX fills the gap by collecting data on joint pressure and motor torque from real physical interactions.\n\nExample: To teach a robot to hold a glass, it needs data on weight combined with motor pressure." },
        { id: 4, title: "Data Flywheel", summary: "Self-improving cycle of AI development.", details: "A cycle where human input improves AI, which in turn makes robots work better autonomously.\n\nExample: The more a robot learns from humans, the fewer mistakes it makes over time." },
        { id: 5, title: "DePIN & Robotics", summary: "Decentralized Physical Infrastructure Network.", details: "Data isn't stored on central servers; instead, people worldwide share their hardware to create a massive network.\n\nExample: Like Bitcoin, there's no central bank; the network runs on the collective contribution of users." },
        { id: 6, title: "VLA Model", summary: "Vision-Language-Action capabilities for robots.", details: "A multimodal brain that sees the environment and takes physical action according to human language instructions.\n\nExample: Command 'Get a soda from the fridge', and the VLA model identifies the fridge and performs the task." },
        { id: 7, title: "High-Fidelity Data", summary: "Highly precise sensor information.", details: "Includes motor voltage, temperature, and precise weight-bearing calculations beyond simple video footage.\n\nExample: Precise data on how much force is needed to hold a delicate glass without breaking it." },
        { id: 8, title: "Edge Case Solution", summary: "Decisiveness in unusual situations.", details: "Humans help robots through difficult moments via teleoperation, and the robot learns from these rare events.\n\nExample: If a robot doesn't know how to handle mud on a road, a human guides it once, and it learns for the future." },
        { id: 9, title: "Hardware Agnostic", summary: "Using PrismaX on any robotic hardware.", details: "You can use the PrismaX brain to control any brand of robotic hardware. It's like a universal OS for robots.\n\nExample: The same PrismaX system can run a toy robot or an advanced industrial humanoid." },
        { id: 10, title: "Real-Time Operation", summary: "Low-latency network for instant reactions.", details: "Ensures that controller commands reach the robot within milliseconds, increasing operational safety.\n\nExample: The robot turns right the exact moment the operator moves the joystick." },
        { id: 11, title: "RLNC Technology", summary: "Robust data transmission on weak internet.", details: "Random Linear Network Coding prevents data loss, so the robot doesn't disconnect during signal drops.\n\nExample: The robot continues to work smoothly even on a weak or unstable Wi-Fi connection." },
        { id: 12, title: "Data Mining 2.0", summary: "Earning rewards through useful work.", details: "By teaching a robot or providing data, you earn Prisma Points as a reward for your contribution.\n\nExample: Spend 30 minutes daily training a robot and watch rewards accumulate in your wallet." },
        { id: 13, title: "Privacy & Encryption", summary: "Protecting user security and privacy.", details: "All collected data is encrypted into mathematical codes so user privacy is never compromised.\n\nExample: The robot sees furniture as mathematical coordinates rather than visual house details." },
        { id: 14, title: "Foundation Model", summary: "A common brain for all robots.", details: "If one robot learns a task, that knowledge is shared across the entire network via the cloud.\n\nExample: A robot learning a skill in London makes that skill available to a robot in Dhaka instantly." },
        { id: 15, title: "Coordination Layer", summary: "Syncing human intent with robot motors.", details: "Ensures that commands are precisely executed by the robot's physical motors without error.\n\nExample: Controlling a robot's handshake strength so it's firm but doesn't squeeze too hard." },
        { id: 16, title: "PoUW (Useful Work)", summary: "Effective work without wasting energy.", details: "The network performs useful tasks (robot training) instead of solving useless mathematical puzzles.\n\nExample: Instead of just mining coins, the power is used to solve real-world automation problems." },
        { id: 17, title: "HITL (Human in the Loop)", summary: "Human supervision over AI.", details: "Ensures that if AI starts to make a mistake, a human can intervene remotely and correct the path.\n\nExample: Just like a driver remains ready in a self-driving car, a human stays ready for the robot." },
        { id: 18, title: "Decentralized Nodes", summary: "No single point of failure.", details: "The system is spread across thousands of global nodes, making it impossible to shut down or hack easily.\n\nExample: Like BitTorrent, the network stays alive as long as there are participants." },
        { id: 19, title: "Scalable Intelligence", summary: "Growth rate of intelligence with community.", details: "The more participants join, the faster data collection grows, scaling AI intelligence exponentially.\n\nExample: Intelligence grows like a crowd-sourced library where everyone contributes knowledge." },
        { id: 20, title: "Seeker Community", summary: "Project's future in users' hands.", details: "Seekers participate in votes to decide project updates, policies, and future growth directions.\n\nExample: A democratic system where ownership belongs to the users, not a single corporation." }
      ]
    }
  };

  const activeContent = content[lang];

  return (
    <div className="min-h-screen bg-transparent text-[#202020] font-sans selection:bg-black/10">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-black/5 backdrop-blur-xl px-8 py-5 flex justify-between items-center transition-all">
        <h1 className="text-3xl font-serif text-black tracking-tight cursor-pointer">
          Prisma<span className="text-xl align-top ml-0.5 text-black/40 italic">(x)</span>
        </h1>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-black/60">
            <a href="#hero" className="hover:text-black transition">{activeContent.nav.overview}</a>
            <a href="#protocols" className="hover:text-black transition">{activeContent.nav.protocols}</a>
            <a href="#whitepaper" className="hover:text-black transition">{activeContent.nav.research}</a>
          </div>

          <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full hover:bg-black hover:text-white transition-all text-[10px] font-black uppercase tracking-widest border border-black/5"
          >
            <Globe size={14} />
            {lang === 'bn' ? 'English' : 'বাংলা'}
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section id="hero" className="pt-52 pb-32 text-center">
          <motion.div key={lang} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-black/40 text-xs font-bold tracking-[0.5em] uppercase mb-6 block">{activeContent.hero.label}</span>
            <h2 className="text-6xl md:text-[8.5rem] font-serif text-black tracking-tighter leading-[0.85] mb-12">
              Prisma<span className="text-4xl md:text-6xl align-top ml-1 text-black/30 italic">(x)</span> <br /> 
              <span className="italic text-black uppercase">Physical AI</span> <br />
              <span className="text-3xl md:text-4xl font-sans font-light tracking-[0.3em] text-black/20 block mt-6 uppercase">
                {activeContent.hero.sub}
              </span>
            </h2>
          </motion.div>
        </section>

        {/* PROTOCOLS */}
        <section id="protocols" className="py-24 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {activeContent.protocols.map((item) => (
            <div key={item.id} onClick={() => setSelectedTopic(item)} className="cursor-pointer">
              <ProtocolCard icon={item.id === 'p1' ? <ShieldCheck /> : item.id === 'p2' ? <Zap /> : <BookOpen />} title={item.title} desc={item.summary} />
            </div>
          ))}
        </section>

        {/* RESEARCH EXPLORER */}
        <section id="whitepaper" className="py-32 border-t border-black/10">
          <h3 className="text-5xl md:text-7xl font-serif text-black italic mb-20">{activeContent.nav.research} Explorer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeContent.topics.map((topic) => (
              <motion.div key={topic.id} whileHover={{ y: -5 }} onClick={() => setSelectedTopic(topic)} className="p-10 rounded-[50px] glass-card cursor-pointer group flex justify-between items-center transition-all">
                <div className="flex gap-8 items-center">
                  <span className="text-black/10 font-serif text-3xl italic">0{topic.id}</span>
                  <div>
                    <h4 className="text-2xl font-serif text-black mb-2 italic tracking-tight">{topic.title}</h4>
                    <p className="text-black/50 text-[10px] uppercase tracking-widest">{topic.summary}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-black/20" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* POP-UP MODAL */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedTopic(null)} className="absolute inset-0" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 50 }} className="relative bg-[#DFD8D0] border border-black/5 p-12 md:p-20 rounded-[60px] max-w-4xl w-full shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide">
              <button onClick={() => setSelectedTopic(null)} className="absolute top-10 right-10 p-3 text-black/40 hover:text-black transition"><X size={32} /></button>
              
              <div className="flex items-center gap-3 mb-10 text-xs font-black uppercase tracking-[0.4em] text-black/40">
                <span className="w-12 h-[1px] bg-black/20"></span>
                <span>Technical Analysis</span>
              </div>

              <h3 className="text-5xl md:text-7xl font-serif text-black mb-10 italic leading-[1.1] tracking-tighter">{selectedTopic.title}</h3>
              <div className="space-y-10">
                <div className="p-8 bg-black/5 rounded-3xl italic text-black/80 text-xl leading-relaxed">&ldquo;{selectedTopic.summary}&rdquo;</div>
                <p className="text-black/70 text-xl leading-[1.8] font-light whitespace-pre-line">{selectedTopic.details}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-black/10">
        <p className="text-black/30 text-[10px] font-black tracking-[0.5em] uppercase">Dev by Himu &bull; 2026</p>
      </footer>
    </div>
  );
}

function ProtocolCard({ icon, title, desc }: any) {
  return (
    <div className="p-12 rounded-[50px] glass-card group transition-all h-full">
      <div className="w-16 h-16 bg-black/5 rounded-3xl flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition">{icon}</div>
      <h4 className="text-2xl font-serif text-black mb-4 italic tracking-tight">{title}</h4>
      <p className="text-black/40 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}