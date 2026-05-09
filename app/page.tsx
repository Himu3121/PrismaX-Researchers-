'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, X, ShieldCheck, Zap, BookOpen, ChevronRight } from 'lucide-react';

export default function PrismaNavigator() {
  const [selectedTopic, setSelectedTopic] = useState<null | any>(null);

  // প্রোটোকল কার্ডের বিস্তারিত ডাটা
  const protocolDetails = [
    {
      id: 'p1',
      title: "Coordination Layer",
      summary: "মানুষ এবং রোবটের নির্দেশনার মধ্যে নিখুঁত তালমিল বজায় রাখার স্মার্ট লেয়ার।",
      details: "Coordination Layer হলো PrismaX ইকোসিস্টেমের কন্ট্রোল সেন্টার। এটি নিশ্চিত করে যে একজন মানুষের দেওয়া সূক্ষ্ম ইনপুটগুলো রোবটের মেকানিক্যাল জয়েন্টে সঠিকভাবে পৌঁছাচ্ছে। এটি ডাটা ভেরিফিকেশন এবং কমান্ড এক্সিকিউশনের মধ্যে একটি সেতুবন্ধন হিসেবে কাজ করে।\n\nউদাহরণ: আপনি যখন রিমোটলি রোবটকে হাত নাড়ানোর নির্দেশ দেন, তখন এই লেয়ারটি হিসাব করে দেখে রোবটটির মোটর কতটুকু শক্তি প্রয়োগ করবে যাতে কোনো ক্ষতি না হয়।"
    },
    {
      id: 'p2',
      title: "Optimum Network",
      summary: "শূন্য লেটেন্সিতে রিয়েল-টাইম রোবট অপারেশনের জন্য তৈরি বিশেষ অবকাঠামো।",
      details: "রোবটিক্স অপারেশনের সবচেয়ে বড় বাধা হলো ল্যাগ (Lag)। Optimum Network হলো একটি ডিসেন্ট্রালাইজড লেয়ার-২ নেটওয়ার্ক যা পৃথিবীর যেকোনো প্রান্ত থেকে রিয়েল-টাইম ডাটা ট্রান্সমিশন সম্ভব করে তোলে। এটি হাই-স্পিড ব্যান্ডউইথ এবং লো-লেটেন্সি নিশ্চিত করে।\n\nউদাহরণ: আপনি লস অ্যাঞ্জেলেসের একটি রোবটকে বাংলাদেশ থেকে চালাচ্ছেন। Optimum Network-এর কারণে আপনার মুভমেন্ট এবং রোবটের রেসপন্স হবে একদম তাৎক্ষণিক।"
    },
    {
      id: 'p3',
      title: "Knowledge Hub",
      summary: "বিশ্বের বৃহত্তম ওপেন-সোর্স রোবটিক ইন্টেলিজেন্স ও ডাটাবেজ সিস্টেম।",
      details: "Knowledge Hub হলো PrismaX-এর ডিজিটাল লাইব্রেরি। এখানে সারা বিশ্বের রোবট এবং মানুষের কাছ থেকে সংগৃহীত হাই-ফিডেলিটি ডাটা জমা থাকে। ডেভেলপাররা এই ওপেন-সোর্স ডাটা ব্যবহার করে নতুন নতুন ফিজিক্যাল AI মডেল তৈরি করতে পারেন।\n\nউদাহরণ: কোনো ডেভেলপার যদি নতুন একটি কুকিং রোবট বানাতে চান, তবে তাকে শুরু থেকে শিখাতে হবে না। তিনি Knowledge Hub থেকে প্রয়োজনীয় ডাটা নিয়ে রোবটটিকে দ্রুত ট্রেইন করতে পারবেন।"
    }
  ];

  // রিসার্চ টপিকগুলোর ডাটা (আগের ২০টি)
 const whitepaperTopics = [
    {
      id: 1,
      title: "Physical AI কী?",
      summary: "রোবটের শরীর নিয়ন্ত্রণকারী বিশেষ কৃত্রিম বুদ্ধিমত্তা।",
      details: "সাধারণ AI (যেমন ChatGPT) শুধু ডিজিটাল তথ্য নিয়ে কাজ করে। কিন্তু Physical AI বাস্তব জগতের ফিজিক্যাল রোবট নিয়ন্ত্রণ করতে সক্ষম। এটি রোবটকে মানুষের মতো পরিবেশ বুঝতে এবং নড়াচড়া করতে শেখায়।\n\nউদাহরণ: আপনি ChatGPT-কে বললে সে আপনাকে কফি বানানোর রেসিপি লিখে দেবে, কিন্তু PrismaX-এর Physical AI রোবটকে নির্দেশ দিয়ে সত্যি সত্যি কফি বানিয়ে দিতে সক্ষম এবং কাপটি টেবিলের ঠিক কোথায় রাখতে হবে তা নির্ধারণ করতে পারে।"
    },
    {
      id: 2,
      title: "টেলিকন্ট্রোল (Teleoperation)",
      summary: "দূর থেকে রোবটকে কাজ শেখানোর আধুনিক পদ্ধতি।",
      details: "টেলিকন্ট্রোল হলো এমন একটি সিস্টেম যেখানে একজন মানুষ রিমোট বা ভিআর (VR) গিয়ার ব্যবহার করে দূর থেকে রোবট পরিচালনা করে। মানুষ যখন রোবটকে কন্ট্রোল করে, তখন রোবট সেই কাজটির ডাটা রেকর্ড করে নেয়।\n\nউদাহরণ: ধরুন আপনি ঢাকা থেকে ইন্টারনেটের মাধ্যমে আমেরিকার একটি হসপিটালের রোবটকে কাজ শেখাচ্ছেন। আপনার প্রতিটি মুভমেন্ট রোবটটি নিজের মেমোরিতে সেভ করে নিচ্ছে।"
    },
    {
      id: 3,
      title: "ডাটা গ্যাপ (The Data Gap)",
      summary: "রোবটকে বুদ্ধিমান বানানোর জন্য বাস্তব ডাটার অভাব দূর করা।",
      details: "রোবটকে শেখানোর জন্য ইন্টারনেটে পর্যাপ্ত 'বাস্তব ডাটা' নেই। মানুষের হাঁটার ভিডিও অনেক থাকলেও রোবটের হাঁটার সময় তার জয়েন্টে কতটুকু প্রেসার লাগে বা কোনো জিনিস ধরার সময় কতটুকু টর্ক দরকার, সেই ডাটা খুব কম। PrismaX এই ডাটার অভাব বা 'গ্যাপ' দূর করতে কাজ করে।\n\nউদাহরণ: একটি ছোট বাচ্চার যেমন হাঁটতে শিখতে বাস্তব অভিজ্ঞতার প্রয়োজন হয়, রোবটকেও তেমনি বাস্তব জগতের ফিজিক্যাল ডাটা না দিলে সে কখনো দক্ষ হবে না।"
    },
    {
      id: 4,
      title: "ডাটা ফ্লাইহুইল (Data Flywheel)",
      summary: "একটি স্বয়ংক্রিয় লার্নিং সাইকেল যা AI-কে নিয়মিত উন্নত করে।",
      details: "এটি একটি চক্র: মানুষ রোবটকে শেখাবে (ডাটা কালেকশন) -> সেই ডাটা দিয়ে AI উন্নত হবে (ট্রেনিং) -> উন্নত AI দিয়ে রোবট নিজে কাজ করবে (অটোনোমি)। এই চক্র যতবার ঘুরবে, রোবট তত দ্রুত বুদ্ধিমান হবে।\n\nউদাহরণ: একটি রোবট যত বেশি মানুষের কাছে কাজ শিখবে, সে তত কম ভুল করবে এবং একসময় সে মানুষের সাহায্য ছাড়াই একা সব কাজ করতে পারবে।"
    },
    {
      id: 5,
      title: "DePIN ও রোবটিক্স",
      summary: "বিকেন্দ্রীভূত ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক।",
      details: "DePIN মানে হলো ডিসেন্ট্রালাইজড ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক। প্রথাগত টেক কোম্পানিগুলোর মতো ডাটা কোনো সেন্ট্রাল সার্ভারে থাকে না। এর মাধ্যমে সারা বিশ্বের মানুষ তাদের রোবট হার্ডওয়্যার এবং ডাটা শেয়ার করে একটি বিশাল নেটওয়ার্ক তৈরি করে, যার মালিকানা সবার হাতে থাকে।\n\nউদাহরণ: অনেকটা বিটকয়েনের মতো, যেখানে কোনো ব্যাংক নেই কিন্তু সবাই নেটওয়ার্কের অংশ। এখানে রোবটিক ডাটার ক্ষেত্রেও একই সিস্টেম কাজ করে।"
    },
    {
      id: 6,
      title: "VLA মডেল (Vision-Language-Action)",
      summary: "রোবটের দেখা, মানুষের ভাষা বোঝা এবং কাজ করার ক্ষমতা।",
      details: "VLA হলো রোবটের একটি শক্তিশালী মাল্টিমোডাল ব্রেইন। এটি চোখ দিয়ে পরিবেশ দেখে (Vision), মানুষের ভাষা বা নির্দেশ শোনে (Language) এবং সেই অনুযায়ী হাত-পা দিয়ে অ্যাকশন নেয় (Action)।\n\nউদাহরণ: আপনি যদি রোবটকে বলেন 'ফ্রিজ থেকে কোক নিয়ে আসো', তবে VLA মডেলের কারণে রোবটটি ফ্রিজ চিনবে, কোক কোনটি তা শনাক্ত করবে এবং হাত বাড়িয়ে সেটি নিয়ে আসবে।"
    },
    {
      id: 7,
      title: "হাই-ফিডেলিটি ডাটা",
      summary: "অত্যন্ত সূক্ষ্ম এবং হাই-কোয়ালিটি সেন্সর তথ্য সংগ্রহ।",
      details: "এটি শুধু সাধারণ ভিডিও ফুটেজ নয়। এতে রোবটের প্রতিটি মোটরের ভোল্টেজ, তাপমাত্রা, এবং সে কতটুকু ওজন বহন করছে তার নিখুঁত হিসাব থাকে। এই ডাটাই হলো রোবটিক AI-এর আসল জ্বালানি।\n\nউদাহরণ: কোনো রোবট যখন একটি কাঁচের গ্লাস ধরে, তখন সে ঠিক কতটুকু শক্তিতে ধরবে যাতে গ্লাসটি না ভাঙে বা হাত থেকে না পড়ে যায়, সেই সূক্ষ্ম তথ্যই হলো হাই-ফিডেলিটি ডাটা।"
    },
    {
      id: 8,
      title: "এজ-কেস (Edge Cases) সমাধান",
      summary: "অস্বাভাবিক বা নতুন পরিস্থিতিতে সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা।",
      details: "এজ-কেস হলো এমন পরিস্থিতি যা রোবটের ট্রেনিং ডাটাতে আগে ছিল না। মানুষ টেলিকন্ট্রোলের মাধ্যমে এই কঠিন মুহূর্তগুলোতে রোবটকে সাহায্য করে এবং রোবট সেই নতুন অভিজ্ঞতা থেকে শিখতে থাকে।\n\nউদাহরণ: রোবট হয়তো জানে রাস্তা দিয়ে কীভাবে হাঁটতে হয়, কিন্তু হঠাৎ রাস্তায় কাদা বা গর্ত দেখলে সে কী করবে তা সে জানে না। মানুষ তখন তাকে ওই গর্ত এড়িয়ে চলতে শিখিয়ে দেয়।"
    },
    {
      id: 9,
      title: "হার্ডওয়্যার অ্যাগনস্টিক সিস্টেম",
      summary: "যেকোনো ধরণের রোবটে PrismaX ব্যবহারের সুবিধা।",
      details: "PrismaX-এর সফটওয়্যার এমনভাবে তৈরি যে এটি যেকোনো ব্র্যান্ডের রোবটিক হার্ডওয়্যারে চালানো সম্ভব। এটি অনেকটা কম্পিউটারের উইন্ডোজ বা মোবাইলের অ্যান্ড্রয়েড অপারেটিং সিস্টেমের মতো।\n\nউদাহরণ: আপনি PrismaX-এর ব্রেইনটি দিয়ে একটি ছোট খেলনা রোবটও চালাতে পারেন, আবার টেসলা অপ্টিমাস বা ইউনিট্রি জি১-এর মতো উন্নত রোবটও কন্ট্রোল করতে পারেন।"
    },
    {
      id: 10,
      title: "Optimum Network",
      summary: "রিয়েল-টাইম অপারেশনের জন্য লো-লেটেন্সি নেটওয়ার্ক।",
      details: "রিমোট অপারেশনের সময় যদি ভিডিওতে ল্যাগ (Lag) থাকে, তবে দুর্ঘটনা ঘটতে পারে। Optimum Network নিশ্চিত করে যে কন্ট্রোলারের নির্দেশ যেন মিলিসেকেন্ডের মধ্যে রোবটের কাছে পৌঁছায়।\n\nউদাহরণ: আপনি লস অ্যাঞ্জেলেসের একটি রোবটকে বাংলাদেশ থেকে চালাচ্ছেন। আপনি যখন আপনার জয়স্টিক ঘুরাবেন, ঠিক সেই মুহূর্তেই রোবটটি নড়বে, কোনো বিলম্ব ছাড়াই।"
    },
    {
      id: 11,
      title: "RLNC টেকনোলজি",
      summary: "দুর্বল ইন্টারনেটেও শক্তিশালী ডাটা ট্রান্সমিশন।",
      details: "Random Linear Network Coding হলো এমন একটি পদ্ধতি যা ইন্টারনেটের প্যাকেটে কোনো সমস্যা থাকলেও ডাটা হারিয়ে যেতে দেয় না। এর ফলে ইন্টারনেটের সিগন্যাল দুর্বল হলেও রোবট ডিসকানেক্ট হয় না।\n\nউদাহরণ: গ্রামে বা দুর্বল ওয়াইফাইতে জুম কল যেমন ফেটে যায় বা ল্যাগ করে, PrismaX-এর এই টেকনোলজির কারণে রোবট কন্ট্রোল করার সময় তেমনটি হবে না।"
    },
    {
      id: 12,
      title: "ডাটা মাইনিং ২.০",
      summary: "অংক কষে নয়, রোবট ট্রেনিং-এর মাধ্যমে রিওয়ার্ড অর্জন।",
      details: "পুরানো ক্রিপ্টো মাইনিং-এ অনেক বিদ্যুৎ খরচ হতো। কিন্তু এখানে আপনি যখন রোবটকে টেলিকন্ট্রোলের মাধ্যমে কোনো কাজ শেখান, তখন আপনি নেটওয়ার্কের জন্য মূল্যবান ডাটা তৈরি করছেন। এই অবদানের বিনিময়ে আপনি রিওয়ার্ড পাবেন।\n\nউদাহরণ: আপনি প্রতিদিন অবসর সময়ে আধা ঘণ্টা রোবটকে ঘর পরিষ্কার করার ট্রেনিং দিলেন, আর তার বিনিময়ে আপনার একাউন্টে প্রিজমা পয়েন্ট জমা হলো।"
    },
    {
      id: 13,
      title: "প্রাইভেসি ও ডাটা এনক্রিপশন",
      summary: "ব্যবহারকারীর নিরাপত্তা এবং গোপনীয়তা রক্ষা।",
      details: "রোবট যে ডাটা সংগ্রহ করে তা সরাসরি কারো দেখার সুযোগ নেই। ডাটাগুলো এনক্রিপ্ট করে কোড আকারে সেভ করা হয় যাতে ইউজারের বাড়ির বা অফিসের গোপনীয়তা কোনোভাবেই নষ্ট না হয়।\n\nউদাহরণ: রোবট যখন আপনার ঘর দেখে, সে মানুষের মতো 'বিছানা' বা 'ড্রেসিং টেবিল' দেখে না, সে দেখে শুধু কোঅর্ডিনেট এবং ফিজিক্যাল ডাটা যা অন্য কেউ বুঝতে পারবে না।"
    },
    {
      id: 14,
      title: "ফাউন্ডেশন মডেল",
      summary: "সব রোবটের জন্য একটি সাধারণ মস্তিস্ক।",
      details: "PrismaX একটি বিশাল AI মডেল তৈরি করছে যা সব রোবটের জন্য ব্রেইন হিসেবে কাজ করবে। একবার একটি রোবট কিছু শিখলে পৃথিবীর সব PrismaX সংযুক্ত রোবট সেই কাজটি শিখে যাবে।\n\nউদাহরণ: অনেকটা ক্লাউড ড্রাইভের মতো। একটি ডিভাইস থেকে ফাইল আপলোড করলে অন্য সব ডিভাইসে যেমন তা পাওয়া যায়, রোবটের বুদ্ধিও এখানে সেভাবে কাজ করে।"
    },
    {
      id: 15,
      title: "কোঅর্ডিনেশন লেয়ার",
      summary: "মানুষের নির্দেশ এবং রোবটের মেকানিক্যাল আউটপুটের সমন্বয়।",
      details: "এটি একটি কন্ট্রোল মেকানিজম যা নিশ্চিত করে যে মানুষের দেওয়া কমান্ডগুলো রোবটের মোটর এবং জয়েন্টগুলো নির্ভুলভাবে পালন করছে। এটি অনেকটা মানুষের নার্ভাস সিস্টেমের মতো কাজ করে।\n\nউদাহরণ: আপনি যখন হাত দিয়ে কোনো ভারী জিনিস তোলার নির্দেশ দেন, তখন কোঅর্ডিনেশন লেয়ার হিসাব করে দেখে রোবটটির কতটুকু শক্তি প্রয়োগ করতে হবে।"
    },
    {
      id: 16,
      title: "প্রুফ অফ ইউজফুল ওয়ার্ক (PoUW)",
      summary: "অপ্রয়োজনীয় বিদ্যুৎ নষ্ট না করে কার্যকর কাজ করা।",
      details: "বিটকয়েন মাইনিং যেমন অংক কষার মাধ্যমে বিদ্যুৎ নষ্ট করে, PrismaX-এ তা হয় না। এখানে নেটওয়ার্কের কাজ সম্পন্ন হয় 'দরকারী কাজের' (রোবট ট্রেনিং) মাধ্যমে, যা পৃথিবীর জন্য সত্যিকার অর্থে উপকারী।\n\nউদাহরণ: আপনার কম্পিউটারের প্রসেসিং পাওয়ার এমন কাজে ব্যবহার হচ্ছে যা ভবিষ্যতে রোবটকে আরও দক্ষ বানাতে সাহায্য করছে।"
    },
    {
      id: 17,
      title: "হিউম্যান-ইন-দ্য-লুপ (HITL)",
      summary: "AI-এর সব কাজে মানুষের তদারকি এবং নিয়ন্ত্রণ।",
      details: "পুরোপুরি অটোনোমাস বা স্বয়ংক্রিয় হওয়ার আগ পর্যন্ত মানুষের নজরদারি জরুরি। HITL সিস্টেম নিশ্চিত করে যে AI যদি ভুল কিছু করতে যায়, তবে তৎক্ষণাৎ একজন মানুষ তাকে থামিয়ে সঠিক পথ দেখাতে পারবে।\n\nউদাহরণ: একটি গাড়ি যখন সেলফ-ড্রাইভিং মোডে থাকে, চালক যেমন সবসময় রেডি থাকে স্টিয়ারিং ধরার জন্য, রোবটের ক্ষেত্রেও বিষয়টি তাই।"
    },
    {
      id: 18,
      title: "ডিসেন্ট্রালাইজড নোড নেটওয়ার্ক",
      summary: "সার্ভারের কোনো নির্দিষ্ট কেন্দ্র না থাকা।",
      details: "PrismaX-এর সার্ভার সারা পৃথিবীতে ছড়িয়ে আছে। একেকটি নোড একেকজন ইউজারের কম্পিউটারে চলে। এর ফলে কোনো হ্যাকার বা একটি দুর্যোগ পুরো সিস্টেমকে কখনো বন্ধ করতে পারে না।\n\nউদাহরণ: টরেন্ট যেমন কখনো বন্ধ করা যায় না কারণ এর ডাটা কারো একজনের কাছে নেই, PrismaX-এর রোবট নেটওয়ার্কও তেমনি অজেয়।"
    },
    {
      id: 19,
      title: "স্কেলেবল ইন্টেলিজেন্স",
      summary: "কমিউনিটির অবদানের সাথে বুদ্ধিমত্তা বৃদ্ধির হার।",
      details: "যত বেশি রোবট এবং কন্ট্রোলার এই নেটওয়ার্কে যুক্ত হবে, ডাটা কালেকশনের গতি তত বাড়বে। এর ফলে AI-এর বুদ্ধিমত্তা বৃদ্ধির হার জ্যামিতিক হারে বৃদ্ধি পাবে।\n\nউদাহরণ: একজন ছাত্র একা পড়ার চেয়ে ১০ জন বন্ধু মিলে গ্রুপ স্টাডি করলে যেমন দ্রুত শেখা যায়, PrismaX-এর রোবটগুলোও সেভাবে যৌথভাবে শেখে।"
    },
    {
      id: 20,
      title: "সিকার (Seeker) কমিউনিটি",
      summary: "ব্যবহারকারীদের হাতেই প্রজেক্টের ভবিষ্যৎ সিদ্ধান্ত।",
      details: "সিকাররা হলো সেই মানুষ যারা এই প্রজেক্টের সাথে শুরু থেকেই জড়িত। ভবিষ্যতে প্রজেক্টটি কোন দিকে যাবে এবং কী কী আপডেট আসবে, তা সিকার কমিউনিটির ভোটের মাধ্যমে নির্ধারণ করা হবে।\n\nউদাহরণ: একটি সমবায় সমিতির মেম্বাররা যেমন ভোটাভুটির মাধ্যমে সব সিদ্ধান্ত নেয়, PrismaX-এর ইউজারেরাও তাদের নেটওয়ার্কের মালিক এবং পরিচালক।"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#DFD8D0]/20 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 backdrop-blur-xl px-8 py-5 flex justify-between items-center transition-all">
        <div className="flex items-center gap-1 group cursor-pointer">
          <h1 className="text-3xl font-serif text-white tracking-tight">
            Prisma<span className="text-xl align-top ml-0.5 text-[#DFD8D0] font-sans group-hover:text-white transition italic">(x)</span>
          </h1>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#DFD8D0]/60">
          <a href="#hero" className="hover:text-white transition">Overview</a>
          <a href="#protocols" className="hover:text-white transition">Protocols</a>
          <a href="#whitepaper" className="hover:text-white transition">Research</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <section id="hero" className="pt-52 pb-32 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-[#DFD8D0] text-xs font-bold tracking-[0.5em] uppercase mb-6 block opacity-60">Intelligence Mapping Layer</span>
            <h2 className="text-6xl md:text-[8.5rem] font-serif text-white tracking-tighter leading-[0.85] mb-12">
              Prisma<span className="text-4xl md:text-6xl align-top ml-1 text-[#DFD8D0] italic">(x)</span> <br /> 
              <span className="italic text-white uppercase">Physical AI</span> <br />
              <span className="text-3xl md:text-4xl font-sans font-light tracking-[0.3em] text-[#DFD8D0]/40 block mt-6 uppercase">
                Simplified for Seekers
              </span>
            </h2>
          </motion.div>
        </section>

        {/* --- PROTOCOL CARDS --- */}
        <section id="protocols" className="py-24 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {protocolDetails.map((item) => (
                <div key={item.id} onClick={() => setSelectedTopic(item)} className="cursor-pointer">
                  <ProtocolCard icon={item.id === 'p1' ? <ShieldCheck /> : item.id === 'p2' ? <Zap /> : <BookOpen />} title={item.title} desc={item.summary} />
                </div>
              ))}
           </div>
        </section>

        {/* --- WHITEPAPER TOPICS GRID --- */}
        <section id="whitepaper" className="py-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <h3 className="text-5xl md:text-7xl font-serif text-white italic tracking-tighter">Research <br /> Explorer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whitepaperTopics.map((topic) => (
              <motion.div 
                key={topic.id} 
                whileHover={{ y: -5 }} 
                onClick={() => setSelectedTopic(topic)} 
                className="p-10 rounded-[50px] glass-card transition-all cursor-pointer group flex justify-between items-center"
              >
                <div className="flex gap-8 items-center">
                  <span className="text-[#DFD8D0] font-serif text-3xl opacity-10 group-hover:opacity-100 transition italic">0{topic.id}</span>
                  <div>
                    <h4 className="text-2xl font-serif text-white mb-2 italic group-hover:text-[#DFD8D0] tracking-tight">{topic.title}</h4>
                    <p className="text-[#DFD8D0]/50 text-[10px] uppercase tracking-widest">{topic.summary}</p>
                  </div>
                </div>
                <div className="p-3 rounded-full border border-white/5 group-hover:bg-[#DFD8D0] group-hover:text-black transition">
                  <ChevronRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* --- DETAILED MODAL --- */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedTopic(null)} className="absolute inset-0" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 50 }} className="relative bg-[#0d0d0d] border border-white/10 p-12 md:p-20 rounded-[60px] max-w-4xl w-full overflow-y-auto max-h-[85vh] scrollbar-hide shadow-2xl">
              <button onClick={() => setSelectedTopic(null)} className="absolute top-10 right-10 p-3 text-gray-500 hover:text-white"><X size={32} /></button>
              <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 italic leading-[1.1] tracking-tighter">{selectedTopic.title}</h3>
              <div className="space-y-10">
                <div className="p-8 bg-white/5 rounded-3xl italic text-[#DFD8D0] text-xl">&ldquo;{selectedTopic.summary}&rdquo;</div>
                <p className="text-[#DFD8D0]/70 text-xl leading-[1.8] font-light whitespace-pre-line">{selectedTopic.details}</p>
              </div>
              <div className="mt-20 pt-10 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 flex justify-between">
                <span>Architecture Layer Analysis</span>
                <button onClick={() => setSelectedTopic(null)} className="text-[#DFD8D0] hover:underline">Close Explorer</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-white/5">
        <p className="text-[#DFD8D0]/30 text-[10px] font-black tracking-[0.5em] uppercase">Dev by Himu &bull; Built for the PrismaX Seeker Community &bull; 2026</p>
      </footer>
    </div>
  );
}

function ProtocolCard({ icon, title, desc }: any) {
  return (
    <div className="p-12 rounded-[50px] glass-card group transition-all h-full">
      <div className="w-16 h-16 bg-[#DFD8D0]/5 rounded-3xl flex items-center justify-center mb-8 text-[#DFD8D0] group-hover:scale-110 transition">{icon}</div>
      <h4 className="text-2xl font-serif text-white mb-4 italic tracking-tight">{title}</h4>
      <p className="text-[#DFD8D0]/40 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}